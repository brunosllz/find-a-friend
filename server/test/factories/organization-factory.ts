import {
  Organization,
  OrganizationProps,
} from '@/application/entities/organization'

type Override = Partial<OrganizationProps>

export function MakeOrganization(override: Override = {}, id?: string) {
  return new Organization(
    {
      name: 'organization example',
      email: 'organization@email.com',
      password: '123456',
      address: 'street example',
      cep: '99999000',
      phoneNumber: '99999999999',
      ...override,
    },
    id,
  )
}
