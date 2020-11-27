import { Functor } from '../../classes/functor/functor';
import { FnAtoB, FunctorType, IApply, IChain, IFMap, IFork } from '../../types';

interface IMonad<A = any> extends IChain<A>, IApply<A>, IFMap<A> {
  map<B = any>(fn: (val: A) => B): IMonad<B>;
  ap<B = any>(functor: Functor<FnAtoB<A, B>>): IMonad<B>;
  chain<B = any>(fn: FnAtoB<A, IMonad<B>>): IMonad<B>;
}

interface IClone<Ax = unknown> {
  clone(): Ax;
}
interface IMaybelist<A, As extends Array<A> = A[]>
  extends IApply<A>,
    IChain<A>,
    IFMap<A>,
    IFork<As>,
    IClone<As>,
    FunctorType<A, As> {
  map<B = any>(fn: FnAtoB<A, B>): IMaybelist<B>;
  ap<B = any>(functor: Functor<FnAtoB<A, B>>): IMaybelist<B>;
  chain<B = any>(fn: FnAtoB<A, IMaybelist<B>>): IMaybelist<B>;
}

// ――――――――

type UnboxArray<Ts> = Ts extends Array<infer T> ? T : never;

// usages
type Unbox<Ts> = UnboxArray<Ts>; // T
type Strings = string[];
const something: Strings = [];
type FromArray = UnboxArray<typeof something>; // string

// ――――――――

export type { FromArray, IClone, IMaybelist, IMonad, Unbox };

// , U extends Array<T> = T[]
// class Maybelist<T, extends Array<infer U> ? U : never>

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
class Maybelist<T, Ts extends Array<T> = T[]>
  // extends Functor<T, Ts>
  implements
    IMaybelist<T>,
    IApply<T>,
    IChain<T>,
    IFMap<T>,
    IFork<Ts>,
    FunctorType<T, Ts> {
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
  public static fromValueOf = <Tx>(
    value: Functor<Tx> | Maybelist<Tx>,
  ): Maybelist<Tx> => {
    return Maybelist.of<Tx>(JSON.parse(JSON.stringify(value.fork)));
  };

  // protected |-···―――――――――――――――――――――――――――――――――――――――···-| _value |-···――― ~
  protected _value: Ts;

  // constructor |-···――――――――――――――――――――――――――――――――···-| Maybelist() |-···――― ~
  protected constructor(value: Ts) {
    // super(value);
    this._value = value;
    // this['fantasy-land/map'] = this.map;
    this['fantasy-land/ap'] = this.ap;
    this['fantasy-land/chain'] = this.chain;
  }

  // get |-···―――――――――――――――――――――――――――――――――――――――――――――――···-| fork |-···――― ~
  public get fork(): Ts {
    return this._value;
  }

  // public |-···―――――――――――――――――――――――――――――――――――――――――···-| clone() |-···――― ~
  public clone(): Ts {
    return JSON.parse(JSON.stringify(this.fork));
  }

  // public declare ['fantasy-land/map'];
  // public |-···―――――――――――――――――――――――――――――――――――――――――――···-| map() |-···――― ~
  public map<Rx>(fn: FnAtoB<T, Rx>): Maybelist<Rx> {
    return Maybelist.of<Rx>(this.fork.map(fn));
  }

  public declare ['fantasy-land/ap'];
  // public |-···――――――――――――――――――――――――――――――――――――――――――――···-| ap() |-···――― ~
  public ap<Rx>(functor: Functor<FnAtoB<T, Rx>>): Maybelist<Rx, Rx[]> {
    return functor.map((fn: FnAtoB<T, Rx>) => this.map<Rx>(x => fn(x))).fork;
  }

  public declare ['fantasy-land/chain'];
  // public |-···―――――――――――――――――――――――――――――――――――――――――···-| chain() |-···――― ~
  public chain<Rx>(fn: FnAtoB<T, Maybelist<Rx>>): Maybelist<Rx, Rx[]> {
    return Maybelist.of<Rx>(this.fork.flatMap<Rx>(x => fn(x).fork));
  }
}

/*
 ~~==~···~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~···~==~ ~
*/

export { Maybelist };
export default null;
