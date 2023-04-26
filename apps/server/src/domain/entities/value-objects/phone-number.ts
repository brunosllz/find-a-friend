export class PhoneNumber {
  readonly value: string

  private constructor(value: string) {
    const phoneNumber = this.normalizePhoneNumber(value)

    const phoneNumberLengthIsValid = this.validateLengthPhoneNumber(phoneNumber)

    if (!phoneNumberLengthIsValid) {
      throw new Error('Phone number is not valid.')
    }

    this.value = phoneNumber
  }

  static create(phoneNumber: string) {
    return new PhoneNumber(phoneNumber)
  }

  private validateLengthPhoneNumber(value: string): boolean {
    return value.length > 0 && value.length === 11
  }

  private normalizePhoneNumber(value: string) {
    return value.normalize('NFKD').replace(/\D+/g, '')
  }
}
