import { Monad } from '../../src';

describe('No Test Implemented', () => {
  describe('map must be Fantasy Land compliant with Monad specification', () => {
    describe("Identity: u['fantasy-land/map'](a => a) is equivalent to u (identity)", () => {
      it('[1/3] Monad.of(u) should be equivalent to u', () => {
        expect(Monad.of(41).map(a => a).fork).toBe(41);
      });

      it('[2/3] Monad.of(u).map(a => a) should be strictly equal to Monad.of(u)', () => {
        expect(Monad.of(41).map(a => a)).toStrictEqual(Monad.of(41));
      });

      it('[3/3] mySameMonad.map(a => a) should be strictly equal to mySameMonad', () => {
        const mySameMonad = Monad.of<number>(41);
        expect(mySameMonad.map(a => a)).toStrictEqual(mySameMonad);
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
      it("[1/3] Monad.of(u).map(x => f(g(x))) should compose and be strictly equal to  Monad.of(u).map(g).map(f) u['fantasy-land/map'](x => f(g(x))) is equivalent to u['fantasy-land/map'](g)['fantasy-land/map'](f)", () => {
        expect(Monad.of(43).map(x => f(g(x)))).toStrictEqual(
          Monad.of(43).map(g).map(f),
        );
      });

      it("[2/3] should compose u['fantasy-land/map'](x => f(g(x))) is equivalent to u['fantasy-land/map'](g)['fantasy-land/map'](f)", () => {
        const mySameMonad = Monad.of(43);
        expect(mySameMonad.map(x => f(g(x)))).toStrictEqual(
          mySameMonad.map(g).map(f),
        );
      });

      it('[3/3] fantasy-land/map must return a value of the same Monad', () => {
        const myMonad = Monad.of(43);
        const mapedReturnValue = myMonad.map(g);
        expect(
          mapedReturnValue instanceof Monad && myMonad instanceof Monad,
        ).toBe(true);
      });
    });

    it("Monad['fantasy-land/map'] should be the same as Monad.map ", () => {
      expect(Monad.of(41).map).toStrictEqual(Monad.of(41)['fantasy-land/map']);
    });
  });

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

  it('should implement at leat one test', () => {
    expect(Monad);
  });

  const myMonad = Monad.of('value');
  const myFnMonad = Monad.of((val: string) => val.length);

  it('should  myMonad.ap', () => {
    expect(typeof myMonad.ap(myFnMonad).fork).toBe('number');
  });

  it('should  myMonad.ap', () => {
    expect(typeof myMonad.ap).toBe('function');
  });

  it('should  myMonad.chain', () => {
    expect(
      typeof myMonad.chain((val: string) => Monad.of(val.length)).fork,
    ).toBe('number');
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

  describe('Static Methodes', () => {
    it('should produce a monad fromValueOf ', () => {
      expect(typeof Monad.fromValueOf(myMonad).fork).toBe('string');
    });
  });
});
