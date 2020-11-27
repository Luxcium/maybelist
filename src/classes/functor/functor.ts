import type { FnAtoB } from '../../types';
import { IFunctor } from './types';

/*
~~=···~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~···= ~~
*/
class Functor<FVal = unknown, UVal = FVal> implements IFunctor<FVal> {
  // static |-···――――――――――――――――――――――――――――――――――――――――――――···-| of() |-···――― ~
  public static of<TVal, Tx = TVal>(value: Tx): Functor<TVal, Tx> {
    return new Functor<TVal, Tx>(value);
  }

  // protected |-···―――――――――――――――――――――――――――――――――――――――···-| _value |-···――― ~
  protected _value: UVal;

  // constructor |-···――――――――――――――――――――――――――――――――――···-| Functor() |-···――― ~
  protected constructor(value: UVal) {
    this._value = value;
    this['fantasy-land/map'] = this.map;
  }

  // get |-···―――――――――――――――――――――――――――――――――――――――――――――――···-| fork |-···――― ~
  public get fork(): UVal {
    return this._value;
  }

  // public |-···―――――――――――――――――――――――――――――――――――――――――···-| clone() |-···――― ~
  public clone(): UVal {
    return JSON.parse(JSON.stringify(this.fork));
  }

  public declare ['fantasy-land/map'];
  // public |-···―――――――――――――――――――――――――――――――――――――――――――···-| map() |-···――― ~
  public map<Rx>(fn: FnAtoB<FVal, Rx>) {
    return Functor.of<Rx>(fn(this._value as any));
  }
}
/*
~~=···~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~···= ~~
*/

export { Functor };
