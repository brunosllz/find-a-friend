import { PetsRepository } from '../repositories/pets-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { PetsPhotosRepository } from '../repositories/pets-photos-repository'
import { PetPhotos } from '../entities/value-objects/pet-photos'

type FetchPetPhotosUseCaseRequest = {
  id: string
}

type FetchPetPhotosUseCaseResponse = {
  photos: PetPhotos
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
