import { IClone } from '../../classes/functor/types';
import { IFork, IMonad } from '../../types';

// interface IMap<T> {
//   temporary: T;
// }
interface IMaybelist<A, As extends Array<A> = A[]>
  extends IFork<As>,
    IClone<As> {}

interface AbstractMaybelist<A, As extends Array<A> = A[]>
  extends IClone<As>,
    IFork<As>,
    IMonad<As> {}

type ArrayMaper<B> = <A>(value: A, index: number, array: A[]) => B;
type ArrayMaperAtoB<A, B> = (value: A, index: number, array: A[]) => B;
export type { AbstractMaybelist, ArrayMaper, ArrayMaperAtoB, IMaybelist };

// IFMap<As>,
// IMap<As>
// IChain<As>,
// IMonad<As>,
// IApply<As>
// fMap<B = unknown>(fn: FnAtoB<A, B>): IMaybelist<B, B[]>;
// ap<B = unknown>(functor: Functor<FnAtoB<A, B>>): IMaybelist<B, B[]>;
// chain<B = unknown>(fn: FnAtoB<A, IMaybelist<B, B[]>>): IMaybelist<B, B[]>;
// temporary: As;
