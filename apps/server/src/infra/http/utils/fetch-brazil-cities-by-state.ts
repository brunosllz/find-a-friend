import axios from 'axios'

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
    const response = await axios.get(
      `https://brasilapi.com.br/api/ibge/municipios/v1/${acronymState}?providers=gov`,
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
