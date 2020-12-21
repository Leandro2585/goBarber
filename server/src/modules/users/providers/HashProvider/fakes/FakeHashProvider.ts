import IHashProvider from '../models/IHashProvider';

const FakeHash = async (key: string) => {
  return (await Math.random()) + key;
};
const FakeCompare = async (key: string, crypted: string) => {
  return key === crypted;
};

class FakeHashProvider implements IHashProvider {
  generateHash(payload: string): Promise<string> {
    return FakeHash(payload);
  }

  compareHash(payload: string, hashed: string): Promise<boolean> {
    return FakeCompare(payload, hashed);
  }
}

export default FakeHashProvider;
