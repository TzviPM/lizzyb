import { npmCreateLizzyb } from './npm-create-lizzyb';

describe('npmCreateLizzyb', () => {
  it('should work', () => {
    expect(npmCreateLizzyb()).toEqual('npm-create-lizzyb');
  });
});
