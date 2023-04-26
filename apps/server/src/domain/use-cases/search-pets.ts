import { Pet } from '../entities/pet'
import { SearchPetsParams } from '../entities/types/pet'
import { PetsRepository } from '../repositories/pets-repository'

type SearchPetsUseCaseRequest = {
  page: number
  city: string
  params?: SearchPetsParams
}

type SearchPetsUseCaseResponse = {
  pets: Pet[]
  count: number
}

export class SearchPetsUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    page,
    city,
    params,
  }: SearchPetsUseCaseRequest): Promise<SearchPetsUseCaseResponse> {
    const { pets, count } = await this.petsRepository.findMany(page, city, {
      ...params,
    })

    return { pets, count }
  }
}
