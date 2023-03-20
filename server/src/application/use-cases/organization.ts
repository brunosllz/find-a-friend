import { Organization } from '../entities/organization'
import { OrganizationRepository } from '../repositories/organization-repository'

interface OrganizationUseCaseRequest {
  address: string
  cep: string
  email: string
  name: string
  password: string
  phoneNumber: string
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
  }: OrganizationUseCaseRequest) {
    const createdOrganization = new Organization({
      address,
      cep,
      email,
      name,
      password,
      phoneNumber,
    })

    const orgExists = await this.organizationRepository.findByEmail(email)

    if (orgExists) {
      throw new Error('Organization already exists.')
    }

    const organization = await this.organizationRepository.create(
      createdOrganization,
    )

    return { organization }
  }
}
