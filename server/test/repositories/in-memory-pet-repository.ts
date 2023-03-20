import { Pet } from '@/application/entities/pet'
import { PetRepository } from '@/application/repositories/pet-repository'

export class InMemoryPetRepository implements PetRepository {
  private pets: Pet[] = []

  async create(pet: Pet) {
    this.pets.push(pet)

    return pet
  }
}
