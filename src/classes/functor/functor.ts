import { FnAtoB } from '../..';
import { BaseFunctor } from './base-functor';
import { IClone, IFork } from './types';

class Functor<FVal = unknown>
  extends BaseFunctor<FVal>
  implements IFork<FVal>, IClone<FVal> {
  // get |-···―――――――――――――――――――――――――――――――――――――――――――――――···-| fork |-···――― ~
  public get fork(): FVal {
    return this._value;
  }

  // public |-···―――――――――――――――――――――――――――――――――――――――――···-| clone() |-···――― ~
  public clone(): FVal {
    return JSON.parse(JSON.stringify(this.fork));
  }

  public ['fantasy-land/map'] = this.fMap;
  // public |-···―――――――――――――――――――――――――――――――――――――――――――···-| map() |-···――― ~
  public fMap<R>(fn: FnAtoB<FVal, R>) {
    return new Functor(fn(this.fork));
  }
}

export { Functor };
