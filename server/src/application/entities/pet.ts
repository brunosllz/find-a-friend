import { randomUUID } from 'node:crypto'
import { Replace } from '../helpers/Replace'

type PetProps = {
  name: string
  description: string
  city: string
  age: 'cub' | 'adolescent' | 'elderly'
  energy: number
  size: 'small' | 'medium' | 'big'
  independence: 'low' | 'medium' | 'high'
  type: 'dog' | 'cat'
  photo: string
  orgId: string
  createdAt: Date
}

export class Pet {
  private props: PetProps
  private _id: string

  constructor(
    props: Replace<PetProps, { orgId?: string; createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID()
    this.props = {
      ...props,
      orgId: props.orgId ?? randomUUID(),
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
    this.props.name = name
  }

  public get description() {
    return this.props.description
  }

  public set description(description: string) {
    this.props.description = description
  }

  public get city() {
    return this.props.description
  }

  public set city(city: string) {
    this.props.description = city
  }

  public get age() {
    return this.props.description
  }

  public set age(age: string) {
    this.props.description = age
  }

  public get energy() {
    return this.props.energy
  }

  public set energy(energy: number) {
    this.props.energy = energy
  }

  public get size() {
    return this.props.size
  }

  public set size(size: 'small' | 'medium' | 'big') {
    this.props.size = size
  }

  public get independence() {
    return this.props.independence
  }

  public set independence(independence: 'medium' | 'low' | 'high') {
    this.props.independence = independence
  }

  public get type() {
    return this.props.type
  }

  public set type(type: 'dog' | 'cat') {
    this.props.type = type
  }

  public get photo() {
    return this.props.photo
  }

  public set photo(photo: string) {
    this.props.photo = photo
  }

  public get orgId() {
    return this.props.orgId
  }

  public set orgId(orgId: string) {
    this.props.orgId = orgId
  }
}
