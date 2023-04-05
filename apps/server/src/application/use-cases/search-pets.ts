import { Pet } from '../entities/pet'
import { PetsRepository } from '../repositories/pets-repository'

export type SearchPetsParams = {
  age?: 'cub' | 'adolescent' | 'elderly'
  energy?: number
  size?: 'small' | 'medium' | 'big'
  independence?: 'low' | 'medium' | 'high'
  type?: 'dog' | 'cat'
}

type SearchPetsUseCaseRequest = {
  page: number
  city: string
  params?: SearchPetsParams
}

type SearchPetsUseCaseResponse = {
  pets: Pet[]
}

export class SearchPetsUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    page,
    city,
    params,
  }: SearchPetsUseCaseRequest): Promise<SearchPetsUseCaseResponse> {
    const pets = await this.petsRepository.findMany(page, city, {
      ...params,
    })

    return { pets }
  }
}
