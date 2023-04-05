import { FastifyInstance } from 'fastify'
import { FetchCitiesByStateController } from '../controllers/fetch-cities-by-state'
import { FetchStatesController } from '../controllers/fetch-states'

export async function appRoutes(app: FastifyInstance) {
  app.get('/location/states', FetchStatesController)
  app.get('/location/:acronymState/cities', FetchCitiesByStateController)
}
