import { PetDTO } from '@/application/repositories/dto/pet-dto'
import { convertDateTimezone } from '@/infra/utils/convert-date-timezone'
import { PetPhotos, Prisma, Pet as RawPet } from '@prisma/client'

export class PrismaPetMapper {
  static toPrisma(pet: PetDTO): Prisma.PetUncheckedCreateInput {
    return {
      name: pet.name,
      description: pet.description,
      city: pet.city,
      age: pet.age,
      energy: pet.energy,
      size: pet.size,
      independence: pet.independence,
      type: pet.type,
      org_id: pet.orgId,
    }
  }

  static toDomain(
    rawPet: RawPet & {
      petPhotos?: PetPhotos[]
    },
  ) {
    return {
      id: rawPet.id,
      name: rawPet.name,
      description: rawPet.description,
      city: rawPet.city,
      age: rawPet.age as 'cub' | 'adolescent' | 'elderly',
      energy: rawPet.energy,
      size: rawPet.size as 'small' | 'medium' | 'big',
      independence: rawPet.independence as 'medium' | 'low' | 'high',
      type: rawPet.type as 'dog' | 'cat',
      orgId: rawPet.org_id,
      photos: rawPet.petPhotos,
      createdAt: convertDateTimezone(String(rawPet.created_at)),
    } as unknown as PetDTO
  }
}
