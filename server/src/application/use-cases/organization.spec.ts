import { compare } from 'bcryptjs'
import { InMemoryOrganizationRepository } from 'test/repositories/in-memory-organization-repository'
import { describe, expect, it, beforeEach } from 'vitest'
import { OrganizationAlreadyExistsError } from './errors/organization-already-exists-error'
import { OrganizationUseCase } from './organization'

describe('Organization use case', () => {
  let organizationRepository: InMemoryOrganizationRepository
  let sut: OrganizationUseCase

  beforeEach(() => {
    organizationRepository = new InMemoryOrganizationRepository()
    sut = new OrganizationUseCase(organizationRepository)
  })

  it('Should be able register a organization', async () => {
    const { organization } = await sut.execute({
      name: 'organization example',
      email: 'organization@email.com',
      password: '123456',
      address: 'street example',
      cep: '99999000',
      phoneNumber: '99999999999',
    })

    expect(organization.id).toEqual(expect.any(String))
  })

  it('Should be not able register a organization with a same email twice', async () => {
    await sut.execute({
      name: 'organization example',
      email: 'organization@email.com',
      password: '123456',
      address: 'street example',
      cep: '99999000',
      phoneNumber: '99999999999',
    })

    await expect(() =>
      sut.execute({
        name: 'organization example',
        email: 'organization@email.com',
        password: '123456',
        address: 'street example',
        cep: '99999000',
        phoneNumber: '99999999999',
      }),
    ).rejects.toBeInstanceOf(OrganizationAlreadyExistsError)
  })

  it('Should hash password in the registration', async () => {
    const { organization } = await sut.execute({
      name: 'organization example',
      email: 'organization@email.com',
      password: '123456',
      address: 'street example',
      cep: '99999000',
      phoneNumber: '99999999999',
    })

    const isPasswordCorrectlyHashed = await compare(
      '123456',
      organization.password,
    )

    expect(isPasswordCorrectlyHashed).toBe(true)
  })
})
