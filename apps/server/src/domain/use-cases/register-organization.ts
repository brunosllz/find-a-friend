import { Organization } from '../entities/organization'
import { OrganizationsRepository } from '../repositories/organizations-repository'
import { OrganizationAlreadyExistsError } from './errors/organization-already-exists-error'
import { hash } from 'bcryptjs'

type RegisterOrganizationUseCaseRequest = {
  cep: string
  email: string
  name: string
  password: string
  phoneNumber: string
  address: {
    street: string
    city: string
    number: string
    stateName: string
    stateAcronym: string
  }
  location: {
    lat: string
    lng: string
  }
}

type RegisterOrganizationUseCaseResponse = {
  organization: Organization
}

export class RegisterOrganizationUseCase {
  constructor(
    private readonly organizationsRepository: OrganizationsRepository,
  ) {}

  async execute({
    address,
    location,
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

    const passwordHashed = await hash(password, 8)

    const createdOrganization = Organization.create({
      address,
      location,
      cep,
      email,
      name,
      password: passwordHashed,
      phoneNumber,
    })

    const organization = await this.organizationsRepository.create(
      createdOrganization,
    )

    return { organization }
  }
}
