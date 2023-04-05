import { PetDTO } from '@/application/repositories/dto/pet-dto'
import { PetsRepository } from '@/application/repositories/pets-repository'
import { SearchPetsParams } from '@/application/use-cases/search-pets'

export class InMemoryPetsRepository implements PetsRepository {
  private pets: PetDTO[] = []

  async create(pet: PetDTO) {
    this.pets.push(pet)

    return pet
  }

  async findById(id: string) {
    const pet = this.pets.find((pet) => pet.id === id)

    if (!pet) {
      return null
    }

    return pet
  }

  async findMany(
    page: number,
    city: string,
    params: SearchPetsParams,
  ): Promise<PetDTO[]> {
    const hasParams = Object.entries(params).length > 0

    if (hasParams) {
      return this.pets
        .filter((pet) => pet.city.toLowerCase() === city.toLowerCase())
        .filter((pet) => pet.containsProps(params))
        .slice((page - 1) * 20, page * 20)
    }

    return this.pets
      .filter((pet) => pet.city === city)
      .slice((page - 1) * 20, page * 20)
  }
}