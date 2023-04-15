import { FetchCitiesByStateUseCase } from '@/application/use-cases/fetch-cities-by-state'
import { fetchBrazilCitiesByState } from '../../services/fetch-brazil-cities-by-state'

export function MakeFetchCitiesByStateUseCase() {
  const useCase = new FetchCitiesByStateUseCase(fetchBrazilCitiesByState)

  return useCase
}
