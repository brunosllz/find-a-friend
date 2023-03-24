import { Pet } from '@/application/entities/pet'
import { PetsRepository } from '@/application/repositories/pets-repository'

export class InMemoryPetsRepository implements PetsRepository {
  private pets: Pet[] = []

  async create(pet: Pet) {
    this.pets.push(pet)

    return pet
  }

  async findMany(page: number) {
    return this.pets.slice((page - 1) * 20, page * 20)
  }
}
