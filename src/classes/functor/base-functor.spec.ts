import { MapableConstructor } from '../../util/types';
import { BaseFunctor } from './base-functor';

const VALUE = 'VALUE';

/** addTen function */
const f = function addTen(x: number): number {
  return x + 10;
};

/** getStringLength function */
const g = function getStringLength(x: string): number {
  return x.length;
};

export function fantasyBaseMapTest(Mapable: MapableConstructor) {
  describe('Our BaseFunctor (Mapable) must comply with Fantasy Land Specification of a Functor.', () => {
    describe("A Functor in Fantasy Land Specification is mapable using the ['fantasy-land/map'] method: `fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b`", () => {
      describe("1. Identity: `u['fantasy-land/map'](a => a)` is equivalent to `u` (identity)", () => {
        it("[1/2] where `u = new Mapable('VALUE')`: `u['fantasy-land/map'](a => a)` must be  strictly equal to `u`", () => {
          const u = new Mapable('VALUE');
          expect(u['fantasy-land/map']((a: any) => a)).toStrictEqual(u);
        }, 4);

        it("[2/2] `new Mapable('VALUE')['fantasy-land/map'](a => a)` must be strictly equal to `new Mapable('VALUE')`", () => {
          expect(
            new Mapable('VALUE')['fantasy-land/map']((a: any) => a),
          ).toStrictEqual(new Mapable('VALUE'));
        }, 4);
      });

      describe("2. Composition: `u['fantasy-land/map'](x => f(g(x)))` is equivalent to `u['fantasy-land/map'](g)['fantasy-land/map'](f)` (composition)", () => {
        it("[1/2] where `u = new Mapable(VALUE)`: `u['fantasy-land/map'](x => f(g(x)))` must be 'Strictly Equal' to `u['fantasy-land/map'](g)['fantasy-land/map'](f)`", () => {
          const u = new Mapable(VALUE);
          expect(u['fantasy-land/map']((x: any) => f(g(x)))).toStrictEqual(
            u['fantasy-land/map'](g)['fantasy-land/map'](f),
          );
        });
        it("[2/2] `new Mapable(VALUE)['fantasy-land/map'](x => f(g(x)))` must be 'Strictly Equal' to `new Mapable(VALUE)['fantasy-land/map'](g)['fantasy-land/map'](f)`", () => {
          expect(
            new Mapable(VALUE)['fantasy-land/map']((x: any) => f(g(x))),
          ).toStrictEqual(
            new Mapable(VALUE)['fantasy-land/map'](g)['fantasy-land/map'](f),
          );
        });
      });
      describe('A value which has a Functor must provide a fantasy-land/map method. The fantasy-land/map method takes one argument `f`.', () => {});
      //
      describe("Argument `f`: `u['fantasy-land/map'](f)`.", () => {
        describe('1. `f` must be a function.,', () => {
          describe('i. If `f` is not a function, the behaviour of `fantasy-land/map` is unspecified.', () => {
            it.todo('Has an unspecified behaviour when `f` is not a function.');
          });
          describe('ii. `f` can return any value.', () => {
            it.todo('Can return any value.');
          });
          describe("iii. No parts of `f`'s return value should be checked.", () => {
            it.todo('The return value of `f` should not be checked.');
          });
        });

        describe("2. `fantasy-land/map` must return a value of the same 'Functor'", () => {
          it("[1/3] Where mapable = new Mapable(41): mapable['fantasy-land/map'] must return a value of the same Functor as Mapable", () => {
            const mapable = new Mapable(41);
            const mapableMapReturnValue = mapable['fantasy-land/map'](
              (x: any) => x * 2,
            );
            expect(
              mapableMapReturnValue instanceof Mapable &&
                mapable instanceof Mapable,
            ).toBe(true);
          });
          it("[2/3] Where mapable = new Mapable(43): mapable['fantasy-land/map'] must return a value of our BaseFunctor type", () => {
            const mapable = new Mapable(43);
            const mapableMapReturnValue = mapable['fantasy-land/map'](
              (a: any) => a,
            );
            expect(mapableMapReturnValue instanceof BaseFunctor).toBe(true);
          });

          it("[3/3] Whre mapable = new Mapable('VALUE'): mapable must be of the BaseFunctor type", () => {
            const mapable = new Mapable('VALUE');
            expect(mapable instanceof BaseFunctor).toBe(true);
          });
        });
      });
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
