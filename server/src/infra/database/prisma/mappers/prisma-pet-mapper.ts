import { PetDTO } from '@/application/repositories/dto/pet-dto'
import { Pet as RawPet } from '@prisma/client'

export class PrismaPetMapper {
  static toPrisma(pet: PetDTO) {
    return {
      name: pet.name,
      description: pet.description,
      city: pet.city,
      age: pet.age,
      energy: pet.energy,
      size: pet.size,
      independence: pet.independence,
      type: pet.type,
      photo: pet.photo,
      org_id: pet.orgId,
    }
  }

  static toDomain(rawPet: RawPet) {
    return {
      id: rawPet.id,
      name: rawPet.name,
      description: rawPet.description,
      city: rawPet.city,
      age: rawPet.age,
      energy: rawPet.energy,
      size: rawPet.size,
      independence: rawPet.independence,
      type: rawPet.type,
      photo: rawPet.photo,
      orgId: rawPet.org_id,
    } as PetDTO
  }
}
