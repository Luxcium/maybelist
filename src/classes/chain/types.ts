import { FnAtoB, IApply, IFMap } from '../../types';
import { Functor } from '..';

interface IChain<A = unknown> extends IFMap<A>, IApply<A> {
  map<B = unknown>(fn: FnAtoB<A, B>): IChain<B>;
  ap<B = unknown>(functor: Functor<FnAtoB<A, B>>): IChain<B>;
  chain<B = unknown>(fn: FnAtoB<A, IChain<B>>): IChain<B>;
}

export type { IChain };
