import { Functor } from '.';

describe('Functor Class', () => {
  it('should implement specs & tests for our Functor Class', () => {
    expect(Functor);
  });
});

export default null;

// import { Functor } from '../..';
// import { fatasyOfTest } from './applicative.spec';

// type Of = <TVal>(value: TVal) => Functor<TVal>;
// // type FromValueOf = <TVal>(value: Functor<TVal>) => Functor<TVal>;

// interface StaticApplicativeFunctor extends Function {
//   of: Of;
//   // fromValueOf: FromValueOf;
// }

// function f(x: number) {
//   // mutiplyByTwo
//   return 2 * x;
// }
// function g(x: number) {
//   // addTen
//   return x + 10;
// }

// export function fantasyMapTest(MapableApplicative: StaticApplicativeFunctor) {
//   describe('it must be an applicative in  our implementation', () => {
//     describe('Have a `of` Static Method', () => {
//       fatasyOfTest(MapableApplicative);
//     });
//   });
//   describe('Functor (Mapable): (`fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b`)', () => {
//     describe("1. Identity u['fantasy-land/map'](a => a) is equivalent to u", () => {
//       it("[1/2] MapableApplicative.of('VALUE').map(a => a) is strictly equal to MapableApplicative.of('VALUE')", () => {
//         expect(MapableApplicative.of('VALUE').map(a => a)).toStrictEqual(
//           MapableApplicative.of('VALUE'),
//         );
//       }, 4);

//       it('[2/2] mapable.map(a => a) should be strictly equal to mapable', () => {
//         const mapable = MapableApplicative.of<number>(41);
//         expect(mapable.map(a => a)).toStrictEqual(mapable);
//       }, 4);
//     });

//     describe("2. Composition u['fantasy-land/map'](x => f(g(x))) is equivalent to u['fantasy-land/map'](g)['fantasy-land/map'](f) ", () => {
//       it('[1/3] MapableApplicative.of(u).map(x => f(g(x))) must compose and be strictly equal to MapableApplicative.of(u).map(g).map(f)', () => {
//         expect(MapableApplicative.of(43).map(x => f(g(x)))).toStrictEqual(
//           MapableApplicative.of(43).map(g).map(f),
//         );
//       });
//       // u['fantasy-land/map'](x => f(g(x))) is equivalent to u['fantasy-land/map'](g)['fantasy-land/map'](f)
//       it("[2/3] must compose u['fantasy-land/map'](x => f(g(x))) is equivalent to u['fantasy-land/map'](g)['fantasy-land/map'](f)", () => {
//         const mapable = MapableApplicative.of(43);
//         expect(mapable.map(x => f(g(x)))).toStrictEqual(mapable.map(g).map(f));
//       });
//     });

//     describe("argument `f`: (`u['fantasy-land/map'](f)`)", () => {
//       describe('1. `f` must be a function,', () => {
//         describe('i. If f is not a function, the behaviour of fantasy-land/map is unspecified.', () => {
//           it.todo('is unspecified.');
//         });
//         describe('ii. f can return any value.', () => {
//           it.todo('return any value.');
//         });
//         describe('iii. No parts of `f`´s return value should be checked.', () => {
//           it.todo('return value should not be checked.');
//         });
//       });

//       describe('2. fantasy-land/map must return a value of the same Functor', () => {
//         it('[1/3] mapable.map must return a value of the same Functor as Mapable', () => {
//           const mapable = MapableApplicative.of(41);
//           const mapableMapReturnValue = mapable.map(a => a);
//           expect(
//             mapableMapReturnValue instanceof MapableApplicative &&
//               mapable instanceof MapableApplicative,
//           ).toBe(true);
//         });
//         it('[2/3] mapable.map must return a value of the Functor type', () => {
//           const mapable = MapableApplicative.of(41);
//           const mapableMapReturnValue = mapable.map(a => a);
//           expect(mapableMapReturnValue instanceof Functor).toBe(true);
//         });

//         it('[3/3] mapable must be of the Functor type', () => {
//           const mapable = MapableApplicative.of('VALUE');
//           expect(mapable instanceof Functor).toBe(true);
//         });
//       });
//     });
//   });

//   // describe('map must be Fantasy Land compliant with Functor specification', () => {
//   //   describe("Identity: u['fantasy-land/map'](a => a) is equivalent to u (identity)", () => {});
//   //   describe("u['fantasy-land/map'](x => f(g(x))) is equivalent to u['fantasy-land/map'](g)['fantasy-land/map'](f) (composition)", () => {});

//   //   it("functor['fantasy-land/map'] should be the same as functor.map ", () => {
//   //     expect(MapableApplicative.of(41).map).toStrictEqual(
//   //       MapableApplicative.of(41)['fantasy-land/map'],
//   //     );
//   // });
//   //   });
//   /*
//        Functor
//       u['fantasy-land/map'](a => a) is equivalent to u (identity)
//       u['fantasy-land/map'](x => f(g(x))) is equivalent to u['fantasy-land/map'](g)['fantasy-land/map'](f) (composition)

//       fantasy-land/map method
//       fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
//       A value which has a Functor must provide a fantasy-land/map method. The fantasy-land/map method takes one argument:

//       u['fantasy-land/map'](f)
//       f must be a function,

//       If f is not a function, the behaviour of fantasy-land/map is unspecified.
//       f can return any value.
//       No parts of f's return value should be checked.
//       fantasy-land/map must return a value of the same Functor
//    */
// }
