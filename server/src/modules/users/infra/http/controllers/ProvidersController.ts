import CreateUserService from '@modules/users/services/CreateUserService';
import { classToClass } from 'class-transformer';
import { container } from 'tsyringe';

class ProvidersController {
  async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      password,
      city,
      district,
      number,
      whatsapp,
      work_routine,
      opening_hours,
    } = request.body;

    const createUser = container.resolve(CreateUserService);
    const { id } = await createUser.execute({
      name,
      email,
      password,
    });

    const address = `${city}, ${district}, ${number}`;

    const createProvider = container.resolve(CreateProviderService);
    const provider = await createProvider.execute({
      provider_id: id,
      address,
      whatsapp,
      work_routine,
      opening_hours,
    });

    return response.json(classToClass(provider));
  }
}

export default ProvidersController;
