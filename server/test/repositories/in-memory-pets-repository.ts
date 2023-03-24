import { Pet } from '@/application/entities/pet'
import { PetsRepository } from '@/application/repositories/pets-repository'

export class InMemoryPetsRepository implements PetsRepository {
  private pets: Pet[] = []

  async create(pet: Pet) {
    this.pets.push(pet)

    return pet
  }
}
