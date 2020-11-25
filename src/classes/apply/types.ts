import type { FnAtoB } from '../../types';
import { Functor } from '..';

interface IApply<AVal> {
  map<R>(fn: (val: AVal) => R): IApply<R>;
  ap<R>(functor: Functor<FnAtoB<AVal, R>>): IApply<R>;
}

export type { IApply };
