import { MakeOrganization } from 'test/factories/organization-factory'
import { MakePet } from 'test/factories/pet-factory'
import { InMemoryPetsRepository } from 'test/repositories/in-memory-pets-repository'
import { describe, expect, it, beforeEach } from 'vitest'
import { SearchPetsUseCase } from './search-pets'

describe('Search pets use case', () => {
  let petsRepository: InMemoryPetsRepository
  let sut: SearchPetsUseCase

  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    sut = new SearchPetsUseCase(petsRepository)
  })

  it('Should be able to fetch many pets', async () => {
    const organization = MakeOrganization()

    await petsRepository.create(
      MakePet({
        city: 'Bento Gonçalves',
        orgId: organization.id,
      }),
    )

    await petsRepository.create(
      MakePet({
        city: 'Bento Gonçalves',
        orgId: organization.id,
      }),
    )

    const { pets } = await sut.execute({
      page: 1,
      city: 'Bento Gonçalves',
    })

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
          city: 'Bento Gonçalves',
          name: `pet name ${i}`,
          orgId: organization.id,
        }),
      )
    }

    const { pets } = await sut.execute({ page: 2, city: 'Bento Gonçalves' })

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

  it('Should be able apply a filters on fetch pets', async () => {
    const organization = MakeOrganization()

    await petsRepository.create(
      MakePet({
        city: 'Bento Gonçalves',
        orgId: organization.id,
        age: 'elderly',
        energy: 3,
      }),
    )

    await petsRepository.create(
      MakePet({
        city: 'Bento Gonçalves',
        orgId: organization.id,
        age: 'adolescent',
        energy: 3,
      }),
    )

    const { pets } = await sut.execute({
      page: 1,
      city: 'Bento Gonçalves',
      params: {
        age: 'adolescent',
        energy: 3,
      },
    })

    expect(pets).toHaveLength(1)
    expect(pets).toEqual(
      expect.arrayContaining([expect.objectContaining({ age: 'adolescent' })]),
    )
  })
})
