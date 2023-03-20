import { Pet } from '../entities/pet'
import { OrganizationRepository } from '../repositories/organization-repository'
import { PetRepository } from '../repositories/pet-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface PetUseCaseRequest {
  name: string
  description: string
  city: string
  age: 'cub' | 'adolescent' | 'elderly'
  energy: number
  size: 'small' | 'medium' | 'big'
  independence: 'low' | 'medium' | 'high'
  type: 'dog' | 'cat'
  photo: string
  orgId: string
}

interface PetUseCaseResponse {
  pet: Pet
}

export class PetUseCase {
  constructor(
    private petRepository: PetRepository,
    private organizationRepository: OrganizationRepository,
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
    photo,
    orgId,
  }: PetUseCaseRequest): Promise<PetUseCaseResponse> {
    const orgExists = await this.organizationRepository.findById(orgId)

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
      photo,
      orgId,
    })

    const pet = await this.petRepository.create(createdPet)

    return { pet }
  }
}
