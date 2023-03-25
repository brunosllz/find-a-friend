import { randomUUID } from 'node:crypto'
import { Replace } from '../helpers/Replace'

export type PetProps = {
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
  createdAt?: Date
  [key: string]: any
}

export class Pet {
  private props: PetProps
  private _id: string

  constructor(props: PetProps, id?: string) {
    this._id = id ?? randomUUID()
    this.props = {
      ...props,
      orgId: props.orgId ?? randomUUID(),
      createdAt: props.createdAt ?? new Date(),
    }
  }

  public containsProps(
    props: Replace<Partial<PetProps>, { [key: string]: any }>,
  ): boolean {
    return Object.keys(props).every(
      (key) => this.props.hasOwnProperty(key) && this.props[key] === props[key],
    )
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
    return this.props.city
  }

  public set city(city: string) {
    this.props.city = city
  }

  public get age() {
    return this.props.age
  }

  public set age(age: 'cub' | 'adolescent' | 'elderly') {
    this.props.age = age
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
