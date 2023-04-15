import { PetPhotoDTO } from '@/application/repositories/dto/pet-photo-dto'
import { PetsPhotosRepository } from '@/application/repositories/pets-photos-repository'

export class InMemoryPetsPhotosRepository implements PetsPhotosRepository {
  private petsPhotos: PetPhotoDTO[] = []

  async save(petPhotos: PetPhotoDTO[]) {
    this.petsPhotos.push(...petPhotos)
  }

  async findManyById(id: string) {
    const photos = this.petsPhotos.filter((photos) => photos.petId === id)

    return photos
  }
}
