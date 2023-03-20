import { Pet } from '../entities/pet'

export interface PetRepository {
  create(pet: Pet): Promise<Pet>
}
