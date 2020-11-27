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
*/
class Maybelist<T, Ts extends Array<T> = T[]> {
  // static |-···――――――――――――――――――――――――――――――――――――――――――――···-| of() |-···――― ~
  public static of = <T>(...values: T[] | [T[]]) => {
    if (values.length === 1) {
      const value = values[0];
      if (Array.isArray(value)) {
        return new Maybelist<T>([...value]);
      }
    }

    return new Maybelist<T>([...(values as T[])]);
  };

  // public static of<TVal>(value: TVal): Maybelist<TVal> {
  //   return new Maybelist<TVal>(value);
  // }

  // static |-···―――――――――――――――――――――――――――――――――――···-| fromValueOf() |-···――― ~
  public static fromValueOf = <TVal>(value: Functor<TVal>) => {
    return Maybelist.of<TVal>(JSON.parse(JSON.stringify(value.fork)));
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

  public declare ['fantasy-land/map'];
  // public |-···―――――――――――――――――――――――――――――――――――――――――――···-| map() |-···――― ~
  public map<R>(fn: (val: Ts) => R) {
    return Maybelist.of<R>(fn(this._value));
  }

  public declare ['fantasy-land/ap'];
  // public |-···――――――――――――――――――――――――――――――――――――――――――――···-| ap() |-···――― ~
  public ap<R>(functor: Functor<FnAtoB<Ts, R>>) {
    return functor.map((fn: FnAtoB<Ts, R>) => this.map<R>(x => fn(x))).fork;
  }

  public declare ['fantasy-land/chain'];
  // public |-···―――――――――――――――――――――――――――――――――――――――――···-| chain() |-···――― ~
  public chain<R>(fn: FnAtoB<Ts, Maybelist<R>>) {
    return Maybelist.of<Maybelist<R>>(this.map(x => fn(x)).fork).fork;
  }
}

/*
 ~~==~···~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~···~==~ ~
*/

export { Maybelist };
export default null;
