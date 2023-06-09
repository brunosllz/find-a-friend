import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { MakeSearchPetsUseCase } from '../factories/make-search-pets-use-case'
import { SearchPetsViewModel } from '../../view-models/pets/search-view-model'

export async function SearchPetsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const searchPetsRouteParams = z.object({
    city: z.string().toLowerCase(),
  })

  const searchPetsQueryParamsSchema = z.object({
    age: z.enum(['cub', 'adolescent', 'elderly']).optional(),
    energy: z.coerce.number().min(1).max(5).optional(),
    independence: z.enum(['low', 'medium', 'high']).optional(),
    size: z.enum(['small', 'medium', 'big']).optional(),
    type: z.enum(['dog', 'cat']).optional(),
    page: z.coerce.number().min(1).default(1),
  })

  // TODO: refactor how to filter pets for the city, because city doesn't index
  const { city } = searchPetsRouteParams.parse(request.params)

  const { page, ...queryParams } = searchPetsQueryParamsSchema.parse(
    request.query,
  )

  const searchUseCase = MakeSearchPetsUseCase()

  const { pets, count } = await searchUseCase.execute({
    city,
    page,
    params: {
      ...queryParams,
    },
  })

  return reply
    .status(200)
    .send({ pets: SearchPetsViewModel.toHTTP(pets), count })
}
