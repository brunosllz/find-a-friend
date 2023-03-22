import { Organization } from '@/application/entities/organization'
import { OrganizationRepository } from '@/application/repositories/organization-repository'
import { PrismaClient } from '@prisma/client'
import { PrismaOrganizationMapper } from '../mappers/prisma-organization-mapper'

export class PrismaOrganizationRepository implements OrganizationRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(organization: Organization) {
    const raw = PrismaOrganizationMapper.toPrisma(organization)

    const rawOrganization = await this.prisma.organization.create({
      data: raw,
    })

    return PrismaOrganizationMapper.toDomain(rawOrganization)
  }

  async findByEmail(email: string) {
    const organization = await this.prisma.organization.findUnique({
      where: {
        email,
      },
    })

    if (!organization) {
      return null
    }

    return PrismaOrganizationMapper.toDomain(organization)
  }

  async findById(id: string): Promise<Organization | null> {
    const organization = await this.prisma.organization.findUnique({
      where: {
        id,
      },
    })

    if (!organization) {
      return null
    }

    return PrismaOrganizationMapper.toDomain(organization)
  }
}
