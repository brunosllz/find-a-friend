import { PrismaClient } from '@prisma/client'
import bcryptjs from 'bcryptjs'

const client = new PrismaClient()

async function run() {
  await client.petPhotos.deleteMany()
  await client.pet.deleteMany()
  await client.organization.deleteMany()

  /**
   * Create Orgs
   */

  const password = await bcryptjs.hash('Org1423!', 8)

  await Promise.all([
    client.organization.create({
      data: {
        id: '30ab4c94-593c-4a5b-8249-54364ef77612',
        cep: '95520000',
        address: 'osvaldo bastos, 255',
        email: 'adote_pets@email.com',
        name: 'adote pets',
        password,
        phoneNumber: '51 99999.9999',
      },
    }),
    client.organization.create({
      data: {
        id: '24c7192d-1e26-4ced-bc65-2ae3a942d126',
        cep: '95520000',
        address: 'fernando ferrari, 360',
        email: 'catinhos@email.com',
        name: 'catinhos',
        password,
        phoneNumber: '51 99999.9999',
      },
    }),
  ])

  /**
   * Create pets
   */

  await Promise.all([
    client.pet.create({
      data: {
        id: '137d9eb5-aae2-4aa2-958a-525ec830dde9',
        name: 'caramelinho',
        age: 'cub',
        size: 'medium',
        city: 'osório',
        description: 'um doguinho para quem tem muito amor para dar',
        energy: 3,
        independence: 'high',
        type: 'dog',
        org_id: '30ab4c94-593c-4a5b-8249-54364ef77612',
        petPhotos: {
          createMany: {
            data: [
              { url: 'caramelinho.jpeg' },
              { url: 'caramelinho-1.jpeg' },
              { url: 'caramelinho-2.jpeg' },
            ],
          },
        },
      },
    }),
    client.pet.create({
      data: {
        id: 'e12378c3-0870-48c4-8341-3e0f780c3201',
        name: 'yoda',
        age: 'adolescent',
        size: 'small',
        city: 'osório',
        description: 'um companheiro para todas as horas',
        energy: 5,
        independence: 'low',
        type: 'cat',
        org_id: '30ab4c94-593c-4a5b-8249-54364ef77612',
        petPhotos: {
          createMany: {
            data: [
              { url: 'yoda.jpeg' },
              { url: 'yoda-1.jpeg' },
              { url: 'yoda-2.jpeg' },
            ],
          },
        },
      },
    }),
    client.pet.create({
      data: {
        id: '94f3c2fb-806a-4624-b24e-88b925581dce',
        name: 'tigrão',
        age: 'elderly',
        size: 'big',
        city: 'osório',
        description: 'um bom amigo para quem gosta de um dog mais quietinho',
        energy: 2,
        independence: 'medium',
        type: 'dog',
        org_id: '24c7192d-1e26-4ced-bc65-2ae3a942d126',
        petPhotos: {
          createMany: {
            data: [
              { url: 'tigrao.jpeg' },
              { url: 'tigrao-1.jpeg' },
              { url: 'tigrao-2.jpeg' },
            ],
          },
        },
      },
    }),
  ])
}

run()
  .then(async () => {
    console.log('✅ Seed was executed!')
    await client.$disconnect()
  })
  .catch(async (e) => {
    console.log(e)
    await client.$disconnect()
    process.exit(1)
  })
