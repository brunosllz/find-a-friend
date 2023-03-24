import { MakeOrganization } from 'test/factories/organization-factory'
import { MakePet } from 'test/factories/pet-factory'
import { InMemoryPetsRepository } from 'test/repositories/in-memory-pets-repository'
import { describe, expect, it, beforeEach } from 'vitest'
import { FetchPetsUseCase } from './fetch-pets'

describe('Create pet use case', () => {
  let petsRepository: InMemoryPetsRepository
  let sut: FetchPetsUseCase

  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    sut = new FetchPetsUseCase(petsRepository)
  })

  it('Should be able to fetch many pets', async () => {
    const organization = MakeOrganization()

    await petsRepository.create(
      MakePet({
        orgId: organization.id,
      }),
    )

    await petsRepository.create(
      MakePet({
        orgId: organization.id,
      }),
    )

    const { pets } = await sut.execute({ page: 1 })

    expect(pets).toHaveLength(2)
    expect(pets).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ orgId: organization.id }),
      ]),
    )
  })

  it('Should be able to paginated fetch pets', async () => {
    const organization = MakeOrganization()

    for (let i = 1; i <= 25; i++) {
      await petsRepository.create(
        MakePet({
          name: `pet name ${i}`,
          orgId: organization.id,
        }),
      )
    }

    const { pets } = await sut.execute({ page: 2 })

    expect(pets).toHaveLength(5)
    expect(pets).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'pet name 21',
          orgId: organization.id,
        }),
        expect.objectContaining({
          name: 'pet name 22',
          orgId: organization.id,
        }),
      ]),
    )
  })
})
