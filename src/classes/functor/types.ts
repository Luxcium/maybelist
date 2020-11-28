import type { FnAtoB } from '../../types';

interface IFork<Ax = unknown> {
  readonly fork: Ax;
}
interface IClone<Ax = unknown> {
  clone(): Ax;
}

type ForkType<Ax = unknown> = IFork<Ax> & IClone<Ax>;

interface IFMap<A = unknown> {
  map<B>(fn: FnAtoB<A, B>): IFMap<B>;
}

interface IFMapAndFork<A = unknown, Ax = A>
  extends IFMap<A>,
    IClone<Ax>,
    IFork<Ax>,
    ForkType<Ax> {
  map<B, Bx>(fn: FnAtoB<A, B>): IFMapAndFork<B, Bx>;
  readonly fork: Ax;
  clone(): Ax;
}

interface IFunctor<A = unknown> extends IFMap<A> {
  map<B = unknown>(fn: FnAtoB<A, B>): IFunctor<B>;
}

export type { ForkType, IClone, IFMap, IFMapAndFork, IFork, IFunctor };
