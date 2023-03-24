import { OrganizationAlreadyExistsError } from '@/application/use-cases/errors/organization-already-exists-error'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { MakeRegisterOrganizationUseCase } from '../factories/make-register-organization-use-case'

export async function RegisterOrganizationController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerOrganizationBodySchema = z.object({
    address: z.string(),
    cep: z.string(),
    email: z.string().email(),
    name: z.string(),
    password: z.string(),
    phoneNumber: z.string(),
  })

  const { name, email, password, address, cep, phoneNumber } =
    registerOrganizationBodySchema.parse(request.body)

  try {
    const registerUseCase = MakeRegisterOrganizationUseCase()

    await registerUseCase.execute({
      address,
      cep,
      email,
      name,
      password,
      phoneNumber,
    })

    return reply.status(201).send()
  } catch (error) {
    if (error instanceof OrganizationAlreadyExistsError) {
      return reply.status(409).send({ message: error.message })
    }

    throw error
  }
}
