export type City = {
  id: string
  name: string
  slug: string
}

type FetchCities = (acronymState: string) => Promise<City[]>

type FetchCitiesByStateUseCaseRequest = {
  acronymState: string
}

type FetchCitiesByStateUseCaseResponse = City[]

export class FetchCitiesByStateUseCase {
  constructor(private FetchCities: FetchCities) {}

  async execute({
    acronymState,
  }: FetchCitiesByStateUseCaseRequest): Promise<FetchCitiesByStateUseCaseResponse> {
    const cities = await this.FetchCities(acronymState)

    return cities
  }
}
