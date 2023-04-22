import { randomUUID } from 'node:crypto'
import { Replace } from '../helpers/Replace'
import { PetPhoto } from './value-objects/pet-photo'
import { Entity } from '@/core/entities/entity'
import { Description } from './value-objects/description'
import { Energy } from './value-objects/energy'

export type PetProps = {
  name: string
  description: Description
  city: string
  age: 'cub' | 'adolescent' | 'elderly'
  energy: Energy
  size: 'small' | 'medium' | 'big'
  independence: 'low' | 'medium' | 'high'
  type: 'dog' | 'cat'
  photos: PetPhoto | null
  orgId: string
  createdAt: Date
  [key: string]: any
}

export type CreatePetInput = {
  name: string
  description: string
  city: string
  age: 'cub' | 'adolescent' | 'elderly'
  energy: number
  size: 'small' | 'medium' | 'big'
  independence: 'low' | 'medium' | 'high'
  type: 'dog' | 'cat'
  photos: Array<{ url: string }> | null
  orgId?: string
  createdAt?: Date
}

export class Pet extends Entity<PetProps> {
  static create(props: CreatePetInput, id?: string) {
    const pet = new Pet(
      {
        ...props,
        orgId: props.orgId ?? randomUUID(),
        createdAt: props.createdAt ?? new Date(),
        description: new Description(props.description),
        energy: new Energy(props.energy),
        photos: props.photos ? new PetPhoto(props.photos) : null,
      },
      id,
    )

    return pet
  }

  public containsProps(
    props: Replace<Partial<PetProps>, { [key: string]: any }>,
  ): boolean {
    return Object.keys(props).every(
      (key) => this.props.hasOwnProperty(key) && this.props[key] === props[key],
    )
  }

  public get name() {
    return this.props.name
  }

  public get description() {
    return this.props.description
  }

  public get city() {
    return this.props.city
  }

  public get age() {
    return this.props.age
  }

  public get energy() {
    return this.props.energy
  }

  public get size() {
    return this.props.size
  }

  public get independence() {
    return this.props.independence
  }

  public get type() {
    return this.props.type
  }

  public get photos(): PetPhoto | null {
    return this.props.photos
  }

  public get orgId() {
    return this.props.orgId
  }
}
