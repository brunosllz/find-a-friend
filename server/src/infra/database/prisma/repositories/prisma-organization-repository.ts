import { Organization } from '@/application/entities/organization'
import { OrganizationRepository } from '@/application/repositories/organization-repository'
import { prisma } from '@/infra/database/prisma'
import { PrismaOrganizationMapper } from '../mappers/prisma-organization-mapper'

export class PrismaOrganizationRepository implements OrganizationRepository {
  async create(organization: Organization) {
    const raw = PrismaOrganizationMapper.toPrisma(organization)

    const rawOrganization = await prisma.organization.create({
      data: raw,
    })

    return PrismaOrganizationMapper.toDomain(rawOrganization)
  }

  async findByEmail(email: string) {
    const rawOrganization = await prisma.organization.findUnique({
      where: {
        email,
      },
    })

    if (!rawOrganization) {
      return null
    }

    return PrismaOrganizationMapper.toDomain(rawOrganization)
  }

  async findById(id: string) {
    const rawOrganization = await prisma.organization.findUnique({
      where: {
        id,
      },
    })

    if (!rawOrganization) {
      return null
    }

    return PrismaOrganizationMapper.toDomain(rawOrganization)
  }
}
