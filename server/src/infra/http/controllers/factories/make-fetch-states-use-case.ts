import { FetchStatesUseCase } from '@/application/use-cases/fetch-states'
import { fetchBrazilStates } from '../../utils/fetch-brazil-states'

export function MakeFetchStatesUseCase() {
  const useCase = new FetchStatesUseCase(fetchBrazilStates)

  return useCase
}
