import type { FnAtoB } from '../../types';

type MapType<A = unknown> = <B>(fn: FnAtoB<A, B>) => IFMap<B>;

interface IClone<Ax = unknown> {
  clone(): Ax;
}
interface IFMap<A = unknown> {
  map: MapType<A>;
}

interface IFork<Ax = unknown> {
  readonly fork: Ax;
}

type FunctorType<A = unknown, Ax = A> = IFMap<A> & IFork<Ax>;

interface IFunctor<A = unknown> extends IFMap<A> {
  map<B = unknown>(fn: FnAtoB<A, B>): IFunctor<B>;
}

export type { FunctorType, IClone, IFMap, IFork, IFunctor, MapType };
