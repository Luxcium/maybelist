import { Functor } from '..';
import { Apply } from '../apply/apply';
import type { FnAtoB } from '../types';
import { IChain } from './types';

class Chain<CVal = unknown> extends Apply<CVal> implements IChain<CVal> {
  public static of<TVal>(value: TVal): Chain<TVal> {
    return new Chain<TVal>(value);
  }

  public static fromValueOf<TVal>(value: Functor<TVal>): Chain<TVal> {
    return Chain.of<TVal>(JSON.parse(JSON.stringify(value.fork)));
  }

  protected constructor(value: CVal) {
    super(value);
    this['fantasy-land/map'] = this.map;
    this['fantasy-land/ap'] = this.ap;
    this['fantasy-land/chain'] = this.chain;
  }

  public declare ['fantasy-land/map'];
  public map<R = unknown>(fn: FnAtoB<CVal, R>): Chain<R> {
    return Chain.of<R>(
      super.map<R>(x => fn(x)).fork,
    );
  }

  public declare ['fantasy-land/ap'];
  public ap<R = unknown>(functor: Functor<FnAtoB<CVal, R>>): Chain<R> {
    return functor.map<Chain<R>>((fn: (val: CVal) => R) =>
      this.map<R>(x => fn(x)),
    ).fork;
  }

  public declare ['fantasy-land/chain'];
  public chain<R>(fn: FnAtoB<CVal, Chain<R>>): Chain<R> {
    return Chain.of<Chain<R>>(
      this.map<Chain<R>>(x => fn(x)).fork,
    ).fork;
  }
}

/** Only for your information */
const Monad = Chain;
void Monad;

export { Chain };
