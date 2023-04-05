import { describe, expect, it, beforeEach } from 'vitest'
import { FetchCitiesByStateUseCase } from './fetch-cities-by-state'

async function mockFetchCities() {
  const mockedResponse = [
    {
      name: 'ARROIO GRANDE',
      id: '4301305',
    },
    {
      name: 'ARVOREZINHA',
      id: '4301404',
    },
  ]

  return mockedResponse
}

describe('Fetch cities by state use case', () => {
  let sut: FetchCitiesByStateUseCase

  beforeEach(() => {
    sut = new FetchCitiesByStateUseCase(mockFetchCities)
  })

  it('Should be able fetch many cities by state', async () => {
    await expect(sut.execute({ acronymState: 'RS' })).resolves.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          name: expect.any(String),
        }),
      ]),
    )
  })
})
