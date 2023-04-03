import { PetPhotoDTO } from '@/application/repositories/dto/pet-photo-dto'

export class PrismaPetPhotosMapper {
  static toPrisma(petPhotos: PetPhotoDTO[]) {
    return petPhotos.map((petPhotos) => {
      return {
        ...petPhotos,
        pet_id: petPhotos.petId,
      }
    })
  }
}
