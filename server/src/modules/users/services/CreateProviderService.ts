import { injectable, inject } from 'tsyringe';
import IProvidersRepository from '../repositories/IProvidersRepository';

type IRequest = {
  provider_id: string;
};

@injectable()
class CreateProviderService {
  constructor(
    @inject('ProvidersRepository')
    private readonly providersRepository: IProvidersRepository,
  );

  async execute({
    address,
    whatsapp,
    work_routine,
    opening_hours,
  }: IRequest): Promise<Provider> {}
}
