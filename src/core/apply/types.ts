import { Functor } from '..';
import type { FnAtoB } from '../types';
import { Apply } from './apply';

export interface IApply<AVal> {
  map<R>(fn: (val: AVal) => R): Apply<R>;
  ap<R>(functor: Functor<FnAtoB<AVal, R>>): Apply<R>;
}
