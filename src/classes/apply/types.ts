import type { FnAtoB, IFunctor } from '../../types';
import { Functor } from '..';
import { AbstractBase } from '../base/types';

interface IApply<A = unknown> extends AbstractBase<A>, IFunctor<A> {
  fMap<B = unknown>(fn: FnAtoB<A, B>): IApply<B>;
  ap<B = unknown>(functor: Functor<FnAtoB<A, B>>): IApply<B>;
}

export type { IApply };
