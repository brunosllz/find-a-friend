import { FastifyInstance } from 'fastify'
import { SearchPetsController } from '../controllers/pets/search'

export async function petsRoutes(app: FastifyInstance) {
  app.get('/pets/:city', SearchPetsController)
}
