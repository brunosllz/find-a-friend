interface PetPhotoProps {
  url: string
}

export class PetPhoto {
  readonly value: PetPhotoProps[]

  private constructor(value: PetPhotoProps[]) {
    const AmountPhotosIsValid = this.validateAmountPetPhotos(value)

    if (!AmountPhotosIsValid) {
      throw new Error('Amount photos is not valid.')
    }

    this.value = value
  }

  static create(petPhotos: PetPhotoProps[]) {
    return new PetPhoto(petPhotos)
  }

  private validateAmountPetPhotos(value: PetPhotoProps[]): boolean {
    return value.length <= 5
  }
}
