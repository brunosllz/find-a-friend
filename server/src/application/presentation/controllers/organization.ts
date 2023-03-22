import { OrganizationUseCase } from '@/application/use-cases/organization'
import { Controller } from '../protocols/controller'
import { HttpResponse } from '../protocols/http'

interface OrganizationControllerRequest {
  address: string
  cep: string
  email: string
  name: string
  password: string
  phoneNumber: string
}

export class OrganizationController implements Controller {
  constructor(private readonly organizationUseCase: OrganizationUseCase) {}

  async handle(request: OrganizationControllerRequest): Promise<HttpResponse> {
    await this.organizationUseCase.execute(request)

    return {
      statusCode: 200,
      body: null,
    }
  }
}
