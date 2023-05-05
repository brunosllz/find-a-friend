import { Entity } from '@/core/entities/entity'
import { Address } from './value-objects/address'
import { CreateOrganizationInput } from './types/organization'
import { Password } from './value-objects/password'
import { PhoneNumber } from './value-objects/phone-number'

export type OrganizationProps = {
  name: string
  email: string
  password: Password
  address: Address
  cep: string // TODO: create a value object for validate and normalize a cep number
  phoneNumber: PhoneNumber
  location: {
    lat: string
    lng: string
  }
  createdAt: Date
}

export class Organization extends Entity<OrganizationProps> {
  static create(props: CreateOrganizationInput, id?: string) {
    const organization = new Organization(
      {
        ...props,
        password: Password.create(props.password),
        phoneNumber: PhoneNumber.create(props.phoneNumber),
        address: Address.create({
          city: props.address.city,
          number: props.address.number,
          stateAcronym: props.address.stateAcronym,
          stateName: props.address.stateName,
          street: props.address.street,
        }),
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return organization
  }

  public get name() {
    return this.props.name
  }

  public get email() {
    return this.props.email
  }

  public get password() {
    return this.props.password
  }

  public setHashedPassword(password: string) {
    this.props.password = Password.create(password)
  }

  public get address() {
    return this.props.address
  }

  public get location() {
    return this.props.location
  }

  public get cep() {
    return this.props.cep
  }

  public get phoneNumber() {
    return this.props.phoneNumber
  }

  public get createdAt(): Date {
    return this.props.createdAt
  }
}
