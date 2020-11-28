import { FnAtoB } from '../../..';
import { IBaseFunctor } from './types';

/*
~~=···~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~···= ~~
*/
class BaseFunctor<BFVal = unknown> implements IBaseFunctor<BFVal> {
  // constructor |-···――――――――――――――――――――――――――――――――――···-| Functor() |-···――― ~
  public constructor(protected _value: BFVal) {}

  public ['fantasy-land/map'] = this.fMap;
  // public |-···―――――――――――――――――――――――――――――――――――――――――――···-| map() |-···――― ~
  public fMap<R>(fn: FnAtoB<BFVal, R>) {
    return new BaseFunctor(fn(this._value));
  }
}

export { BaseFunctor };
/*
~~=···~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~···= ~~
*/

// // static |-···――――――――――――――――――――――――――――――――――――――――――――···-| of() |-···――― ~
// public static of<TVal, Tx = TVal>(value: Tx): Functor<TVal, Tx> {
//   return new Functor<TVal, Tx>(value);
// }
