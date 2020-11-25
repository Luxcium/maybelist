import { Functor } from '../../core';
import type { FnAtoB } from '../../core/types';

export interface IApply<AVal> {
  map<R>(fn: (val: AVal) => R): IApply<R>;
  ap<R>(functor: Functor<FnAtoB<AVal, R>>): IApply<R>;
}
