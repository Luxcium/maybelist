import type { IFunctor } from './types';

export class Functor<FVal = unknown> implements IFunctor<FVal> {
  // public _value: FVal;

  public constructor(protected _value: FVal) {}

  /**
   * fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
   *
   * @param fn
   */
  public map<R = any>(fn: (val: FVal) => R): IFunctor<R> {
    return new Functor<R>(fn(this._value));
  }

  public get fork(): FVal {
    return this._value;
  }

  public toString(): string {
    return JSON.stringify(this);
  }

  public toValue(): FVal {
    return JSON.parse(this.toString());
  }

  public static fromValueOf<TVal>(value: IFunctor<TVal>): Functor<TVal> {
    return new Functor<TVal>(JSON.parse(JSON.stringify(value.fork)));
  }

  public static of<TVal>(value: TVal): Functor<TVal> {
    return new Functor<TVal>(value);
  }
}
