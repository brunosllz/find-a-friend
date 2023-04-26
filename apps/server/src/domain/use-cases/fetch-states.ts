import { Slug } from '../entities/value-objects/slug'

export type State = {
  id: string
  name: string
  acronym: string
  slug: string
}

type FetchStates = () => Promise<State[]>

type FetchStatesUseCaseResponse = State[]

export class FetchStatesUseCase {
  constructor(private fetchStates: FetchStates) {}

  async execute(): Promise<FetchStatesUseCaseResponse> {
    const states = await this.fetchStates()

    const statesFormatted = states.map((state) => {
      return {
        ...state,
        slug: Slug.createFromText(state.acronym).value,
      }
    })

    return statesFormatted
  }
}
