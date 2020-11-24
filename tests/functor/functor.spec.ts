import { Functor } from '../../src';
import { fantasyMapTest } from '../fantasyland/functor.spec';

describe('Functor Class', () => {
  describe('map', () => {
    fantasyMapTest(Functor);
    // it('should map according to fantasyland definition', () => {
    //   expect();
    // });
  });

  describe('fork', () => {
    it('should fork a value', () => {
      expect(typeof Functor.of(41).fork).toBe('number');
    });
  });

  // describe('clone', () => {
  //   it('should clone a value', () => {
  //     expect(typeof Functor.of(41).clone).toBe('number');
  //   });
  // });

  // describe('toString', () => {
  //   it('should a output a stringnified version of the value', () => {
  //     expect(Functor.of(43).toString()).toBe('43');
  //   });
  // });

  // describe('toValue', () => {
  //   it('should output a value of the same type', () => {
  //     expect(typeof Functor.of(43).toValue()).toBe('number');
  //   });
  // });
  // describe('static methodes', () => {
  //   it('static fromValueOf', () => {
  //     expect(Functor.fromValueOf(Functor.of<number>(41))).toMatchObject({
  //       _value: 41,
  //     });
  //   });

  it('static of', () => {
    Functor.of('value')['fantasy-land/map'];
    expect(Functor.of<string>('my string')).toMatchObject({
      _value: 'my string',
    });
  });
});
// });

// describe("Identity: u['fantasy-land/map'](a => a) is equivalent to u (identity)", () => {
//   it('[1/3] Monad.of(u) should be equivalent to u', () => {
//     expect(Monad.of(41).map((a) => a).fork).toBe(41);
//   });

//   it('[2/3] Monad.of(u).map(a => a) should be strictly equal to Monad.of(u)', () => {
//     expect(Monad.of(41).map((a) => a)).toStrictEqual(Monad.of(41));
//   });

//   it('[3/3] mySameMonad.map(a => a) should be strictly equal to mySameMonad', () => {
//     const mySameMonad = Monad.of<number>(41);
//     expect(mySameMonad.map((a) => a)).toStrictEqual(mySameMonad);
//   });
// });
//   describe("u['fantasy-land/map'](x => f(g(x))) is equivalent to u['fantasy-land/map'](g)['fantasy-land/map'](f) (composition)", () => {
//     function f(x: number) {
//       // mutiplyByTwo
//       return 2 * x;
//     }
//     function g(x: number) {
//       // addTen
//       return x + 10;
//     }
//     it("[1/3] Monad.of(u).map(x => f(g(x))) should compose and be strictly equal to  Monad.of(u).map(g).map(f) u['fantasy-land/map'](x => f(g(x))) is equivalent to u['fantasy-land/map'](g)['fantasy-land/map'](f)", () => {
//       expect(Monad.of(43).map((x) => f(g(x)))).toStrictEqual(
//         Monad.of(43).map(g).map(f),
//       );
//     });

//     it("[2/3] should compose u['fantasy-land/map'](x => f(g(x))) is equivalent to u['fantasy-land/map'](g)['fantasy-land/map'](f)", () => {
//       const mySameMonad = Monad.of(43);
//       expect(mySameMonad.map((x) => f(g(x)))).toStrictEqual(
//         mySameMonad.map(g).map(f),
//       );
//     });

//     it('[3/3] fantasy-land/map must return a value of the same Monad', () => {
//       const myMonad = Monad.of(43);
//       const mapedReturnValue = myMonad.map(g);
//       expect(
//         mapedReturnValue instanceof Monad && myMonad instanceof Monad,
//       ).toBe(true);
//     });
//   });

//   it("Monad['fantasy-land/map'] should be the same as Monad.map ", () => {
//     expect(Monad.of(41).map).toStrictEqual(Monad.of(41)['fantasy-land/map']);
//   });
// });

/*
  Monad
   u['fantasy-land/map'](a => a) is equivalent to u (identity)
   u['fantasy-land/map'](x => f(g(x))) is equivalent to u['fantasy-land/map'](g)['fantasy-land/map'](f) (composition)

   fantasy-land/map method
   fantasy-land/map :: Monad f => f a ~> (a -> b) -> f b
   A value which has a Monad must provide a fantasy-land/map method. The fantasy-   land/map method takes one argument:

   u['fantasy-land/map'](fn)
   fn must be a function,

   If fn is not a function, the behaviour of fantasy-land/map is unspecified.
   fn can return any value.
   No parts of fn's return value R should be checked.
   fantasy-land/map must return a value of the same Monad

 */
// });
