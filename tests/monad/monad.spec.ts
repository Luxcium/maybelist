import { Functor, Monad } from '../../src';
import { fantasyMapTest } from '../fantasyland/functor.spec';

describe('Monad Class:', () => {
  describe('The Monad Instance must implement theses methods:', () => {
    const monad = Monad.of('value');
    // const myFnMonad = Monad.of((val: string) => val.length);
    describe("The 'map' method:", () => {
      describe("The 'map' method must be Fantasy Land compliant with Functor specification.", () => {
        fantasyMapTest(Monad);
      });

      describe("Type of monad.map must be 'function' type.", () => {
        it("Is typeof 'function'", () => {
          expect(typeof monad.map).toBe('function');
        });
      });
      describe("Return a Monad: Return type of monad.map must be 'instanceof Monad'.", () => {
        it('Return a Monad', () => {
          expect(monad.map(a => a) instanceof Monad);
        });
      });
      describe("Return a Functor: Return type of monad.map must be 'instanceof Functor'.", () => {
        it('Return a Functor', () => {
          expect(monad.map(a => a) instanceof Functor);
        });
        it("[2/3] Monad.of('VALUE').map(a => a).fork should be equivalent to 'VALUE'", () => {
          expect(Monad.of('VALUE').map(a => a).fork).toBe('VALUE');
        }, 4);
      });
    });

    describe('ap', () => {
      it.todo('should  myMonad.ap'); //, () => {
      // expect(typeof monad.ap(myFnMonad).fork).toBe('number');
      // });

      it.todo('should  myMonad.ap'); //, () => {
      // expect(typeof monad.ap).toBe('function');
      // });
    });

    describe('chain', () => {
      it.todo('should  myMonad.chain'); //, () => {
      // expect(
      // typeof monad.chain((val: string) => Monad.of(val.length)).fork,
      // ).toBe('number');
      // });

      it.todo('should  myMonad.chain'); //, () => {
      // expect(typeof monad.chain).toBe('function');
      // });
    });

    describe('clone', () => {
      it.todo('should  myMonad.clone'); //, () => {
      // expect(typeof monad.clone).toBe('string');
      // });
    });
    describe('map', () => {});
    describe('fork', () => {
      it.todo('should  myMonad.fork'); //, () => {
      // expect(typeof monad.fork).toBe('string');
      // });
    });
    describe('toString', () => {
      it.todo('should  myMonad.toString'); //, () => {
      // expect(typeof monad.toString).toBe('function');
      // });
    });
    describe('toValue', () => {
      it.todo('should  myMonad.toValue'); //, () => {
      // expect(typeof monad.toValue).toBe('function');
      // });
    });
    describe("myMonad['fantasy-land/map']", () => {
      it.todo("should  myMonad['fantasy-land/map']"); //, () => {
      // expect(typeof monad['fantasy-land/map']).toBe('function');
      // });
    });

    describe('Static Methodes', () => {
      it.todo('should produce a monad fromValueOf '); //, () => {
      // expect(typeof Monad.fromValueOf(monad).fork).toBe('string');
      // });
    });
  });
});
