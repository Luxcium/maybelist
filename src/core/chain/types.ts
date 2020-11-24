import { Functor } from '..';
import { FnAtoB } from '../types';

interface IChain<CVal> {
  map<R>(fn: (val: CVal) => R): IChain<R>;
  ap<R>(functor: Functor<FnAtoB<CVal, R>>): IChain<R>;
  chain<R>(fn: FnAtoB<CVal, IChain<R>>): IChain<R>;
}

export type { IChain };
