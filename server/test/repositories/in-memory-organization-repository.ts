import { Organization } from '@/application/entities/organization'
import { OrganizationRepository } from '@/application/repositories/organization-repository'

export class InMemoryOrganizationRepository implements OrganizationRepository {
  private organizations: Organization[] = []

  async create(organization: Organization) {
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
