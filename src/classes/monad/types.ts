import { FnAtoB, IApply, IChain } from '../../types';
import { Functor } from '..';

interface IMonad<A = any> extends IChain<A>, IApply<A> {
  map<B = any>(fn: (val: A) => B): IMonad<B>;
  ap<B = any>(functor: Functor<FnAtoB<A, B>>): IMonad<B>;
  chain<B = any>(fn: FnAtoB<A, IMonad<B>>): IMonad<B>;
}

export type { IMonad };
