import { describe, expect, it, beforeEach } from 'vitest'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { InMemoryOrganizationsRepository } from 'test/repositories/in-memory-organizations-repository'
import { MakeOrganization } from 'test/factories/organization-factory'
import { GetOrganizationUseCase } from './get-organization'

describe('Get organization use case', () => {
  let organizationsRepository: InMemoryOrganizationsRepository
  let sut: GetOrganizationUseCase

  beforeEach(() => {
    organizationsRepository = new InMemoryOrganizationsRepository()
    sut = new GetOrganizationUseCase(organizationsRepository)
  })

  it('Should be able to get a organization', async () => {
    const { id } = await organizationsRepository.create(MakeOrganization())

    const { organization } = await sut.execute({
      id,
    })

    expect(organization).toEqual(expect.objectContaining({ id }))
  })

  it('Should be not able to get a organization with non exists id', async () => {
    await expect(
      sut.execute({
        id: 'id-non-exists',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
