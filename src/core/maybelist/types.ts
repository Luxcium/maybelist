import { IClone, ToString, ValueOf } from '../../classes/base/types';
import { IFork, IMonad } from '../../types';

interface IMaybelist<A, As extends Array<A> = A[]>
  extends IFork<As>,
    IClone<As>,
    ValueOf<As>,
    ToString,
    IMonad<As> {
  // IFMap<As>
  // IChain<As>,
  // IApply<As>
}

interface AbstractMaybelist<A, As extends Array<A> = A[]>
  extends IClone<As>,
    IFork<As>,
    IMonad<As> {}

type ArrayMaper<B> = <A>(value: A, index: number, array: A[]) => B;
type ArrayMaperAtoB<A, B> = (value: A, index: number, array: A[]) => B;

type CallbackfnT<T> = (
  previousValue: T,
  currentValue: T,
  currentIndex: number,
  array: T[],
) => T;

type CallbackfnU<U, T> = (
  previousValue: U | T,
  currentValue: T,
  currentIndex: number,
  array: T[],
) => U | T;

export type {
  AbstractMaybelist,
  ArrayMaper,
  ArrayMaperAtoB,
  CallbackfnT,
  CallbackfnU,
  IMaybelist,
};

// IFMap<As>,
// IMap<As>
// IChain<As>,
// IMonad<As>,
// IApply<As>
// fMap<B = unknown>(fn: FnAtoB<A, B>): IMaybelist<B, B[]>;
// ap<B = unknown>(functor: Functor<FnAtoB<A, B>>): IMaybelist<B, B[]>;
// chain<B = unknown>(fn: FnAtoB<A, IMaybelist<B, B[]>>): IMaybelist<B, B[]>;
// temporary: As;
