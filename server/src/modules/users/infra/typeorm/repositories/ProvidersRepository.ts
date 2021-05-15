import { Repository, getRepository } from 'typeorm'
import { ICreateProviderDTO } from '@modules/users/dtos/ICreateProviderDTO';
import IProvidersRepository from '@modules/users/repositories/IProvidersRepository';
import Provider from '../entities/Provider';

class ProvidersRepository implements IProvidersRepository {
  private ormRepository: Repository<Provider>;
  constructor() {
    this.ormRepository = getRepository(Provider);
  }
  async create(data: ICreateProviderDTO): Promise<Provider> {
    const provider = await this.ormRepository.create(data);
    return provider;
  }
}

export default ProvidersRepository