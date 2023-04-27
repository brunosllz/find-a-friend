import { Replace } from '@/domain/helpers/Replace'
import { randomUUID } from 'crypto'

interface PetPhotosProps {
  id: string
  url: string
  petId: string
}

export class PetPhotos {
  readonly values: PetPhotosProps[]

  private constructor(values: PetPhotosProps[]) {
    const AmountPhotosIsValid = this.validateAmountPetPhotos(values)

    if (!AmountPhotosIsValid) {
      throw new Error('Amount photos is not valid.')
    }

    this.values = values
  }

  static create(petPhotos: Replace<PetPhotosProps, { id?: string }>[]) {
    const photos = petPhotos.map((photo) => {
      return {
        ...photo,
        id: photo.id ?? randomUUID(),
      }
    })

    return new PetPhotos(photos)
  }

  private validateAmountPetPhotos(value: PetPhotosProps[]): boolean {
    return value.length <= 5
  }
}
