import { MakePet } from 'test/factories/pet-factory'
import { describe, expect, it } from 'vitest'

describe('Pet', () => {
  it('Should be able create a pet', () => {
    const pet = MakePet({
      name: 'princess',
    })

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
      photos: undefined,
    })

    expect(pet.photos).toBeNull()
  })
})
