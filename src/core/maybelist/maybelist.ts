import { Functor, Monad } from '../../classes';
import { Kind, KindType } from '../../classes/base/base';

const MaybelistKind: KindType = new Kind('MAYBELIST');

/*
~~===~···~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~···~=== ~~
*/
class Maybelist<
  Val = unknown,
  MLVal extends Array<Val> = Val[]
> extends Monad<MLVal> {
  // static |-···――――――――――――――――――――――――――――――――――――――···-| fromTVal() |-···――― ~
  public static of<TVal>(...values: TVal[] | [TVal[]]) {
    if (values.length === 1) {
      const value = values[0];
      if (Array.isArray(value)) {
        return new Maybelist<TVal>(value as TVal[], null);
      }
    }
    return new Maybelist<TVal>(values as TVal[], null);
  }

  public static fromValueOf<xTVal>(value: Functor<xTVal[]>): Maybelist<xTVal> {
    return Maybelist.of<xTVal>(
      (Monad.from<xTVal[]>(value.clone).fork as unknown) as xTVal,
    );
  }

  // constructor |-···――――――――――――――――――――――――――――――――···-| Maybelist() |-···――― ~
  protected constructor(
    maybelistValue: MLVal,
    KIND?: KindType | string | null,
  ) {
    super(maybelistValue as MLVal, MaybelistKind);
    super._addKINDS(KIND);
    return this;
  }
}

/*
~~===~···~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~···~=== ~~
*/

export { Maybelist, MaybelistKind };

const ML = Maybelist.from([45]);
void ML;

export default Maybelist;

// void new Maybelist([43])
//  // static |-···――――――――――――――――――――――――――――――――――――――――――――···-| of() |-···――― ~
//   public static of<TVal = unknown, TVals extends Array<TVal> = TVal[]>(
//     ...values: TVals | [TVals]
//   ): Maybelist<TVal> {
//     if (values.length === 1) {
//       const value = values[0];
//       if (Array.isArray(value)) {
//         // super(value);
//         // return this;
//         return new Maybelist<TVal>(value);
//       }
//     }
//     const value = values as TVal[];
//     return new Maybelist<TVal>(value);

//     // super(_value);
//     // return this;
//   }

//   // public fMap<R>(fn: (val: Ts) => R): Monad<R> {
//   //   return Monad.of<R>(
//   //     super.fMap<R>(x => fn(x)).fork,
//   //   );
//   // }

//   // public fMap<R = any, Rs extends Array<R> = R[]>(
//   //   fn: (val: Ts) => Rs,
//   // ): Maybelist<R, Rs> {
//   //   return new Maybelist(super.fMap<Rs>(fn).fork);
//   // }

//   // public declare ap;
//   // public declare chain;

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
