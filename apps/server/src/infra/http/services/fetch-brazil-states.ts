import { brazilApi } from '@/infra/lib/axios'

export type State = {
  id: string
  name: string
  acronym: string
}

type ResponseType = Array<{
  id: number
  sigla: string
  nome: string
}>

export async function fetchBrazilStates() {
  try {
    const response = await brazilApi.get('/ibge/uf/v1')

    const states = response.data as ResponseType

    const statesMapper = states.map((state) => {
      return {
        id: String(state.id),
        name: state.nome,
        acronym: state.sigla,
      }
    })

    return statesMapper
  } catch (error) {
    return [] as State[]

    // TODO: implement a notification error service
  }
}
