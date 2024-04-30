const Pet = require('../src/pet');
describe('constructor', () => {
  it('returns an object', () => {
    testObject = new Pet('Fido');
    expect(testObject.name).toEqual('Fido');
  });
});

describe('birthAndGrowth', () => {
  it('tests the effects of the growUp function on age, hunger and fitness of the object', () => {
    testObject = new Pet('Fido');
    expect(testObject.age).toEqual(0);
    expect(testObject.hunger).toEqual(0);
    expect(testObject.fitness).toEqual(10);
    testObject.growUp();
    expect(testObject.age).toEqual(1);
    expect(testObject.hunger).toEqual(5);
    expect(testObject.fitness).toEqual(7);
  });
});

describe('walkAndGetFit', () => {
  it('tests the effect of the walk function on fitness of the object', () => {
    testObject = new Pet('Fido');
    expect(testObject.fitness).toEqual(10);
    testObject.growUp();
    expect(testObject.fitness).toEqual(7);
    testObject.growUp();
    expect(testObject.fitness).toEqual(4);
    testObject.walk();
    expect(testObject.fitness).toEqual(8);
    testObject.walk();
    expect(testObject.fitness).toEqual(10);
  });
});


describe('eatAndGetFed', () => {
  it('tests the effect of the feed function on hunger of the object', () => {
    testObject = new Pet('Fido');
    expect(testObject.hunger).toEqual(0);
    testObject.growUp();
    expect(testObject.hunger).toEqual(5);
    testObject.growUp();
    expect(testObject.hunger).toEqual(10);
    testObject.feed();
    expect(testObject.hunger).toEqual(7);
    testObject.feed();
    expect(testObject.hunger).toEqual(4);
    testObject.feed();
    expect(testObject.hunger).toEqual(1);
    testObject.feed();
    expect(testObject.hunger).toEqual(0);
  });
});

describe('checkUp', () => {
  it('tests the checkup Functionality', () => {
    testObject = new Pet('Fido');
    expect(testObject.age).toEqual(0);
    expect(testObject.hunger).toEqual(0);
    expect(testObject.fitness).toEqual(10);
    testObject.growUp();
    expect(testObject.age).toEqual(1);
    expect(testObject.hunger).toEqual(5);
    expect(testObject.fitness).toEqual(7);
    expect(testObject.checkUp()).toEqual("I am hungry")
    testObject.growUp();
    expect(testObject.age).toEqual(2);
    expect(testObject.hunger).toEqual(10);
    expect(testObject.fitness).toEqual(4);
    expect(testObject.checkUp()).toEqual("I am hungry")
    testObject.growUp();
    expect(testObject.age).toEqual(3);
    expect(testObject.hunger).toEqual(15);
    expect(testObject.fitness).toEqual(1);
    expect(testObject.checkUp()).toEqual("I am hungry AND I need a walk")
    testObject.feed();
    testObject.feed();
    testObject.feed();
    testObject.feed();
    expect(testObject.checkUp()).toEqual("I need a walk")
    testObject.walk();
    testObject.walk();
    testObject.walk();
    testObject.walk();
    expect(testObject.checkUp()).toEqual("I feel great")
  });
});