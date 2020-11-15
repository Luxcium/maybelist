import { Monad } from '../../src';

describe('No Test Implemented', () => {
  it('should implement at leat one test', () => {
    expect(Monad);
  });

  const myMonad = Monad.of('value');
  it('should  myMonad.ap', () => {
    expect(myMonad.ap);
  });
  it('should  myMonad.chain', () => {
    expect(typeof myMonad.chain).toBe('function');
  });
  it('should  myMonad.clone', () => {
    expect(typeof myMonad.clone).toBe('string');
  });
  it('should  myMonad.map', () => {
    expect(typeof myMonad.map).toBe('function');
  });
  it('should  myMonad.fork', () => {
    expect(typeof myMonad.fork).toBe('string');
  });
  it('should  myMonad.toString', () => {
    expect(typeof myMonad.toString).toBe('function');
  });
  it('should  myMonad.toValue', () => {
    expect(typeof myMonad.toValue).toBe('function');
  });
  it("should  myMonad['fantasy-land/map']", () => {
    expect(typeof myMonad['fantasy-land/map']).toBe('function');
  });
});
