import type { FnAtoB } from '../../types';
import { Kind } from '../base';
import { KindType } from '../base/types';
import { Functor } from '../functor';
import type { IApply } from './types';

const ApplyKind: KindType = new Kind('APPLY');

class Apply<AVal = unknown> extends Functor<AVal> implements IApply<AVal> {
  // static |-···――――――――――――――――――――――――――――――――――――――――――――···-| of() |-···――― ~
  public static from<TVal>(applyValue: TVal): Apply<TVal> {
    return new Apply<TVal>(applyValue as TVal, null as null);
  }

  public static fromValueOf<TVal>(value: Functor<TVal>): Apply<TVal> {
    return Apply.from<TVal>(value.clone);
  }

  // constructor |-···――――――――――――――――――――――――――――――――――――···-| Apply() |-···――― ~
  protected constructor(applyVal: AVal, KIND?: KindType | string | null) {
    super(applyVal as AVal, ApplyKind as KindType);
    super._addKINDS(KIND);
    return this;
  }

  public ['fantasy-land/map'] = this.fMap;
  // public |-···――――――――――――――――――――――――――――――――――――――――――···-| fMap() |-···――― ~
  public fMap<R = unknown>(fn: FnAtoB<AVal, R>): Apply<R> {
    return Apply.from<R>(
      super.fMap<R>(x => fn(x)).fork,
    );
  }

  public ['fantasy-land/ap'] = this.ap;
  // public |-···――――――――――――――――――――――――――――――――――――――――――――···-| ap() |-···――― ~
  public ap<R = unknown>(functor: Functor<FnAtoB<AVal, R>>): Apply<R> {
    return functor.fMap<Apply<R>>((fn: (val: AVal) => R) =>
      this.fMap<R>(x => fn(x)),
    ).fork;
  }
}

export { Apply, ApplyKind };

// // static |-···――――――――――――――――――――――――――――――――――――――――――――···-| of() |-···――― ~
// public static of<TVal, Tx = TVal>(value: Tx): Functor<TVal, Tx> {
//   return new Functor<TVal, Tx>(value);
// }
