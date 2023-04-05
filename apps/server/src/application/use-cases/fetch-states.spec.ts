import { describe, expect, it, beforeEach } from 'vitest'
import { FetchStatesUseCase } from './fetch-states'

async function mockFetchStates() {
  const mockedResponse = [
    {
      id: '11',
      acronym: 'RO',
      name: 'Rondônia',
    },
    {
      id: '12',
      acronym: 'AC',
      name: 'Acre',
    },
  ]

  return mockedResponse
}

describe('Fetch states use case', () => {
  let sut: FetchStatesUseCase

  beforeEach(() => {
    sut = new FetchStatesUseCase(mockFetchStates)
  })

  it('Should be able fetch many Brazil states', async () => {
    await expect(sut.execute()).resolves.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          acronym: expect.any(String),
          name: expect.any(String),
        }),
      ]),
    )
  })
})
