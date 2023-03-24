import { MakeOrganization } from 'test/factories/organization-factory'
import { describe, expect, it } from 'vitest'
import { PasswordNotCorrectly } from './errors/password-not-correctly-error'

describe('Organization', () => {
  it('Should be able create an organization', () => {
    const organization = MakeOrganization()
    expect(organization).toBeTruthy()
    expect(organization).toEqual(
      expect.objectContaining({
        name: organization.name,
      }),
    )
  })

  it('Should be not able create an organization with a password least one digit, one lower case, one upper case and special character', () => {
    expect(() =>
      MakeOrganization({
        password: '123456',
      }),
    ).toThrow(PasswordNotCorrectly)
  })
})
