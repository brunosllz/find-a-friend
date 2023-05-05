import { Organization } from '../entities/organization'
import { OrganizationsRepository } from '../repositories/organizations-repository'
import { OrganizationAlreadyExistsError } from './errors/organization-already-exists-error'
import { hash } from 'bcryptjs'

export type LocationParams = {
  lat: string
  lng: string
}

export type AddressParams = {
  street: string
  city: string
  number: string
  stateName: string
  stateAcronym: string
}

type RegisterOrganizationUseCaseRequest = {
  cep: string
  email: string
  name: string
  password: string
  phoneNumber: string
  address: AddressParams
}

type GetGeoLocationService = (address: AddressParams) => Promise<LocationParams>

type RegisterOrganizationUseCaseResponse = {
  organization: Organization
}

export class RegisterOrganizationUseCase {
  constructor(
    private readonly organizationsRepository: OrganizationsRepository,
    private readonly getGeoLocationService: GetGeoLocationService,
  ) {}

  async execute({
    address,
    cep,
    email,
    name,
    password,
    phoneNumber,
  }: RegisterOrganizationUseCaseRequest): Promise<RegisterOrganizationUseCaseResponse> {
    const orgExists = await this.organizationsRepository.findByEmail(email)

    if (orgExists) {
      throw new OrganizationAlreadyExistsError()
    }

    const location = await this.getGeoLocationService(address)

    const createdOrganization = Organization.create({
      address,
      location,
      cep,
      email,
      name,
      password,
      phoneNumber,
    })

    const passwordHashed = await hash(password, 8)
    createdOrganization.setHashedPassword(passwordHashed)

    const organization = await this.organizationsRepository.create(
      createdOrganization,
    )

    return { organization }
  }
}
