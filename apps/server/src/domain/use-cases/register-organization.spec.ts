import { compare } from 'bcryptjs'
import { InMemoryOrganizationsRepository } from 'test/repositories/in-memory-organizations-repository'
import { describe, expect, it, beforeEach } from 'vitest'
import { Organization } from '../entities/organization'
import { OrganizationAlreadyExistsError } from './errors/organization-already-exists-error'
import {
  AddressParams,
  LocationParams,
  RegisterOrganizationUseCase,
} from './register-organization'

async function mockGetGeoLocation(
  address: AddressParams,
): Promise<LocationParams> {
  const location = {
    lat: '-50.4568',
    lng: '-98.4578',
  }

  return location
}

describe('Register organization use case', () => {
  let organizationsRepository: InMemoryOrganizationsRepository
  let sut: RegisterOrganizationUseCase

  beforeEach(() => {
    organizationsRepository = new InMemoryOrganizationsRepository()
    sut = new RegisterOrganizationUseCase(
      organizationsRepository,
      mockGetGeoLocation,
    )
  })

  it('Should be able register a organization', async () => {
    const { organization } = await sut.execute({
      name: 'organization example',
      email: 'organization@email.com',
      password: 'Org1423!',
      address: {
        city: 'Example city name',
        number: '123',
        stateAcronym: 'RS',
        stateName: 'Rio Grande do Sul',
        street: 'Example street name',
      },
      cep: '99999000',
      phoneNumber: '99999999999',
    })

    expect(organization.id).toEqual(expect.any(String))
    expect(organization.location).toEqual(
      expect.objectContaining({
        lat: expect.any(String),
        lng: expect.any(String),
      }),
    )
    expect(organization).toBeInstanceOf(Organization)
  })

  it('Should be not able register a organization with a same email twice', async () => {
    await sut.execute({
      name: 'organization example',
      email: 'organization@email.com',
      password: 'Org1423!',
      address: {
        city: 'Example city name',
        number: '123',
        stateAcronym: 'RS',
        stateName: 'Rio Grande do Sul',
        street: 'Example street name',
      },
      cep: '99999000',
      phoneNumber: '99999999999',
    })

    await expect(() =>
      sut.execute({
        name: 'organization example',
        email: 'organization@email.com',
        password: 'Org1423!',
        address: {
          city: 'Example city name',
          number: '123',
          stateAcronym: 'RS',
          stateName: 'Rio Grande do Sul',
          street: 'Example street name',
        },
        cep: '99999000',
        phoneNumber: '99999999999',
      }),
    ).rejects.toBeInstanceOf(OrganizationAlreadyExistsError)
  })

  it('Should be hashed password in the registration', async () => {
    const { organization } = await sut.execute({
      name: 'organization example',
      email: 'organization@email.com',
      password: 'Org1423!',
      address: {
        city: 'Example city name',
        number: '123',
        stateAcronym: 'RS',
        stateName: 'Rio Grande do Sul',
        street: 'Example street name',
      },
      cep: '99999000',
      phoneNumber: '99999999999',
    })

    const isPasswordCorrectlyHashed = await compare(
      'Org1423!',
      organization.password.value,
    )

    expect(isPasswordCorrectlyHashed).toBe(true)
  })
})
