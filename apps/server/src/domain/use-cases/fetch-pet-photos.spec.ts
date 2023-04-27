import { MakePet } from 'test/factories/pet-factory'
import { InMemoryPetsRepository } from 'test/repositories/in-memory-pets-repository'
import { describe, expect, it, beforeEach } from 'vitest'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

import { InMemoryPetsPhotosRepository } from 'test/repositories/in-memory-pets-photos-repository'
import { FetchPetPhotosUseCase } from './fetch-pet-photos'
import { MakePetPhotos } from 'test/factories/pet-photos-factory'

describe('Fetch pet photos use case', () => {
  let petsRepository: InMemoryPetsRepository
  let petsPhotosRepository: InMemoryPetsPhotosRepository
  let sut: FetchPetPhotosUseCase

  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    petsPhotosRepository = new InMemoryPetsPhotosRepository()
    sut = new FetchPetPhotosUseCase(petsRepository, petsPhotosRepository)
  })

  it('Should be able fetch all photo of pet', async () => {
    const pet = MakePet()
    const createdPhotos = MakePetPhotos(pet.id)
    pet.savePhotos(createdPhotos)

    await petsRepository.create(pet)
    await petsPhotosRepository.save(createdPhotos)

    const { photos } = await sut.execute({
      id: pet.id,
    })

    expect(photos.values).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          url: expect.any(String),
        }),
      ]),
    )
  })

  it('Should be not able fetch pet photos with non exists pet id', async () => {
    await expect(
      sut.execute({
        id: 'id-non-exists',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
