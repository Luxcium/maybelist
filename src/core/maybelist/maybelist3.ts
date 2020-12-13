import { FnAtoB } from '../..';
import { BaseClass, Functor } from '../../classes';
import { IMaybelist } from './types';

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
class Maybelist<T = unknown, Ts extends Array<T> = T[]>
  extends BaseClass<Ts>
  implements IMaybelist<T, Ts> {
  // static |-···――――――――――――――――――――――――――――――――――――――――――――···-| of() |-···――― ~
  public static of = <Tx>(...values: Tx[] | [Tx[]]): Maybelist<Tx> => {
    if (values.length === 1) {
      const value = values[0];
      if (Array.isArray(value)) {
        return new Maybelist<Tx>([...value]);
      }
    }

    return new Maybelist<Tx>([...(values as Tx[])]);
  };

  // static |-···―――――――――――――――――――――――――――――――――――···-| fromValueOf() |-···――― ~
  public static fromValueOf = <T>(
    value: Functor<T[]> | Maybelist<T>,
  ): Maybelist<T> => {
    return Maybelist.of<T>(value.clone);
  };

  // constructor |-···――――――――――――――――――――――――――――――――···-| Maybelist() |-···――― ~
  protected constructor(value: Ts) {
    super(value);
    // this._value = value;
  }

  // // private |-···―――――――――――――――――――――――――――――――――――――···-| arrayMap() |-···――― ~
  // private arrayMap<R>(
  //   fn: <TVal>(value: TVal, index: number, array: TVal[]) => R,
  //   thisArg?: any,
  // ): R[] {
  //   return this.fork.map(fn, thisArg);
  // }

  // // private |-···―――――――――――――――――――――――――――――――――···-| arrayflatMap() |-···――― ~
  // private arrayflatMap<R>(
  //   callback: <TVal>(value: TVal, index: number, array: TVal[]) => R,
  //   thisArg?: any,
  // ): R[] {
  //   return this.fork.flatMap(callback, thisArg);
  // }

  // // public |-···―――――――――――――――――――――――――――――――――――――――――――···-| map() |-···――― ~
  // public map<Rx>(fn: <Z>(value: Z, index: number, array: Z[]) => Rx) {
  //   void this.arrayflatMap;
  //   return Maybelist.of<Rx>(this.arrayMap(fn));
  // }

  // // public |-···―――――――――――――――――――――――――――――――――――――――――――···-| map() |-···――― ~
  // public flatMap<Rx>(fn: <Z>(value: Z, index: number, array: Z[]) => Rx) {
  //   return Maybelist.of<Rx>(this.arrayflatMap(fn));
  // }

  // public |-···―――――――――――――――――――――――――――――――――――――――――――···-| map() |-···――― ~
  public fMap<Rx>(fn: FnAtoB<T, Rx>) {
    return Maybelist.of<Rx>(this.fork.map(fn));
  }

  // public |-···――――――――――――――――――――――――――――――――――――――――――――···-| ap() |-···――― ~
  public ap<Rx>(functor: Functor<FnAtoB<T, Rx>>) {
    return functor.fMap((fn: FnAtoB<T, Rx>) => this.fMap<Rx>(x => fn(x))).fork;
  }
  // public |-···―――――――――――――――――――――――――――――――――――――――――···-| chain() |-···――― ~
  public chain<Rx>(fn: FnAtoB<T, IMaybelist<Rx>>): Maybelist<Rx, Rx[]> {
    return Maybelist.of<Rx>(this.fork.flatMap<Rx>(x => fn(x).fork));
  }
}

/*
 ~~==~···~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~···~==~ ~
*/

export { Maybelist };
export default null;

// // protected |-···―――――――――――――――――――――――――――――――――――――――···-| _value |-···――― ~
// protected _value: Ts;

// // get |-···―――――――――――――――――――――――――――――――――――――――――――――――···-| fork |-···――― ~
// public get fork(): Ts {
//   return this._value;
// }

// // public |-···―――――――――――――――――――――――――――――――――――――――――···-| clone() |-···――― ~
// public get clone(): Ts {
//   return JSON.parse(JSON.stringify(this.fork));
// }
