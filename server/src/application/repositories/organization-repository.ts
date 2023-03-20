import { Organization } from '../entities/organization'

export interface OrganizationRepository {
  create(organization: Organization): Promise<Organization>
  findByEmail(email: string): Promise<Organization | null>
  findById(id: string): Promise<Organization | null>
}
