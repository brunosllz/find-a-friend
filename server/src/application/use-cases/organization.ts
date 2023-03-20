import { Organization } from '../entities/organization'
import { OrganizationRepository } from '../repositories/organization-repository'
import { OrganizationAlreadyExistsError } from './errors/organization-already-exists-error'
import { hash } from 'bcryptjs'

interface OrganizationUseCaseRequest {
  address: string
  cep: string
  email: string
  name: string
  password: string
  phoneNumber: string
}

interface OrganizationUseCaseResponse {
  organization: Organization
}

export class OrganizationUseCase {
  constructor(private organizationRepository: OrganizationRepository) {}

  async execute({
    address,
    cep,
    email,
    name,
    password,
    phoneNumber,
  }: OrganizationUseCaseRequest): Promise<OrganizationUseCaseResponse> {
    const passwordHashed = await hash(password, 8)

    const createdOrganization = new Organization({
      address,
      cep,
      email,
      name,
      password: passwordHashed,
      phoneNumber,
    })

    const orgExists = await this.organizationRepository.findByEmail(email)

    if (orgExists) {
      throw new OrganizationAlreadyExistsError()
    }

    const organization = await this.organizationRepository.create(
      createdOrganization,
    )

    return { organization }
  }
}
