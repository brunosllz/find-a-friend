import { Pet } from '../entities/pet'
import { PetsRepository } from '../repositories/pets-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

type GetPetUseCaseRequest = {
  id: string
}

type GetPetUseCaseResponse = {
  pet: Pet
}

export class GetPetUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({ id }: GetPetUseCaseRequest): Promise<GetPetUseCaseResponse> {
    const pet = await this.petsRepository.findById(id)

    if (!pet) {
      throw new ResourceNotFoundError()
    }

    return { pet }
  }
}
