import { FnAtoB } from '../../..';
import { IFMap } from '../types';

interface IBaseFunctor<A = unknown> extends IFMap<A> {
  fMap<B = unknown>(fn: FnAtoB<A, B>): IBaseFunctor<B>;
  ['fantasy-land/map']: any;
}

export type { IBaseFunctor };
