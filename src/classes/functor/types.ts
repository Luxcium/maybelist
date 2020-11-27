import type { FnAtoB } from '../../types';

type MapType<A = unknown> = <B>(fn: FnAtoB<A, B>) => IFMap<B>;

interface IFMap<A = unknown> {
  map: MapType<A>;
}

interface IFork<Ax = unknown> {
  readonly fork: Ax;
}

type FunctorType<A = unknown, Ax = A> = IFMap<A> & IFork<Ax>;

interface IFunctor<A = unknown, Ax = A>
  extends IFMap<A>,
    IFork<Ax>,
    FunctorType<A, Ax> {
  map<B>(fn: FnAtoB<A, B>): IFunctor<B>;
  readonly fork: Ax;
}

export type { FunctorType, IFMap, IFork, IFunctor, MapType };
