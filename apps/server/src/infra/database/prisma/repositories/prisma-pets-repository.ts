import { PetDTO } from '@/application/repositories/dto/pet-dto'
import { PetsRepository } from '@/application/repositories/pets-repository'
import { SearchPetsParams } from '@/application/use-cases/search-pets'
import { prisma } from '@/infra/database/prisma'
import { PrismaPetMapper } from '../mappers/prisma-pet-mapper'

export class PrismaPetsRepository implements PetsRepository {
  async create(pet: PetDTO) {
    const raw = PrismaPetMapper.toPrisma(pet)

    const rawPet = await prisma.pet.create({
      data: raw,
    })

    return PrismaPetMapper.toDomain(rawPet)
  }

  async findById(id: string) {
    const rawPet = await prisma.pet.findUnique({
      where: {
        id,
      },
      include: {
        petPhotos: true,
      },
    })

    if (!rawPet) {
      return null
    }

    return PrismaPetMapper.toDomain(rawPet)
  }

  async findMany(
    page: number,
    city: string,
    queryParams?: SearchPetsParams | undefined,
  ) {
    const rawPets = await prisma.pet.findMany({
      where: {
        city,
        ...queryParams,
      },
      include: {
        petPhotos: {
          take: 1,
        },
      },
      skip: (page - 1) * 20,
      take: 20,
    })

    return {
      pets: rawPets.map(PrismaPetMapper.toDomain),
      count: rawPets.length,
    }
  }
}
