import { FnAtoB } from '../..';
import { Functor } from '../../classes';

class Maybelist<T = unknown, U extends Array<T> = T[]> {
  // static ======================================================-| of() |-====
  public static of<TVal>(...values: TVal[] | [TVal[]]): Maybelist<TVal> {
    if (values.length === 1) {
      const value = values[0];
      if (Array.isArray(value)) {
        return new Maybelist<TVal>([...value]);
      }
    }
    return new Maybelist<TVal>([...(values as TVal[])]);
  }
  // static =============================================-| fromValueOf() |-====
  public static fromValueOf<TVal>(value: Functor<TVal>): Maybelist<TVal> {
    return Maybelist.of<TVal>(JSON.parse(JSON.stringify(value.fork)));
  }
  // protected =================================================-| _value |-====
  protected _value: U;

  // constructor ==========================================-| Maybelist() |-====
  public constructor(value: U) {
    this._value = value;
    this['fantasy-land/map'] = this.map;
    this['fantasy-land/ap'] = this.ap;
    this['fantasy-land/chain'] = this.chain;
  }
  // get =========================================================-| fork |-====
  public get fork(): U {
    return this._value;
  }

  public declare ['fantasy-land/map'];
  // public =====================================================-| map() |-====
  public map(fx: FnAtoB<T, any>) {
    return Maybelist.of(this._value.map(fx));
  }

  public declare ['fantasy-land/ap'];
  // public ======================================================-| ap() |-====
  public ap(functor: Functor<FnAtoB<T, any>>) /*: Maybelist<any> */ {
    return functor.map<Maybelist<any>>((fn: FnAtoB<T, any>) => this.map(fn))
      .fork;
  }

  public declare ['fantasy-land/chain'];
  // public ===================================================-| chain() |-====
  public chain(fn: FnAtoB<T, any>) {
    return Maybelist.of(this.map(fn).fork).fork;
  }
}

export { Maybelist };
export default null;
