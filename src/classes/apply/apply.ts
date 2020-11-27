import type { FnAtoB } from '../../types';
import { Functor } from '../functor';
import type { IApply } from './types';

class Apply<AVal = unknown, UVal = AVal>
  extends Functor<AVal, UVal>
  implements IApply<AVal> {
  // static |-···――――――――――――――――――――――――――――――――――――――――――――···-| of() |-···――― ~
  public static of<TVal, Tx = TVal>(value: Tx): Apply<TVal, Tx> {
    return new Apply<TVal, Tx>(value);
  }

  public static fromValueOf<TVal>(value: Functor<TVal>): Apply<TVal> {
    return Apply.of<TVal>(JSON.parse(JSON.stringify(value.fork)));
  }

  protected constructor(value: UVal) {
    super(value);
    this['fantasy-land/map'] = this.map;
    this['fantasy-land/ap'] = this.ap;
  }

  public declare ['fantasy-land/map'];
  public map<R = unknown>(fn: (val: AVal) => R): Apply<R> {
    return Apply.of<R>(
      super.map<R>(x => fn(x)).fork,
    );
  }

  public declare ['fantasy-land/ap'];
  public ap<R = unknown>(functor: Functor<FnAtoB<AVal, R>>): Apply<R> {
    return functor.map<Apply<R>>((fn: (val: AVal) => R) =>
      this.map<R>(x => fn(x)),
    ).fork;
  }
}

export { Apply };
