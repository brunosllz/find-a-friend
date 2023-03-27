import { hash } from 'bcryptjs'
import { MakeOrganization } from 'test/factories/organization-factory'
import { InMemoryOrganizationsRepository } from 'test/repositories/in-memory-organizations-repository'
import { describe, it, expect, beforeEach } from 'vitest'
import { AuthenticateUseCase } from './authenticate'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'

let organizationsRepository: InMemoryOrganizationsRepository
let sut: AuthenticateUseCase

describe('Authenticate use case', () => {
  beforeEach(() => {
    organizationsRepository = new InMemoryOrganizationsRepository()
    sut = new AuthenticateUseCase(organizationsRepository)
  })

  it('Should be able to authenticate', async () => {
    organizationsRepository.create(
      MakeOrganization({
        password: await hash('Org1423!', 8),
      }),
    )

    const { organization } = await sut.execute({
      email: 'organization@email.com',
      password: 'Org1423!',
    })

    expect(organization.id).toEqual(expect.any(String))
  })

  it('Should be not able to authenticate with wrong email', async () => {
    await expect(() =>
      sut.execute({
        email: 'johndoe@email.com',
        password: '12345678',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })

  it('Should be not able to authenticate with wrong password', async () => {
    organizationsRepository.create(MakeOrganization())

    await expect(() =>
      sut.execute({
        email: 'organization@email.com',
        password: '12345678',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})
