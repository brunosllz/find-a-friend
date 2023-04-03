import { prisma } from '@/infra/database/prisma'
import { PetsPhotosRepository } from '@/application/repositories/pets-photos-repository'
import { PetPhotoDTO } from '@/application/repositories/dto/pet-photo-dto'
import { PrismaPetPhotosMapper } from '../mappers/prisma-pet-photos-mapper'

export class PrismaPetsPhotosRepository implements PetsPhotosRepository {
  async save(petPhotos: PetPhotoDTO[]) {
    const raw = PrismaPetPhotosMapper.toPrisma(petPhotos)

    await prisma.petPhotos.createMany({
      data: raw,
    })
  }
}
