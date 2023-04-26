/**
 * Create organization input values
 */

export type CreateOrganizationInput = {
  name: string
  email: string
  password: string
  address: {
    street: string
    city: string
    number: string
    stateName: string
    stateAcronym: string
  }
  cep: string
  phoneNumber: string
  location: {
    lat: string
    lng: string
  }
  createdAt?: Date
}
