import { PrismaOrganizationsRepository } from '@/infra/database/prisma/repositories/prisma-organizations-repository'
import { RegisterOrganizationUseCase } from '../../../../application/use-cases/register-organization'

export function MakeRegisterOrganizationUseCase() {
  const organizationRepository = new PrismaOrganizationsRepository()
  const useCase = new RegisterOrganizationUseCase(organizationRepository)

  return useCase
}
