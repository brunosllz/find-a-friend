import { PasswordNotCorrectly } from '../errors/password-not-correctly-error'

export class Password {
  readonly value: string

  private constructor(value: string) {
    const doesPasswordHasCorrectlyPattern =
      this.validateCorrectlyPasswordPattern(value)

    if (!doesPasswordHasCorrectlyPattern) {
      throw new PasswordNotCorrectly()
    }

    this.value = value
  }

  static create(password: string) {
    return new Password(password)
  }

  private validateCorrectlyPasswordPattern(value: string): boolean {
    const validatePassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?]).{8,}$/

    return validatePassword.test(value)
  }
}
