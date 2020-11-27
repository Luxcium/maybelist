import type { FnAtoB } from '../../types';
import { Functor } from '..';
import { Chain } from '../chain/chain';
import { IMonad } from './types';

class Monad<MVal, UVal = MVal>
  extends Chain<MVal, UVal>
  implements IMonad<MVal> {
  // static |-···――――――――――――――――――――――――――――――――――――――――――――···-| of() |-···――― ~
  public static of<TVal, Tx = TVal>(value: Tx): Monad<TVal, Tx> {
    return new Monad<TVal, Tx>(value);
  }

  public static fromValueOf<TVal>(value: Functor<TVal>): Monad<TVal> {
    return Monad.of<TVal>(JSON.parse(JSON.stringify(value.fork)));
  }
  public constructor(value: UVal) {
    super(value);
    this['fantasy-land/map'] = this.map;
    this['fantasy-land/ap'] = this.ap;
    this['fantasy-land/chain'] = this.chain;
  }
  public declare ['fantasy-land/map'];
  public map<R>(fn: (val: MVal) => R): Monad<R> {
    return Monad.of<R>(
      super.map<R>(x => fn(x)).fork,
    );
  }
  public declare ['fantasy-land/ap'];
  public ap<R>(functor: Functor<FnAtoB<MVal, R>>): Monad<R> {
    return functor.map<Monad<R>>((fn: (val: MVal) => R) =>
      this.map<R>(x => fn(x)),
    ).fork;
  }
  public declare ['fantasy-land/chain'];
  public chain<R>(fn: FnAtoB<MVal, Monad<R>>): Monad<R> {
    return Monad.of<Monad<R>>(
      this.map<Monad<R>>(x => fn(x)).fork,
    ).fork;
  }
}
export { Monad };
