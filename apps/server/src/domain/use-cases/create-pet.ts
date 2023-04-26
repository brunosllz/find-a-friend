import { Pet } from '../entities/pet'
import { OrganizationsRepository } from '../repositories/organizations-repository'
import { PetsPhotosRepository } from '../repositories/pets-photos-repository'
import { PetsRepository } from '../repositories/pets-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

type CreatePetUseCaseRequest = {
  name: string
  description: string
  city: string
  age: 'cub' | 'adolescent' | 'elderly'
  energy: number
  size: 'small' | 'medium' | 'big'
  independence: 'low' | 'medium' | 'high'
  type: 'dog' | 'cat'
  photos?: Array<{ url: string }>
  orgId: string
}

type CreatePetUseCaseResponse = {
  pet: Pet
}

export class CreatePetUseCase {
  constructor(
    private readonly petsRepository: PetsRepository,
    private readonly petPhotosRepository: PetsPhotosRepository,
    private readonly organizationsRepository: OrganizationsRepository,
  ) {}

  async execute({
    name,
    description,
    city,
    age,
    energy,
    size,
    independence,
    type,
    photos,
    orgId,
  }: CreatePetUseCaseRequest): Promise<CreatePetUseCaseResponse> {
    const orgExists = await this.organizationsRepository.findById(orgId)

    if (!orgExists) {
      throw new ResourceNotFoundError()
    }

    const createdPet = new Pet({
      name,
      description,
      city,
      age,
      energy,
      size,
      independence,
      type,
      photos,
      orgId,
    })

    const pet = await this.petsRepository.create(createdPet)

    if (createdPet.photos) {
      const petPhotos = createdPet.photos.map((photo) => {
        return {
          ...photo,
          petId: pet.id,
        }
      })

      await this.petPhotosRepository.save(petPhotos)
    }

    return { pet }
  }
}