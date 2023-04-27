import { randomUUID } from 'node:crypto'
import { Replace } from '../helpers/Replace'
import { Entity } from '@/core/entities/entity'
import { Description } from './value-objects/description'
import { Energy } from './value-objects/energy'
import { CreatePetInput, SearchPetsParams } from './types/pet'
import { PetPhotos } from './value-objects/pet-photos'

export type PetProps = {
  name: string
  description: Description
  city: string
  age: 'cub' | 'adolescent' | 'elderly'
  energy: Energy
  size: 'small' | 'medium' | 'big'
  independence: 'low' | 'medium' | 'high'
  type: 'dog' | 'cat'
  photos: PetPhotos | null
  orgId: string
  createdAt: Date
  [key: string]: any
}

export class Pet extends Entity<PetProps> {
  static create(props: CreatePetInput, id?: string) {
    const pet = new Pet(
      {
        ...props,
        orgId: props.orgId ?? randomUUID(),
        createdAt: props.createdAt ?? new Date(),
        description: Description.create(props.description),
        energy: Energy.create(props.energy),
        photos: props.photos ? PetPhotos.create(props.photos) : null,
      },
      id,
    )

    return pet
  }

  public containsProps(
    props: Replace<Partial<SearchPetsParams>, { [key: string]: any }>,
  ): boolean {
    return Object.keys(props).every((key) => {
      if (key === 'energy') {
        return (
          this.props.hasOwnProperty(key) && this.props[key].value === props[key]
        )
      }

      return this.props.hasOwnProperty(key) && this.props[key] === props[key]
    })
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

  public get photos(): PetPhotos | null {
    return this.props.photos
  }

  public savePhotos(photos: PetPhotos) {
    this.props.photos = photos
  }

  public get orgId() {
    return this.props.orgId
  }
}
