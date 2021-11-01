const Pet = require('../src/pet');
describe('constructor', () => {
  it('returns an object', () => {
      const pet = new Pet('Fido');
      expect(new Pet('Fido')).toBeInstanceOf(Object);
   });
});
describe('age function', () => {
  it('has a initial age of 0', () => {
    const pet = new Pet('Fido');
    expect(pet.age).toEqual(0);
  });
});
describe('growUp', () => {
  it('increments the age by 1', () => {
    const pet = new Pet('Fido');
    const rex = new Pet ('Rex');
    pet.growUp();
    expect(pet.age).toEqual(1);
  });
});
describe('hunger', () => {
  it('should have an initial hunger of 0',() => {
    const pet = new Pet ('Fido');
    const rex = new Pet ('Rex');
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });
});
describe('fitness', () => {
  it('should have an initial fitness of 10',() => {
    const pet = new Pet ('Fido');
    const rex = new Pet ('Rex');
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });
});
describe('walk', () => {
  it('increases fitness by to a maximum of 10', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 8;
      pet.walk();
  
      expect(pet.fitness).toEqual(10);
    });
    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');
      pet.age = 30;
      expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
  });
  