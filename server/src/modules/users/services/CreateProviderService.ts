import { injectable, inject } from 'tsyringe';
import IProvidersRepository from '../repositories/IProvidersRepository';
import Provider from '../infra/typeorm/entities/Provider'

type IRequest = {
  provider_id: string;
  address: string;
  whatsapp: number;
  work_routine: string;
  opening_hours: string;
};

@injectable()
class CreateProviderService {
  constructor(
    @inject('ProvidersRepository')
    private providersRepository: IProvidersRepository,
  ){}

  async execute(data: IRequest): Promise<Provider> {
    const provider = await this.providersRepository.create(data);
    return provider;
  }
}

export default CreateProviderService;