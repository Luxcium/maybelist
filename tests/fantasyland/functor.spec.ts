import { Functor } from '../../src';
import type { StaticFunctor } from '../../src/core/functor/types';


export function FunctorTest(Mapable:StaticFunctor){

describe('Functor: (`fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b`)', () => {
  describe("1. u['fantasy-land/map'](a => a) is equivalent to u (identity)", () => {

  })
  describe("2. u['fantasy-land/map'](x => f(g(x))) is equivalent to u['fantasy-land/map'](g)['fantasy-land/map'](f) (composition)", () => {

  })

describe("argument `f`: (`u['fantasy-land/map'](f)`)", () => {

describe('1. `f` must be a function,', () => {
  describe('i. If f is not a function, the behaviour of fantasy-land/map is unspecified.', () => {

  })
  describe('ii. f can return any value.', () => {

  })
  describe('iii. No parts of `f`´s return value should be checked.', () => {

  })
})

describe('2. fantasy-land/map must return a value of the same Functor', () => {

})


})



})



  describe('map must be Fantasy Land compliant with Functor specification', () => {



    describe("Identity: u['fantasy-land/map'](a => a) is equivalent to u (identity)", () => {
      it('[1/3] Functor.of(u) should be equivalent to u', () => {
        expect(Mapable.of(41).map(a => a).fork).toBe(41);
      });

      it('[2/3] Functor.of(u).map(a => a) should be strictly equal to Functor.of(u)', () => {
        expect(Mapable.of(41).map(a => a)).toStrictEqual(Mapable.of(41));
      });

      it('[3/3] mySameFunctor.map(a => a) should be strictly equal to mySameFunctor', () => {
        const mySameFunctor = Mapable.of<number>(41);
        expect(mySameFunctor.map(a => a)).toStrictEqual(mySameFunctor);
      });
    });
    describe("u['fantasy-land/map'](x => f(g(x))) is equivalent to u['fantasy-land/map'](g)['fantasy-land/map'](f) (composition)", () => {
      function f(x: number) {
        // mutiplyByTwo
        return 2 * x;
      }
      function g(x: number) {
        // addTen
        return x + 10;
      }
      it("[1/3] Functor.of(u).map(x => f(g(x))) should compose and be strictly equal to  Functor.of(u).map(g).map(f) u['fantasy-land/map'](x => f(g(x))) is equivalent to u['fantasy-land/map'](g)['fantasy-land/map'](f)", () => {
        expect(Mapable.of(43).map(x => f(g(x)))).toStrictEqual(
          Mapable.of(43).map(g).map(f),
        );
      });

      it("[2/3] should compose u['fantasy-land/map'](x => f(g(x))) is equivalent to u['fantasy-land/map'](g)['fantasy-land/map'](f)", () => {
        const mySameFunctor = Mapable.of(43);
        expect(mySameFunctor.map(x => f(g(x)))).toStrictEqual(
          mySameFunctor.map(g).map(f),
        );
      });

      it('[3/3] fantasy-land/map must return a value of the same Functor', () => {
        const myFunctor = Mapable.of(43);
        const mapedReturnValue = myFunctor.map(g);
        expect(
          mapedReturnValue instanceof Functor && myFunctor instanceof Functor,
        ).toBe(true);
      });
    });

    it("functor['fantasy-land/map'] should be the same as functor.map ", () => {
      expect(Mapable.of(41).map).toStrictEqual(
        Mapable.of(41)['fantasy-land/map'],
      );
    });
  /*
       Functor
      u['fantasy-land/map'](a => a) is equivalent to u (identity)
      u['fantasy-land/map'](x => f(g(x))) is equivalent to u['fantasy-land/map'](g)['fantasy-land/map'](f) (composition)

      fantasy-land/map method
      fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
      A value which has a Functor must provide a fantasy-land/map method. The fantasy-land/map method takes one argument:

      u['fantasy-land/map'](f)
      f must be a function,

      If f is not a function, the behaviour of fantasy-land/map is unspecified.
      f can return any value.
      No parts of f's return value should be checked.
      fantasy-land/map must return a value of the same Functor
   */
  });
  }
