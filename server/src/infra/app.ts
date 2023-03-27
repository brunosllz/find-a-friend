import fastify from 'fastify'
import { ZodError } from 'zod'
import { env } from './config/env'
import { appRoutes } from './http/routes/app-routes'
import { organizationsRoutes } from './http/routes/organizations-routes'

export const app = fastify()

app.register(organizationsRoutes)
app.register(appRoutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: Implement a external tool for track logs like a DataDog/NewRelic/Sentry.
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})
