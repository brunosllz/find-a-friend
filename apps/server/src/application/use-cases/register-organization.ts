import { Organization } from '../entities/organization'
import { OrganizationsRepository } from '../repositories/organizations-repository'
import { OrganizationAlreadyExistsError } from './errors/organization-already-exists-error'
import { hash } from 'bcryptjs'

type RegisterOrganizationUseCaseRequest = {
  address: string
  cep: string
  email: string
  name: string
  password: string
  phoneNumber: string
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

    const createdOrganization = new Organization({
      address,
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
