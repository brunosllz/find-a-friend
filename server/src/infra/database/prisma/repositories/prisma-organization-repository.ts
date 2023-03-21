import { Organization } from '@/application/entities/organization'
import { OrganizationRepository } from '@/application/repositories/organization-repository'
import { PrismaClient } from '@prisma/client'
import { PrismaOrganizationMapper } from './mappers/prisma-organization-mapper'

export class PrismaOrganizationRepository implements OrganizationRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(organization: Organization) {
    const raw = PrismaOrganizationMapper.toPrisma(organization)

    const rawOrganization = await this.prisma.organization.create({
      data: raw,
    })

    return PrismaOrganizationMapper.toDomain(rawOrganization)
  }

  findByEmail(email: string): Promise<Organization | null> {
    throw new Error('Method not implemented.')
  }

  findById(id: string): Promise<Organization | null> {
    throw new Error('Method not implemented.')
  }
}
