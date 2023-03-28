import { PrismaPetsRepository } from '@/infra/database/prisma/repositories/prisma-pets-repository'
import { SearchPetsUseCase } from '@/application/use-cases/search-pets'

export function MakeSearchPetsUseCase() {
  const petsRepository = new PrismaPetsRepository()
  const useCase = new SearchPetsUseCase(petsRepository)

  return useCase
}
