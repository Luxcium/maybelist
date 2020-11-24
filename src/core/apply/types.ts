import { Functor } from '..';
import type { FnAtoB } from '../types';

export interface IApply<AVal> {
  map<R>(fn: (val: AVal) => R): IApply<R>;
  ap<R>(functor: Functor<FnAtoB<AVal, R>>): IApply<R>;
}
