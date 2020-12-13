import { FnAtoB } from '../..';
import { BaseClass } from '..';
import { IClone, IFork } from './types';

class Functor<FVal = unknown>
  extends BaseClass<FVal>
  implements IFork<FVal>, IClone<FVal> {
  static of<TVal>(value: TVal) {
    return new Functor(value);
  }
  // public ['fantasy-land/map'] = this.fMap;
  // public |-···―――――――――――――――――――――――――――――――――――――――――――···-| map() |-···――― ~
  public fMap<R>(fn: FnAtoB<FVal, R>) {
    return new Functor(fn(this.fork));
  }
}

export { Functor };
