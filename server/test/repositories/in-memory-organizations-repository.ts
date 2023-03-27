import { OrganizationDTO } from '@/application/repositories/dto/organization-dto'
import { OrganizationsRepository } from '@/application/repositories/organizations-repository'

export class InMemoryOrganizationsRepository
  implements OrganizationsRepository
{
  private organizations: OrganizationDTO[] = []

  async create(organization: OrganizationDTO) {
    this.organizations.push(organization)

    return organization
  }

  async findByEmail(email: string) {
    const organization = this.organizations.find((org) => org.email === email)

    if (!organization) {
      return null
    }

    return organization
  }

  async findById(id: string) {
    const organization = this.organizations.find((org) => org.id === id)

    if (!organization) {
      return null
    }

    return organization
  }
}
