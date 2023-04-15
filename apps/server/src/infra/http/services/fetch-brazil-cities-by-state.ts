import { brazilApi } from '@/infra/lib/axios'

export type City = {
  id: string
  name: string
}

type ResponseType = Array<{
  codigo_ibge: string
  nome: string
}>

export async function fetchBrazilCitiesByState(acronymState: string) {
  try {
    const response = await brazilApi.get(
      `/ibge/municipios/v1/${acronymState}?providers=gov`,
    )

    const cities = response.data as ResponseType

    const statesMapper = cities.map((city) => {
      return {
        id: String(city.codigo_ibge),
        name: city.nome.toLowerCase(),
      }
    })

    return statesMapper
  } catch (error) {
    return [] as City[]

    // TODO: implement a notification error service
  }
}
