import { Pet } from '@/application/entities/pet'

export class GetPetViewModel {
  static toHTTP(pet: Pet) {
    return {
      ...pet,
      photos: pet.photos?.map((photo) => {
        return {
          id: photo.id,
          url: photo.url,
        }
      }),
    }
  }
}
