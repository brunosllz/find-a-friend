import { PetsRepository } from '../repositories/pets-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { PetsPhotosRepository } from '../repositories/pets-photos-repository'
import { PetPhoto } from '../entities/pet-photo'

type FetchPetPhotosUseCaseRequest = {
  id: string
}

type FetchPetPhotosUseCaseResponse = {
  photos: PetPhoto[]
}

export class FetchPetPhotosUseCase {
  constructor(
    private petsRepository: PetsRepository,
    private petsPhotosRepository: PetsPhotosRepository,
  ) {}

  async execute({
    id,
  }: FetchPetPhotosUseCaseRequest): Promise<FetchPetPhotosUseCaseResponse> {
    const pet = await this.petsRepository.findById(id)

    if (!pet) {
      throw new ResourceNotFoundError()
    }

    const photos = await this.petsPhotosRepository.findManyById(id)

    return { photos }
  }
}
