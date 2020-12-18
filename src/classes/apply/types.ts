import type { FnAtoB, IFMap, IFunctor } from '../../types';
import { Functor } from '..';
import { AbstractBase, IClone, IFork, ToString, ValueOf } from '../base/types';

interface IApply<A = unknown>
  extends AbstractBase<A>,
    IFork<A>,
    IClone<A>,
    ToString,
    ValueOf<A>,
    IFMap<A>,
    IFunctor<A> {
  fMap<B = unknown>(fn: FnAtoB<A, B>): IApply<B>;
  ap<B = unknown>(functor: Functor<FnAtoB<A, B>>): IApply<B>;
}

export type { IApply };
