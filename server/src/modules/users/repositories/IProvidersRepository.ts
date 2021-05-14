import Provider from '@modules/users/infra/typeorm/entities/Provider';
import ICreateProviderDTO from '../dtos/ICreateProviderDTO';

export default interface IProvidersRepository {
  create(data: ICreateProviderDTO): Promise<Provider>;
}
