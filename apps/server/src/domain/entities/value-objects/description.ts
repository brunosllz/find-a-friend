export class Description {
  readonly value: string

  private constructor(value: string) {
    const descriptionLengthIsValid = this.validateDescriptionLength(value)

    if (!descriptionLengthIsValid) {
      throw new Error('Description length is not valid.')
    }

    this.value = value
  }

  static create(description: string) {
    return new Description(description)
  }

  private validateDescriptionLength(value: string): boolean {
    return value.length > 0 && value.length <= 300
  }
}
