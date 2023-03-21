import { Organization } from '@/application/entities/organization'
import { Organization as rawOrganization } from '@prisma/client'

export class PrismaOrganizationMapper {
  static toPrisma(organization: Organization) {
    return {
      id: organization.id,
      name: organization.name,
      email: organization.email,
      password: organization.password,
      address: organization.address,
      cep: organization.cep,
      phoneNumber: organization.phoneNumber,
      created_at: organization.createdAt,
    }
  }

  static toDomain(rawOrganization: rawOrganization) {
    return new Organization({
      address: rawOrganization.address,
      cep: rawOrganization.cep,
      email: rawOrganization.email,
      name: rawOrganization.name,
      password: rawOrganization.password,
      phoneNumber: rawOrganization.phoneNumber,
      createdAt: rawOrganization.created_at,
    })
  }
}
