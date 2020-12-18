import type { FnAtoB } from '../../types';
import {
  AbstractBase,
  ForkType,
  IClone,
  IFork,
  ToString,
  ValueOf,
} from '../base/types';

interface IFMap<A = unknown> {
  fMap<B>(fn: FnAtoB<A, B>): IFMap<B>;
}

interface IFunctor<A = unknown>
  extends AbstractBase<A>,
    IFork<A>,
    IClone<A>,
    ToString,
    ValueOf<A>,
    IFMap<A> {
  fMap<B = unknown>(fn: FnAtoB<A, B>): IFunctor<B>;
}

export type { ForkType, IClone, IFMap, IFork, IFunctor };

// interface IFMapAndFork<A = unknown, Ax = A>
//   extends IFMap<A>,
//     IClone<Ax>,
//     IFork<Ax>,
//     ForkType<Ax> {
//   fMap<B, Bx>(fn: FnAtoB<A, B>): IFMapAndFork<B, Bx>;
//   readonly fork: Ax;
//   clone: Ax;
// }
