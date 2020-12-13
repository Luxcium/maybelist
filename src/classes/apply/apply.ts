import type { FnAtoB } from '../../types';
import { Functor } from '../functor';
import type { IApply } from './types';

class Apply<AVal = unknown> extends Functor<AVal> implements IApply<AVal> {
  // static |-···――――――――――――――――――――――――――――――――――――――――――――···-| of() |-···――― ~
  public static of<TVal>(value: TVal): Apply<TVal> {
    return new Apply<TVal>(value);
  }

  public static fromValueOf<TVal>(value: Functor<TVal>): Apply<TVal> {
    return Apply.of<TVal>(JSON.parse(JSON.stringify(value.fork)));
  }

  // constructor |-···――――――――――――――――――――――――――――――――――···-| Functor() |-···――― ~
  protected constructor(applyValue: AVal) {
    super(applyValue);
    // this['fantasy-land/map'] = this.fMap;
    // this['fantasy-land/ap'] = this.ap;
  }

  // public declare ['fantasy-land/map'];
  public fMap<R = unknown>(fn: FnAtoB<AVal, R>): Apply<R> {
    return Apply.of<R>(
      super.fMap<R>(x => fn(x)).fork,
    );
  }

  // public declare ['fantasy-land/ap'];
  public ap<R = unknown>(functor: Functor<FnAtoB<AVal, R>>): Apply<R> {
    return functor.fMap<Apply<R>>((fn: (val: AVal) => R) =>
      this.fMap<R>(x => fn(x)),
    ).fork;
  }
}

export { Apply };

// // static |-···――――――――――――――――――――――――――――――――――――――――――――···-| of() |-···――― ~
// public static of<TVal, Tx = TVal>(value: Tx): Functor<TVal, Tx> {
//   return new Functor<TVal, Tx>(value);
// }
