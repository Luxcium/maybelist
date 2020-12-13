import { FnAtoB } from '../../types';
import { Functor } from '..';
import {
  AbstractBase,
  IApply,
  IChain,
  IClone,
  IFork,
  IFunctor,
} from '../types';

interface IMonad<A = unknown>
  extends AbstractBase<A>,
    IFork<A>,
    IClone<A>,
    IFunctor<A>,
    IApply<A>,
    IChain<A> {
  fMap<B = unknown>(fn: FnAtoB<A, B>): IMonad<B>;
  ap<B = unknown>(functor: Functor<FnAtoB<A, B>>): IMonad<B>;
  chain<B = unknown>(fn: FnAtoB<A, IMonad<B>>): IMonad<B>;
  valueOf(): A;
}

export type { IMonad };
