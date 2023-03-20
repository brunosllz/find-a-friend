import { describe, expect, it } from 'vitest'
import { Pet } from './pet'

describe('Pet', () => {
  it('Should be able create a pet', () => {
    const pet = new Pet({
      name: 'princes',
      age: 'elderly',
      city: 'any where',
      description: 'Is a pet',
      energy: 5,
      independence: 'high',
      photo: 'https://www.pet-images.com/image.png',
      size: 'big',
      type: 'dog',
    })

    expect(pet).toBeTruthy()
    expect(pet).toEqual(
      expect.objectContaining({
        name: 'princes',
      }),
    )
  })
})
