import FakeProvidersRepository from '../repositories/fakes/FakeProvidersRepository';
import CreateProviderService from './CreateProviderService'

let fakeProvidersRepository: FakeProvidersRepository;
let createProvider: CreateProviderService;

describe('CreateProvider Service', () => {
  beforeEach(() => {
    fakeProvidersRepository = new FakeProvidersRepository()
    createProvider = new CreateProviderService(fakeProvidersRepository)
  });

  it('should be able to create a new provider', async () => {
    const provider = await createProvider.execute({
      provider_id: 'any_id',
      address: 'any_address', 
      whatsapp: 1111111111,
      work_routine: 'monday to friday',
      opening_hours: 'from 8 to 18h',
    });

    expect(provider).toHaveProperty('provider_id');
  });
});
