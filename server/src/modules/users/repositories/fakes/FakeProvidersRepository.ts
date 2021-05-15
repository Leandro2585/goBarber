import { ICreateProviderDTO } from '@modules/users/dtos/ICreateProviderDTO';
import Provider from '@modules/users/infra/typeorm/entities/Provider';
import IProvidersRepository from '@modules/users/repositories/IProvidersRepository';

class FakeProvidersRepository implements IProvidersRepository {
  private providers: Provider[] = [];

  public async create(data: ICreateProviderDTO): Promise<Provider> {
    const provider = new Provider();
    Object.assign(provider, data);
    this.providers.push(provider);
    return provider;
  }
}

export default FakeProvidersRepository;
