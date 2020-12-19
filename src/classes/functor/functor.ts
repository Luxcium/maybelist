import { FnAtoB } from '../..';
import { BaseClass } from '..';
import { Kind, KindType } from '../base/base';
import { IFunctor } from './types';

const FunctorKind: KindType = new Kind('FUNCTOR');

class Functor<FVal> extends BaseClass<FVal> implements IFunctor<FVal> {
  static from<TVal>(functorValue: TVal): Functor<TVal> {
    return new Functor(functorValue as TVal, null as null);
  }

  public static fromValueOf<TVal>(value: Functor<TVal>): Functor<TVal> {
    return Functor.from<TVal>(value.clone);
  }

  public ['fantasy-land/map'] = this.fMap;
  // public |-···――――――――――――――――――――――――――――――――――――――――――···-| fMap() |-···――― ~
  public fMap<R>(fn: FnAtoB<FVal, R>) {
    return new Functor(fn(this.fork));
  }

  // constructor |-···――――――――――――――――――――――――――――――――···-| Maybelist() |-···――― ~
  protected constructor(functorVal: FVal, KIND?: KindType | string | null) {
    super(functorVal as FVal, FunctorKind as KindType);
    super._addKINDS(KIND);
  }
}

export { Functor, FunctorKind };
