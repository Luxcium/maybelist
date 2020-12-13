import { FnAtoB } from '../../src';
import { BaseClass } from '../../src/classes';
import { IBaseFunctor } from './types';

/*
~~=···~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~···= ~~
*/

/** @deprecated */
class BaseFunctor<BFVal = unknown>
  extends BaseClass<BFVal>
  implements IBaseFunctor<BFVal> {
  public ['fantasy-land/map'] = this.fMap;
  // public |-···―――――――――――――――――――――――――――――――――――――――――――···-| map() |-···――― ~
  public fMap<R>(fn: FnAtoB<BFVal, R>) {
    return new BaseFunctor(fn(this.fork));
  }
}

export { BaseFunctor };
/*
~~=···~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~···= ~~
*/
