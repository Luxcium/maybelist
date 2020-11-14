import { Functor } from '..';

describe('Functor Class', () => {
  describe('map must be Fantasy Land compliant with Functor specification', () => {
    describe("Identity: u['fantasy-land/map'](a => a) is equivalent to u (identity)", () => {
      it('[1/3] Functor.of(u) should be equivalent to u', () => {
        expect(Functor.of(41).map(a => a).fork).toBe(41);
      });

      it('[2/3] Functor.of(u).map(a => a) should be strictly equal to Functor.of(u)', () => {
        expect(Functor.of(41).map(a => a)).toStrictEqual(Functor.of(41));
      });

      it('[3/3] mySameFunctor.map(a => a) should be strictly equal to mySameFunctor', () => {
        const mySameFunctor = Functor.of<number>(41);
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
        expect(Functor.of(43).map(x => f(g(x)))).toStrictEqual(
          Functor.of(43).map(g).map(f),
        );
      });

      it("[2/3] should compose u['fantasy-land/map'](x => f(g(x))) is equivalent to u['fantasy-land/map'](g)['fantasy-land/map'](f)", () => {
        const mySameFunctor = Functor.of(43);
        expect(mySameFunctor.map(x => f(g(x)))).toStrictEqual(
          mySameFunctor.map(g).map(f),
        );
      });

      it('[3/3] fantasy-land/map must return a value of the same Functor', () => {
        const myFunctor = Functor.of(43);
        const mapedReturnValue = myFunctor.map(g);
        expect(
          mapedReturnValue instanceof Functor && myFunctor instanceof Functor,
        ).toBe(true);
      });
    });

    it('should be the same ', () => {
      expect(Functor.of(41).map).toStrictEqual(
        Functor.of(41)['fantasy-land/map'],
      );
    });
  });

  /*
  Functor
   u['fantasy-land/map'](a => a) is equivalent to u (identity)
   u['fantasy-land/map'](x => f(g(x))) is equivalent to u['fantasy-land/map'](g)['fantasy-land/map'](f) (composition)

   fantasy-land/map method
   fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
   A value which has a Functor must provide a fantasy-land/map method. The fantasy-   land/map method takes one argument:

   u['fantasy-land/map'](fn)
   fn must be a function,

   If fn is not a function, the behaviour of fantasy-land/map is unspecified.
   fn can return any value.
   No parts of fn's return value R should be checked.
   fantasy-land/map must return a value of the same Functor

 */
  // });
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
