import type { FnAtoB, IFMap } from '../../types';
import { Functor } from '..';

interface IApply<A = unknown> extends IFMap<A> {
  map<B = unknown>(fn: FnAtoB<A, B>): IApply<B>;
  ap<B = unknown>(functor: Functor<FnAtoB<A, B>>): IApply<B>;
}

export type { IApply };
