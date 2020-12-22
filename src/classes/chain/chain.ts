import type { FnAtoB } from '../../types';
import { Apply } from '../apply';
import { Kind } from '../base';
import { KindType } from '../base/types';
import { Functor } from '../functor';
import { IChain } from './types';

const ChainKind: KindType = new Kind('CHAIN');

class Chain<CVal = unknown> extends Apply<CVal> implements IChain<CVal> {
  // static |-···――――――――――――――――――――――――――――――――――――――――――――···-| of() |-···――― ~
  public static from<TVal>(chainValue: TVal): Chain<TVal> {
    return new Chain<TVal>(chainValue as TVal, null as null);
  }

  public static fromValueOf<TVal>(value: Functor<TVal>): Chain<TVal> {
    return Chain.from<TVal>(value.clone);
  }

  // constructor |-···――――――――――――――――――――――――――――――――――――···-| Chain() |-···――― ~
  protected constructor(chainVal: CVal, KIND?: KindType | string | null) {
    super(chainVal as CVal, ChainKind as KindType);
    super._addKINDS(KIND);
    return this;
  }

  // protected constructor(value: CVal) {
  //   super(value);
  //   // this['fantasy-land/map'] = this.fMap;
  //   // this['fantasy-land/ap'] = this.ap;
  //   // this['fantasy-land/map'] = this.chain;
  // }

  public ['fantasy-land/map'] = this.fMap;
  // public |-···――――――――――――――――――――――――――――――――――――――――――···-| fMap() |-···――― ~
  public fMap<R = unknown>(fn: FnAtoB<CVal, R>): Chain<R> {
    return Chain.from<R>(
      super.fMap<R>(x => fn(x)).fork,
    );
  }
  public ['fantasy-land/ap'] = this.ap;
  // public |-···――――――――――――――――――――――――――――――――――――――――――――···-| ap() |-···――― ~
  public ap<R = unknown>(functor: Functor<FnAtoB<CVal, R>>): Chain<R> {
    return functor.fMap<Chain<R>>((fn: (val: CVal) => R) =>
      this.fMap<R>(x => fn(x)),
    ).fork;
  }
  public ['fantasy-land/chain'] = this.chain;
  // public |-···―――――――――――――――――――――――――――――――――――――――――···-| chain() |-···――― ~
  public chain<R>(fn: FnAtoB<CVal, Chain<R>>): Chain<R> {
    return Chain.from<Chain<R>>(
      this.fMap<Chain<R>>(x => fn(x)).fork,
    ).fork;
  }
}

export { Chain, ChainKind };
