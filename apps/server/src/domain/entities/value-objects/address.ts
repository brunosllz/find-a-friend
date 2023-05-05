import { CreateAddressInput } from '../types/address'

export class Address {
  readonly value: string

  private constructor(value: string) {
    this.value = value.toLowerCase()
  }

  /**
   * Receive address information and formatter to ui.
   *
   * Example: Street, Number, City, State Name - State Acronym
   *
   * @param street {string}
   * @param number {string}
   * @param city {string}
   * @param stateName {string}
   * @param stateAcronym {string}
   */

  // TODO: refactor constructor of address, create a method to normalize address how want

  static create({
    street,
    number,
    city,
    stateName,
    stateAcronym,
  }: CreateAddressInput) {
    return new Address(
      `${street}, ${number}, ${city}, ${stateName} - ${stateAcronym}`,
    )
  }
}
