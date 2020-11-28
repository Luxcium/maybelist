import { FnAtoB, IApply, IChain, IFMap } from '../../types';
import { Functor } from '..';

interface IMonad<A = unknown> extends IFMap<A>, IApply<A>, IChain<A> {
  fMap<B = unknown>(fn: FnAtoB<A, B>): IMonad<B>;
  ap<B = unknown>(functor: Functor<FnAtoB<A, B>>): IMonad<B>;
  chain<B = unknown>(fn: FnAtoB<A, IMonad<B>>): IMonad<B>;
}

export type { IMonad };
