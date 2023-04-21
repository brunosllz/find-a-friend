import { Organization } from '../entities/organization'
import { OrganizationsRepository } from '../repositories/organizations-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

type GetOrganizationUseCaseRequest = {
  id: string
}

type GetOrganizationUseCaseResponse = {
  organization: Organization
}

export class GetOrganizationUseCase {
  constructor(private organizationsRepository: OrganizationsRepository) {}

  async execute({
    id,
  }: GetOrganizationUseCaseRequest): Promise<GetOrganizationUseCaseResponse> {
    const organization = await this.organizationsRepository.findById(id)

    if (!organization) {
      throw new ResourceNotFoundError()
    }

    return { organization }
  }
}
