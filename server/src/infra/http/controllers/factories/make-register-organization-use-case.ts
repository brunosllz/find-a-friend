import { PrismaOrganizationsRepository } from '@/infra/database/prisma/repositories/prisma-organizations-repository'
import { RegisterOrganizationUseCase } from '@/application/use-cases/register-organization'

export function MakeRegisterOrganizationUseCase() {
  const organizationsRepository = new PrismaOrganizationsRepository()
  const useCase = new RegisterOrganizationUseCase(organizationsRepository)

  return useCase
}
