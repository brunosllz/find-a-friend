import { FastifyInstance } from 'fastify'
import { SearchPetsController } from '../controllers/pets/search'
import { GetPetsController } from '../controllers/pets/get'

export async function petsRoutes(app: FastifyInstance) {
  app.get('/pets/:id', GetPetsController)
  app.get('/pets/location/:city', SearchPetsController)
}
