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
