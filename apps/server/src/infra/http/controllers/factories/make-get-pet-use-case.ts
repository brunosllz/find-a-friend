import { PrismaPetsRepository } from '@/infra/database/prisma/repositories/prisma-pets-repository'
import { GetPetUseCase } from '@/application/use-cases/get-pet'

export function MakeGetPetUseCase() {
  const petsRepository = new PrismaPetsRepository()
  const useCase = new GetPetUseCase(petsRepository)

  return useCase
}
