import IHashProvider from '../models/IHashProvider';

class FakeHashProvider implements IHashProvider {
  generateHash(payload: string): Promise<string> {
    return payload;
  }

  compareHash(payload: string, hashed: string): Promise<boolean> {
    return payload === hashed;
  }
}

export default FakeHashProvider;
