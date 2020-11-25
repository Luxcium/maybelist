import type { FnAtoB } from '../../types';
import { IFunctor } from './types';

export class Functor<FVal = unknown> implements IFunctor<FVal> {
  public static of<TVal>(value: TVal): Functor<TVal> {
    return new Functor<TVal>(value);
  }
  protected _value: FVal;
  public constructor(value: FVal) {
    this._value = value;
    this['fantasy-land/map'] = this.map;
  }

  public get fork(): FVal {
    return this._value;
  }

  public declare ['fantasy-land/map'];

  public map<R = unknown>(fn: FnAtoB<FVal, R>): Functor<R> {
    return new Functor<R>(fn(this._value));
  }
}
