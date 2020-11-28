import type { FnAtoB } from '../../types';

type MapType<A = unknown> = <B>(fn: FnAtoB<A, B>) => IFMap<B>;

interface IFMap<A = unknown> {
  map: MapType<A>;
}

interface IClone<Ax = unknown> {
  clone(): Ax;
}
interface IFork<Ax = unknown> {
  readonly fork: Ax;
}

type ForkType<Ax> = IFork<Ax> & IClone<Ax>;
type FunctorType<A = unknown, Ax = A> = IFMap<A> & ForkType<Ax>;

interface IFunctor<A = unknown> extends IFMap<A> {
  map<B = unknown>(fn: FnAtoB<A, B>): IFunctor<B>;
}

export type { ForkType, FunctorType, IClone, IFMap, IFork, IFunctor, MapType };
