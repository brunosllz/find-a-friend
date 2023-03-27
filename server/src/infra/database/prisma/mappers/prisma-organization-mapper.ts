import { OrganizationDTO } from '@/application/repositories/dto/organization-dto'
import { Organization as RawOrganization } from '@prisma/client'

export class PrismaOrganizationMapper {
  static toPrisma(organization: OrganizationDTO) {
    return {
      id: organization.id,
      name: organization.name,
      email: organization.email,
      password: organization.password,
      address: organization.address,
      cep: organization.cep,
      phoneNumber: organization.phoneNumber,
    }
  }

  static toDomain(rawOrganization: RawOrganization) {
    return {
      address: rawOrganization.address,
      cep: rawOrganization.cep,
      email: rawOrganization.email,
      name: rawOrganization.name,
      password: rawOrganization.password,
      phoneNumber: rawOrganization.phoneNumber,
      createdAt: rawOrganization.created_at,
    } as OrganizationDTO
  }
}
