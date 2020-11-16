import { Functor } from '../../src';

describe('Functor Class', () => {

  describe('fork', () => {
    it('should fork a value', () => {
      expect(typeof Functor.of(41).fork).toBe('number');
    });
  });

  describe('clone', () => {
    it('should clone a value', () => {
      expect(typeof Functor.of(41).clone).toBe('number');
    });
  });

  describe('toString', () => {
    it('should a output a stringnified version of the value', () => {
      expect(Functor.of(43).toString()).toBe('43');
    });
  });

  describe('toValue', () => {
    it('should output a value of the same type', () => {
      expect(typeof Functor.of(43).toValue()).toBe('number');
    });
  });
  describe('static methodes', () => {
    it('static fromValueOf', () => {
      expect(Functor.fromValueOf(Functor.of<number>(41))).toMatchObject({
        _value: 41,
      });
    });

    it('static of', () => {
      Functor.of('value')['fantasy-land/map'];
      expect(Functor.of<string>('my string')).toMatchObject({
        _value: 'my string',
      });
    });
  });
});
