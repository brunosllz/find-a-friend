import { PrismaOrganizationRepository } from '@/infra/database/prisma/repositories/prisma-organization-repository'
import { RegisterOrganizationUseCase } from '../../../../application/use-cases/register-organization'

export function MakeRegisterOrganizationUseCase() {
  const organizationRepository = new PrismaOrganizationRepository()
  const useCase = new RegisterOrganizationUseCase(organizationRepository)

  return useCase
}
