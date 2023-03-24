import { MakeOrganization } from 'test/factories/organization-factory'
import { InMemoryOrganizationsRepository } from 'test/repositories/in-memory-organizations-repository'
import { InMemoryPetsRepository } from 'test/repositories/in-memory-pets-repository'
import { describe, expect, it, beforeEach } from 'vitest'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { CreatePetUseCase } from './create-pet'

describe('Create pet use case', () => {
  let petsRepository: InMemoryPetsRepository
  let organizationsRepository: InMemoryOrganizationsRepository
  let sut: CreatePetUseCase

  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    organizationsRepository = new InMemoryOrganizationsRepository()
    sut = new CreatePetUseCase(petsRepository, organizationsRepository)
  })

  it('Should be able register a pet with org id valid', async () => {
    const createdOrganization = MakeOrganization()

    const organization = await organizationsRepository.create(
      createdOrganization,
    )

    const { pet } = await sut.execute({
      name: 'princes',
      age: 'elderly',
      city: 'any where',
      description: 'Is a pet',
      energy: 5,
      independence: 'high',
      photo: 'https://www.pet-images.com/image.png',
      size: 'big',
      type: 'dog',
      orgId: organization.id,
    })

    expect(pet.id).toEqual(expect.any(String))
  })

  it('Should be not able register a pet with a invalid org id', async () => {
    await expect(
      sut.execute({
        name: 'princes',
        age: 'elderly',
        city: 'any where',
        description: 'Is a pet',
        energy: 5,
        independence: 'high',
        photo: 'https://www.pet-images.com/image.png',
        size: 'big',
        type: 'dog',
        orgId: 'org-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
