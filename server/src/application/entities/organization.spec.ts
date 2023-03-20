import { describe, expect, it } from 'vitest'
import { Organization } from './organization'

describe('Organization', () => {
  it('Should be able create a pet', () => {
    const organization = new Organization({
      name: 'organization example',
      email: 'organization@email.com',
      password: '123456',
      address: 'street example',
      cep: '99999000',
      phoneNumber: '99999999999',
    })

    expect(organization).toBeTruthy()
    expect(organization).toEqual(
      expect.objectContaining({
        name: organization.name,
      }),
    )
  })
})
