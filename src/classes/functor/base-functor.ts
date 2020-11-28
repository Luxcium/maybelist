import type { FnAtoB } from '../../types';
import { IFunctor } from './types';

/*
~~=···~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~···= ~~
*/
class BaseFunctor<FVal = unknown> implements IFunctor<FVal> {
  // constructor |-···――――――――――――――――――――――――――――――――――···-| Functor() |-···――― ~
  public constructor(protected _value: FVal) {
    this['fantasy-land/map'] = this.fMap;
  }

  public declare ['fantasy-land/map'];
  // public |-···―――――――――――――――――――――――――――――――――――――――――――···-| map() |-···――― ~
  public fMap<R>(fn: FnAtoB<FVal, R>) {
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
