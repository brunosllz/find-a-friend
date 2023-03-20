import { randomUUID } from 'node:crypto'
import { Replace } from '../helpers/Replace'

export interface OrganizationProps {
  name: string
  email: string
  password: string
  address: string
  cep: string
  phoneNumber: string
  createdAt: Date
}

export class Organization {
  private props: OrganizationProps
  private _id: string

  constructor(
    props: Replace<OrganizationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID()
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    }
  }

  public get id() {
    return this._id
  }

  public get name() {
    return this.props.name
  }

  public set name(name: string) {
    this.name = name
  }

  public get email() {
    return this.props.email
  }

  public set email(email: string) {
    this.email = email
  }

  public get password() {
    return this.props.password
  }

  public set password(password: string) {
    this.password = password
  }

  public get address() {
    return this.props.address
  }

  public set address(address: string) {
    this.address = address
  }

  public get cep() {
    return this.props.cep
  }

  public set cep(cep: string) {
    this.cep = cep
  }

  public get phoneNumber() {
    return this.props.phoneNumber
  }

  public set phoneNumber(phoneNumber: string) {
    this.phoneNumber = phoneNumber
  }

  public get createdAt(): Date {
    return this.props.createdAt
  }
}
