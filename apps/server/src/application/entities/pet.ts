import { randomUUID } from 'node:crypto'
import { Replace } from '../helpers/Replace'
import { PetPhoto } from './pet-photo'

export type PetProps = {
  name: string
  description: string
  city: string
  age: 'cub' | 'adolescent' | 'elderly'
  energy: number
  size: 'small' | 'medium' | 'big'
  independence: 'low' | 'medium' | 'high'
  type: 'dog' | 'cat'
  photos: Omit<PetPhoto, 'petId'>[]
  orgId: string
  createdAt?: Date
  [key: string]: any
}

export class Pet {
  private props: PetProps
  private _id: string

  private validateAmountEnergy(energy: number): boolean {
    return energy > 0 && energy <= 5
  }

  private validateDescriptionLength(description: string): boolean {
    return description.length > 0 && description.length <= 300
  }

  private validateAmountPetPhotos(
    photos: Omit<PetPhoto, 'petId'>[] | undefined,
  ): boolean {
    if (!photos) {
      return true
    }

    return photos.length <= 5
  }

  constructor(props: PetProps, id?: string) {
    this._id = id ?? randomUUID()

    const energyAmountIsValid = this.validateAmountEnergy(props.energy)
    if (!energyAmountIsValid) {
      throw new Error('Energy amount is not valid.')
    }

    const descriptionLengthIsValid = this.validateDescriptionLength(
      props.description,
    )
    if (!descriptionLengthIsValid) {
      throw new Error('Description length is not valid.')
    }

    const AmountPhotosIsValid = this.validateAmountPetPhotos(props.photos)
    if (!AmountPhotosIsValid) {
      throw new Error('Amount photos is not valid.')
    }

    this.props = {
      ...props,
      orgId: props.orgId ?? randomUUID(),
      photos: props.photos ?? null,
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

  public get photos(): Omit<PetPhoto, 'petId'>[] {
    return this.props.photos
  }

  public set photos(photos: Omit<PetPhoto, 'petId'>[]) {
    this.props.photos = photos
  }

  public get orgId() {
    return this.props.orgId
  }

  public set orgId(orgId: string) {
    this.props.orgId = orgId
  }
}
