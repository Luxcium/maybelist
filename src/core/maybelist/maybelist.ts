import { FnAtoB } from '../..';
import { Functor } from '../../classes/functor/functor';
import { IApply, IChain, IMonad } from '../../types';

interface IMaybelist<A = any> extends IChain<A>, IApply<A>, IMonad<A> {
  map<B = any>(fn: (val: A) => B): IMaybelist<B>;
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

export type { FromArray, IMaybelist, Unbox };

// , U extends Array<T> = T[]
// class Maybelist<T, extends Array<infer U> ? U : never>

/*
 ~~==~···~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~···~==~ ~
 //+ T is a type  of valut `T`.
 //+ Ts is a type of value `T[]`.
 //+ Tx is an incoming type similar to `T` but not directly related to `T`.
 //+ Rx is a resulting type similar to `T` but not directly related to `T`.
*/
class Maybelist<T, Ts extends Array<T> = T[]> {
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
  public static fromValueOf = <Tx>(value: Functor<Tx>): Maybelist<Tx> => {
    return Maybelist.of<Tx>(JSON.parse(JSON.stringify(value.fork)));
  };

  // protected |-···―――――――――――――――――――――――――――――――――――――――···-| _value |-···――― ~
  protected _value: Ts;

  // constructor |-···――――――――――――――――――――――――――――――――···-| Maybelist() |-···――― ~
  protected constructor(value: Ts) {
    this._value = value;
    this['fantasy-land/map'] = this.map;
    this['fantasy-land/ap'] = this.ap;
    this['fantasy-land/chain'] = this.chain;
  }

  // get |-···―――――――――――――――――――――――――――――――――――――――――――――――···-| fork |-···――― ~
  public get fork(): Ts {
    return this._value;
  }

  public clone(): Ts {
    return JSON.parse(JSON.stringify(this.fork));
  }

  public declare ['fantasy-land/map'];
  // public |-···―――――――――――――――――――――――――――――――――――――――――――···-| map() |-···――― ~
  public map<Rx>(fn: FnAtoB<T, Rx>): Maybelist<Rx> {
    return Maybelist.of<Rx>(this.fork.map(fn));
  }

  public declare ['fantasy-land/ap'];
  // public |-···――――――――――――――――――――――――――――――――――――――――――――···-| ap() |-···――― ~
  public ap<Rx>(functor: Functor<FnAtoB<T, Rx>>): Maybelist<Rx> {
    return functor.map((fn: FnAtoB<T, Rx>) => this.map<Rx>(x => fn(x))).fork;
  }

  public declare ['fantasy-land/chain'];
  // public |-···―――――――――――――――――――――――――――――――――――――――――···-| chain() |-···――― ~
  public chain<Rx>(fn: FnAtoB<T, Maybelist<Rx>>): Maybelist<Rx> {
    return Maybelist.of<Rx>(this.fork.flatMap<Rx>(x => fn(x).fork));
  }
}

/*
 ~~==~···~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~···~==~ ~
*/

export { Maybelist };
export default null;
