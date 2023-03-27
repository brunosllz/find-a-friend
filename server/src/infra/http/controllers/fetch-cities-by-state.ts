import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { MakeFetchCitiesByStateUseCase } from './factories/make-fetch-cities-by-state-use-case'

export async function FetchCitiesByStateController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const fetchCitiesByStateParamsSchema = z.object({
    acronymState: z.string(),
  })

  const { acronymState } = fetchCitiesByStateParamsSchema.parse(request.params)

  const FetchCitiesByStateUseCase = MakeFetchCitiesByStateUseCase()

  const states = await FetchCitiesByStateUseCase.execute({ acronymState })

  return reply.status(200).send(states)
}
