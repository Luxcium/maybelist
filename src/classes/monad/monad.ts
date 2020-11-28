import type { FnAtoB } from '../../types';
import { Functor } from '..';
import { Chain } from '../chain/chain';
import { IMonad } from './types';

class Monad<MVal = unknown> extends Chain<MVal> implements IMonad<MVal> {
  // static |-···――――――――――――――――――――――――――――――――――――――――――――···-| of() |-···――― ~
  public static of<TVal>(value: TVal): Monad<TVal> {
    return new Monad<TVal>(value);
  }

  public static fromValueOf<TVal>(value: Functor<TVal>): Monad<TVal> {
    return Monad.of<TVal>(JSON.parse(JSON.stringify(value.fork)));
  }

  public ['fantasy-land/map'] = this.fMap;
  public fMap<R>(fn: (val: MVal) => R): Monad<R> {
    return Monad.of<R>(
      super.fMap<R>(x => fn(x)).fork,
    );
  }
  public ['fantasy-land/ap'] = this.ap;
  public ap<R>(functor: Functor<FnAtoB<MVal, R>>): Monad<R> {
    return functor.fMap<Monad<R>>((fn: (val: MVal) => R) =>
      this.fMap<R>(x => fn(x)),
    ).fork;
  }

  public ['fantasy-land/chain'] = this.chain;
  public chain<R>(fn: FnAtoB<MVal, Monad<R>>): Monad<R> {
    return Monad.of<Monad<R>>(
      this.fMap<Monad<R>>(x => fn(x)).fork,
    ).fork;
  }
}
export { Monad };
