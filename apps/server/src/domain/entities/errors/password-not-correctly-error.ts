export class PasswordNotCorrectly extends Error {
  constructor() {
    super(
      'Password is not correctly, need contains least one digit, one lower case, one upper case and special character.',
    )
  }
}
