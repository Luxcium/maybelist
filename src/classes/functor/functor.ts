import type { FnAtoB } from '../../types';
import { IFunctor } from './types';

/*
~~=···~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~···= ~~
*/
class Functor<FVal = unknown> implements IFunctor<FVal> {
  // static |-···――――――――――――――――――――――――――――――――――――――――――――···-| of() |-···――― ~
  public static of<TVal>(value: TVal): Functor<TVal> {
    return new Functor<TVal>(value);
  }

  // protected |-···―――――――――――――――――――――――――――――――――――――――···-| _value |-···――― ~
  protected _value: FVal;

  // constructor |-···――――――――――――――――――――――――――――――――――···-| Functor() |-···――― ~
  protected constructor(value: FVal) {
    this._value = value;
    this['fantasy-land/map'] = this.map;
  }

  // get |-···―――――――――――――――――――――――――――――――――――――――――――――――···-| fork |-···――― ~
  public get fork(): FVal {
    return this._value;
  }

  public declare ['fantasy-land/map'];
  // public |-···―――――――――――――――――――――――――――――――――――――――――――···-| map() |-···――― ~
  public map<R>(fn: FnAtoB<FVal, R>) {
    return Functor.of<R>(fn(this._value));
  }
}
/*
~~=···~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~···= ~~
*/

export { Functor };
