export type State = {
  id: string
  name: string
  acronym: string
}

type FetchStates = () => Promise<State[]>

type FetchStatesUseCaseResponse = State[]

export class FetchStatesUseCase {
  constructor(private fetchStates: FetchStates) {}

  async execute(): Promise<FetchStatesUseCaseResponse> {
    const states = await this.fetchStates()

    return states
  }
}
