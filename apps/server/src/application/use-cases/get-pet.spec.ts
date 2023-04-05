import { MakePet } from 'test/factories/pet-factory'
import { InMemoryPetsRepository } from 'test/repositories/in-memory-pets-repository'
import { describe, expect, it, beforeEach } from 'vitest'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { GetPetUseCase } from './get-pet'

describe('Get pet use case', () => {
  let petsRepository: InMemoryPetsRepository
  let sut: GetPetUseCase

  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    sut = new GetPetUseCase(petsRepository)
  })

  it('Should be able to get a pet', async () => {
    const { id } = await petsRepository.create(MakePet())

    const { pet } = await sut.execute({
      id,
    })

    expect(pet).toEqual(expect.objectContaining({ id }))
  })

  it('Should be not able to get a pet with non exists id', async () => {
    await expect(
      sut.execute({
        id: 'id-non-exists',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
