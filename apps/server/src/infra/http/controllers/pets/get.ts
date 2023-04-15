import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { MakeGetPetUseCase } from '../factories/make-get-pet-use-case'
import { GetPetViewModel } from '../../view-models/pets/get-view-models'

export async function GetPetsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getPetsParams = z.object({
    id: z.string(),
  })

  const { id } = getPetsParams.parse(request.params)

  const getUseCase = MakeGetPetUseCase()

  const { pet } = await getUseCase.execute({
    id,
  })

  return reply.status(200).send(GetPetViewModel.toHTTP(pet))
}
