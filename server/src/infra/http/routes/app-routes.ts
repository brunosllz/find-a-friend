import { FastifyInstance } from 'fastify'
import { FetchStatesController } from '../controllers/fetch-states'

export async function appRoutes(app: FastifyInstance) {
  app.post('/location/states', FetchStatesController)
}
