import { FnAtoB, Functor } from '../..';
import { BaseClass } from '../../classes';
import { Maybelist } from '.';
import { ArrayMaper } from './types';

class MaybelistBaseClass<T> extends BaseClass<T[]> {
  // implements AbstractMaybelist<T>
  constructor(...values: T[] | [T[]]) {
    if (values.length === 1) {
      const value = values[0];
      if (Array.isArray(value)) {
        super([...value]);
        return this;
      }
    }

    super([...(values as T[])]);
    return this;
  }

  // private |-···―――――――――――――――――――――――――――――――――――――···-| arrayMap() |-···――― ~
  private arrayMap<S>(arrayMaper: ArrayMaper<S>, thisArg?: any): S[] {
    return this.fork.map(arrayMaper, thisArg);
  }

  // public |-···―――――――――――――――――――――――――――――――――――――――――――···-| map() |-···――― ~
  public map<R>(arrayMaper: ArrayMaper<R>) {
    return new MaybelistBaseClass(this.arrayMap(arrayMaper));
  }

  // public |-···――――――――――――――――――――――――――――――――――――――――――――···-| ap() |-···――― ~
  public mlAp<R>(functor: Functor<ArrayMaper<R>>) {
    return functor.fMap((fn: ArrayMaper<R>) => this.map<R>(fn)).fork;
  }

  // public |-···―――――――――――――――――――――――――――――――――――――――――···-| chain() |-···――― ~
  public mlChain<R>(fn: FnAtoB<T, Maybelist<R>>) {
    return new MaybelistBaseClass(this.fork.flatMap(x => fn(x).fork));
  }
}

export { MaybelistBaseClass };
