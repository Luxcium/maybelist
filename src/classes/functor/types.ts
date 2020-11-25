import type { FnAtoB } from '../../core/types';

type MapType<A = unknown> = <B>(fn: FnAtoB<A, B>) => IFMap<B>;

interface IFMap<A = unknown> {
  ['fantasy-land/map']: MapType<A>;
  map: MapType<A>;
}

interface IFork<A = unknown> {
  readonly fork: A;
}

type FunctorType<A = unknown> = IFMap<A> & IFork<A>;

interface IFunctor<A = unknown> extends IFMap<A>, IFork<A>, FunctorType<A> {
  map<B>(fn: FnAtoB<A, B>): IFunctor<B>;
  ['fantasy-land/map']<B>(fn: FnAtoB<A, B>): IFunctor<B>;
  readonly fork: A;
}

export type { FunctorType, IFMap, IFork, IFunctor, MapType };
