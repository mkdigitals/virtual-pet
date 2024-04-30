const Pet = require('../src/pet');
describe('constructor', () => {
  it('returns an object', () => {
    testObject = new Pet('Fido');
    expect(testObject.name).toEqual('Fido');
  });
});

describe('ageAndGrowing', () => {
  it('returns an object', () => {
    testObject = new Pet('Fido');
    expect(testObject.age).toEqual(0);
    testObject.growUp();
    expect(testObject.age).toEqual(1);
  });
});