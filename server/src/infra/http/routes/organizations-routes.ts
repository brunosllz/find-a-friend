import { FastifyInstance } from 'fastify'
import { RegisterOrganizationController } from '../controllers/organizations/register'

export async function organizationsRoutes(app: FastifyInstance) {
  app.post('/organizations', RegisterOrganizationController)
}
