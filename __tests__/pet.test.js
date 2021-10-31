const Pet = require('../src/pet');
describe('constructor', () => {
  it('returns an object', () => {
      const pet = new Pet('Fido');
      expect(new Pet('Fido')).toBeInstanceOf(Object);
   });
});
describe('constructor', () => {
  it('has a initial age of 0', () => {
    const pet = new Pet('Fido');
    expect(pet.age).toEqual(0);
  });
});
describe('growUp', () => {
  it('increments the age by 1', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.age).toEqual(1);
  });
});
