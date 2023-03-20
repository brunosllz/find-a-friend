import { MakeOrganization } from 'test/factories/organization-factory'
import { InMemoryOrganizationRepository } from 'test/repositories/in-memory-organization-repository'
import { InMemoryPetRepository } from 'test/repositories/in-memory-pet-repository'
import { describe, expect, it, beforeEach } from 'vitest'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { PetUseCase } from './pet'

describe('Pet use case', () => {
  let petRepository: InMemoryPetRepository
  let organizationRepository: InMemoryOrganizationRepository
  let sut: PetUseCase

  beforeEach(() => {
    petRepository = new InMemoryPetRepository()
    organizationRepository = new InMemoryOrganizationRepository()
    sut = new PetUseCase(petRepository, organizationRepository)
  })

  it('Should be able register a pet with org id valid', async () => {
    const createdOrganization = MakeOrganization()

    const organization = await organizationRepository.create(
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
