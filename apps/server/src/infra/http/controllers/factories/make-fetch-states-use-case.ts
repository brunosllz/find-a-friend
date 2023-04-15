import { FetchStatesUseCase } from '@/application/use-cases/fetch-states'
import { fetchBrazilStates } from '../../services/fetch-brazil-states'

export function MakeFetchStatesUseCase() {
  const useCase = new FetchStatesUseCase(fetchBrazilStates)

  return useCase
}
