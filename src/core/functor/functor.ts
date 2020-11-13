import { beConfigurable, beEnumerable } from '../../util';
import type { IFunctor } from './types';

export class Functor<FVal = unknown> implements IFunctor<FVal> {
  // public _value: FVal;

  public constructor(protected _value: FVal) {}

  /**
   * fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
   *
   * @param fn
   */
  @beConfigurable
  @beEnumerable
  public map<R = any>(fn: (val: FVal) => R): IFunctor<R> {
    return new Functor<R>(fn(this._value));
  }

  @beConfigurable
  @beEnumerable
  public get fork(): FVal {
    return this._value;
  }

  @beConfigurable
  @beEnumerable
  public get clone(): FVal {
    return this.toValue();
  }

  @beConfigurable
  @beEnumerable
  public toString(): string {
    return JSON.stringify(this.fork);
  }

  @beConfigurable
  @beEnumerable
  public toValue(): FVal {
    return JSON.parse(this.toString());
  }

  @beConfigurable
  @beEnumerable
  public static fromValueOf<TVal>(value: IFunctor<TVal>): IFunctor<TVal> {
    return new Functor<TVal>(JSON.parse(JSON.stringify(value.fork)));
  }

  @beConfigurable
  @beEnumerable
  public static of<TVal>(value: TVal): IFunctor<TVal> {
    return new Functor<TVal>(value);
  }
}
