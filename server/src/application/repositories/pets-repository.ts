import { Pet } from '../entities/pet'

export interface PetsRepository {
  create(pet: Pet): Promise<Pet>
  findMany(page: number): Promise<Pet[]>
}
