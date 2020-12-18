import { FnAtoB, IApply, IFMap, IFunctor } from '../../types';
import { AbstractBase, IClone, IFork, ToString, ValueOf } from '../base/types';

interface IChain<A = unknown>
  extends AbstractBase<A>,
    IFork<A>,
    IClone<A>,
    ToString,
    ValueOf<A>,
    IFMap<A>,
    IFunctor<A>,
    IApply<A> {
  fMap<B = unknown>(fn: FnAtoB<A, B>): IChain<B>;
  ap<B = unknown>(functor: IFunctor<FnAtoB<A, B>>): IChain<B>;
  chain<B = unknown>(fn: FnAtoB<A, IChain<B>>): IChain<B>;
}

export type { IChain };
