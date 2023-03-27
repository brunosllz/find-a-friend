import { FastifyReply, FastifyRequest } from 'fastify'
import { MakeFetchStatesUseCase } from './factories/make-fetch-states'

export async function FetchStatesController(
  _: FastifyRequest,
  reply: FastifyReply,
) {
  const fetchStatesUseCase = MakeFetchStatesUseCase()

  const states = await fetchStatesUseCase.execute()

  return reply.status(201).send(states)
}
