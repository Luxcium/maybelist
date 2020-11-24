import { Functor } from '..';
import { FnAtoB } from '../types';

interface IMonad<MVal> {
  map<R>(fn: (val: MVal) => R): IMonad<R>;
  ap<R>(functor: Functor<FnAtoB<MVal, R>>): IMonad<R>;
  chain<R>(fn: FnAtoB<MVal, IMonad<R>>): IMonad<R>;
}

export type { IMonad };
