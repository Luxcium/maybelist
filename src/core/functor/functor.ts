import type { FnAtoB } from '../types';
import { IFunctor } from './f-type';

export class Functor<FVal = unknown> implements IFunctor<FVal> {
  public static of<TVal>(value: TVal): Functor<TVal> {
    return new Functor<TVal>(value);
  }

  public constructor(protected _value: FVal) {
    this['fantasy-land/map'] = this.map;
  }

  public declare ['fantasy-land/map'];

  public map<R = unknown>(fn: FnAtoB<FVal, R>): Functor<R> {
    return new Functor<R>(fn(this._value));
  }

  public get fork(): FVal {
    return this._value;
  }
}
