import { Pet } from '../entities/pet'
import { PetsRepository } from '../repositories/pets-repository'

type FetchPetsUseCaseRequest = {
  page: number
}

type FetchPetsUseCaseResponse = {
  pets: Pet[]
}

export class FetchPetsUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    page,
  }: FetchPetsUseCaseRequest): Promise<FetchPetsUseCaseResponse> {
    const pets = await this.petsRepository.findMany(page)

    return { pets }
  }
}
