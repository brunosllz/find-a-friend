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
})
