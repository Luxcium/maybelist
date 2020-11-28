import type { FnAtoB } from '../../types';
import { Apply } from '../apply/apply';
import { Functor } from '../functor';
import { IChain } from './types';

class Chain<CVal = unknown> extends Apply<CVal> implements IChain<CVal> {
  // static |-···――――――――――――――――――――――――――――――――――――――――――――···-| of() |-···――― ~
  public static of<TVal>(value: TVal): Chain<TVal> {
    return new Chain<TVal>(value);
  }

  public static fromValueOf<TVal>(value: Functor<TVal>): Chain<TVal> {
    return Chain.of<TVal>(JSON.parse(JSON.stringify(value.fork)));
  }
  public ['fantasy-land/map'] = this.fMap;
  public fMap<R = unknown>(fn: FnAtoB<CVal, R>): Chain<R> {
    return Chain.of<R>(
      super.fMap<R>(x => fn(x)).fork,
    );
  }
  public ['fantasy-land/ap'] = this.ap;
  public ap<R = unknown>(functor: Functor<FnAtoB<CVal, R>>): Chain<R> {
    return functor.fMap<Chain<R>>((fn: (val: CVal) => R) =>
      this.fMap<R>(x => fn(x)),
    ).fork;
  }
  public ['fantasy-land/chain'] = this.chain;
  public chain<R>(fn: FnAtoB<CVal, Chain<R>>): Chain<R> {
    return Chain.of<Chain<R>>(
      this.fMap<Chain<R>>(x => fn(x)).fork,
    ).fork;
  }
}

export { Chain };
