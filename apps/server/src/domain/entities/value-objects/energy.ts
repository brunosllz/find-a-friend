export class Energy {
  readonly value: number

  private constructor(value: number) {
    const descriptionLengthIsValid = this.validateAmountEnergy(value)

    if (!descriptionLengthIsValid) {
      throw new Error('Description length is not valid.')
    }

    this.value = value
  }

  static create(energy: number) {
    return new Energy(energy)
  }

  private validateAmountEnergy(value: number): boolean {
    return value > 0 && value <= 5
  }
}
