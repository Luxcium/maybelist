import type { FnAtoB } from '../../types';
import { Functor } from '..';
import { Kind } from '../base';
import { KindType } from '../base/types';
import { Chain } from '../chain';
import { IMonad } from './types';

const MonadKind: KindType = new Kind('MONAD');

class Monad<MVal = unknown> extends Chain<MVal> implements IMonad<MVal> {
  // static |-···――――――――――――――――――――――――――――――――――――――――――――···-| of() |-···――― ~
  public static from<TVal>(monadValue: TVal): Monad<TVal> {
    return new Monad<TVal>(monadValue as TVal, null as null);
  }

  public static fromValueOf<yTVal>(value: Functor<yTVal>): Monad<yTVal> {
    return Monad.from<yTVal>(value.clone);
  }

  // constructor |-···――――――――――――――――――――――――――――――――――――···-| Monad() |-···――― ~
  protected constructor(monadVal: MVal, KIND?: KindType | string | null) {
    super(monadVal as MVal, MonadKind as KindType);
    super._addKINDS(KIND);
    return this;
  }

  public ['fantasy-land/map'] = this.fMap;
  // public |-···――――――――――――――――――――――――――――――――――――――――――···-| fMap() |-···――― ~
  public fMap<R = unknown>(fnc: (val: MVal) => R): Monad<R> {
    return Monad.from<R>(
      super.fMap<R>(x => fnc(x)).fork,
    );
  }
  public ['fantasy-land/ap'] = this.ap;
  // public |-···――――――――――――――――――――――――――――――――――――――――――――···-| ap() |-···――― ~
  public ap<R>(functor: Functor<FnAtoB<MVal, R>>): Monad<R> {
    return functor.fMap<Monad<R>>((fn: (val: MVal) => R) =>
      this.fMap<R>(x => fn(x)),
    ).fork;
  }

  public ['fantasy-land/chain'] = this.chain;
  // public |-···―――――――――――――――――――――――――――――――――――――――――···-| chain() |-···――― ~
  public chain<R>(fnc: FnAtoB<MVal, Monad<R>>): Monad<R> {
    return Monad.from<Monad<R>>(
      this.fMap<Monad<R>>(x => fnc(x)).fork,
    ).fork;
  }
}

export { Monad, MonadKind };
