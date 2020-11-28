import { FnAtoB, Functor } from '../..';
import { IClone } from '../../classes/functor/types';
import { IApply, IChain, IFMap, IFork, IMonad } from '../../types';

interface IMaybelist<A, As extends Array<A> = A[]>
  extends IFMap<A>,
    IChain<A>,
    IFork<As>,
    IClone<As>,
    IMonad<A>,
    IApply<A> {
  map<B = unknown>(fn: FnAtoB<A, B>): IMaybelist<B, B[]>;
  ap<B = unknown>(functor: Functor<FnAtoB<A, B>>): IMaybelist<B, B[]>;
  chain<B = unknown>(fn: FnAtoB<A, IMaybelist<B, B[]>>): IMaybelist<B, B[]>;
}

export type { IMaybelist };
