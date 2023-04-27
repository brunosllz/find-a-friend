import { MakePet } from 'test/factories/pet-factory'
import { describe, expect, it } from 'vitest'
import { PetPhotos } from './value-objects/pet-photos'

describe('Pet', () => {
  it('Should be able create a pet', () => {
    const pet = MakePet({
      name: 'princess',
    })

    console.log(pet.photos?.values)

    expect(pet).toBeTruthy()
    expect(pet).toEqual(
      expect.objectContaining({
        name: 'princess',
      }),
    )
  })

  it('Should be not able create a pet with amount energy less than one', () => {
    expect(() =>
      MakePet({
        name: 'princess',
        energy: 0,
      }),
    ).toThrow()
  })

  it('Should be not able create a pet with amount energy more than five', () => {
    expect(() =>
      MakePet({
        name: 'princess',
        energy: 6,
      }),
    ).toThrow()
  })

  it('Should be not able create a pet with description length less than one', () => {
    expect(() =>
      MakePet({
        name: 'princess',
        description: '',
      }),
    ).toThrow()
  })

  it('Should be not able create a pet with description length more than three hundred', () => {
    expect(() =>
      MakePet({
        name: 'princess',
        description: 'a'.repeat(301),
      }),
    ).toThrow()
  })

  it('Should be create a pet without photos', () => {
    const pet = MakePet({
      name: 'princess',
    })

    expect(pet.photos).toBeNull()
  })

  it('Should be not create a pet with amount photos more than five', () => {
    const pet = MakePet({
      name: 'princess',
    })

    const photos = [
      { url: 'http://example.com/photo1.png', petId: pet.id },
      { url: 'http://example.com/photo2.png', petId: pet.id },
      { url: 'http://example.com/photo2.png', petId: pet.id },
      { url: 'http://example.com/photo2.png', petId: pet.id },
      { url: 'http://example.com/photo2.png', petId: pet.id },
      { url: 'http://example.com/photo2.png', petId: pet.id },
    ]

    expect(() => PetPhotos.create(photos)).toThrow()
  })
})
