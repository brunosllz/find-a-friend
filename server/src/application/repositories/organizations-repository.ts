import { OrganizationDTO } from './dto/organization-dto'

export interface OrganizationsRepository {
  create(organization: OrganizationDTO): Promise<OrganizationDTO>
  findByEmail(email: string): Promise<OrganizationDTO | null>
  findById(id: string): Promise<OrganizationDTO | null>
}
