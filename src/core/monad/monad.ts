import { Functor } from '..';
import type { FnAtoB } from '../types';

export class Monad<MVal> extends Functor<MVal> {
  public static of<TVal>(value: TVal): Monad<TVal> {
    return new Monad<TVal>(value);
  }

  public static fromValueOf<TVal>(value: Functor<TVal>): Monad<TVal> {
    return new Monad<TVal>(JSON.parse(JSON.stringify(value.fork)));
  }

  public constructor(value: MVal) {
    super(value);
  }

  public ap<R>(c: Monad<FnAtoB<MVal, R>>): Monad<R> {
    return c.map<Monad<R>>((fn: (val: MVal) => R) => this.map<R>(x => fn(x)))
      .fork;
  }

  public chain<R>(fn: FnAtoB<MVal, Monad<R>>): Monad<R> {
    return Monad.of<Monad<R>>(
      this.map<Monad<R>>(x => fn(x)).fork,
    ).fork;
  }

  public map<R>(fn: (val: MVal) => R): Monad<R> {
    return Monad.of(
      super.map<R>(x => fn(x)).fork,
    );
  }
}
