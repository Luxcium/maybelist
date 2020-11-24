import { Functor } from '../functor';
import type { FnAtoB } from '../types';
import type { IApply } from './types';

class Apply<AVal = unknown> extends Functor<AVal> implements IApply<AVal> {
  public static of<TVal>(value: TVal): Apply<TVal> {
    return new Apply<TVal>(value);
  }

  public static fromValueOf<TVal>(value: Functor<TVal>): Apply<TVal> {
    return Apply.of<TVal>(JSON.parse(JSON.stringify(value.fork)));
  }

  protected constructor(value: AVal) {
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

/** Only for your information */
const Applicative = Apply;
void Applicative;

export { Apply };
