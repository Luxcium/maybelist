import { BaseClass } from '../../classes';

/*
 ~~==~···~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~···~==~ ~
 //+ A is a type of value `A`.
 //+ Ax is a type similar to `A` but not directly related to `A`.
 //+ As is a type of value `A[]`.
 //+ B is the resulting type from a transform on `A`.
 //+ T is a type of value `T`.
 //+ Ts is a type of value `T[]`.
 //+ Rx is the resulting type from a transform on `T`.
 //+ Tx is an incoming type similar to `T` but not directly related to `T`.
*/
class Maybelist<T = unknown, Ts extends Array<T> = T[]> extends BaseClass<Ts> {
  // static |-···――――――――――――――――――――――――――――――――――――――――――――···-| of() |-···――― ~
  public static of<TVal = unknown, TVals extends Array<TVal> = TVal[]>(
    ...values: TVals | [TVals]
  ): Maybelist<TVal> {
    if (values.length === 1) {
      const value = values[0];
      if (Array.isArray(value)) {
        // super(value);
        // return this;
        return new Maybelist<TVal>(value);
      }
    }
    const value = values as TVal[];
    return new Maybelist<TVal>(value);

    // super(_value);
    // return this;
  }
  // constructor |-···――――――――――――――――――――――――――――――――···-| Maybelist() |-···――― ~
  protected constructor(value: Ts) {
    super(value);
  }

  // public fMap<R>(fn: (val: Ts) => R): Monad<R> {
  //   return Monad.of<R>(
  //     super.fMap<R>(x => fn(x)).fork,
  //   );
  // }

  // public fMap<R = any, Rs extends Array<R> = R[]>(
  //   fn: (val: Ts) => Rs,
  // ): Maybelist<R, Rs> {
  //   return new Maybelist(super.fMap<Rs>(fn).fork);
  // }

  // public declare ap;
  // public declare chain;
}

/*
 ~~==~···~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~···~==~ ~
*/

export { Maybelist };
export default null;

// implements IMaybelist<T, Ts>
//   // static |-···――――――――――――――――――――――――――――――――――――――――――――···-| of() |-···――― ~
// public static of = <Tx>(...values: Tx[] | [Tx[]]): MaybelistBaseClass<Tx> => {
//   return new MaybelistBaseClass<Tx>(...values);
// };
// // static |-···―――――――――――――――――――――――――――――――――――···-| fromValueOf() |-···――― ~
// public static fromValueOf = <Tx>(
//   value: Functor<Tx>,
// ): MaybelistBaseClass<Tx> => {
//   return MaybelistBaseClass.of<Tx>(JSON.parse(JSON.stringify(value.fork)));
// };
// // static |-···――――――――――――――――――――――――――――――――――――――――――――···-| of() |-···――― ~
// public static of = <Tx>(...values: Tx[] | [Tx[]]): Maybelist<Tx> => {
//   if (values.length === 1) {
//     const value = values[0];
//     if (Array.isArray(value)) {
//       return new Maybelist<Tx>([...value]);
//     }
//   }
//   return new Maybelist<Tx>([...(values as Tx[])]);
// };
// // static |-···―――――――――――――――――――――――――――――――――――···-| fromValueOf() |-···――― ~
// public static fromValueOf = <Tx>(
//   value: Functor<Tx> | Maybelist<Tx>,
// ): Maybelist<Tx> => {
//   return Maybelist.of<Tx>(JSON.parse(JSON.stringify(value.fork)));
// };

// // public declare ['fantasy-land/map'];
// // public |-···―――――――――――――――――――――――――――――――――――――――――――···-| map() |-···――― ~
// public fMap<Rx>(fn: FnAtoB<T, Rx>) {
//   return Maybelist.of<Rx>(this.fork.map(fn));
// }
// // public declare ['fantasy-land/ap'];
// // public |-···――――――――――――――――――――――――――――――――――――――――――――···-| ap() |-···――― ~
// public ap<Rx>(functor: Functor<FnAtoB<T, Rx>>) {
//   return functor.fMap((fn: FnAtoB<T, Rx>) => this.fMap<Rx>(x => fn(x))).fork;
// }
// // public declare ['fantasy-land/chain'];
// // public |-···―――――――――――――――――――――――――――――――――――――――――···-| chain() |-···――― ~
// public chain<Rx>(fn: FnAtoB<T, Maybelist<Rx>>) {
//   return Maybelist.of<Rx>(this.fork.flatMap<Rx>(x => fn(x).fork));
// }
