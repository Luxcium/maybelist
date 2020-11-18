import type { IFunctor } from '../functor/types'

// export interface IMonad<MVal> extends IFunctor<MVal> {}

/*
 * const myFunctor = new Monad(40).map(i => i).toValue();
 */

// import { IFunctor, ValueType } from './i-functor';

export interface IApply<A = any, U = any> extends IFunctor<A> {
  /** fantasy-land/ap :: Apply f => f A ~> f (A -> B) -> f B */
  ap: ApType<A, U>
}
export type ApType<A = any, U = any> = <B = U>(
  Ap: IApply<(val: A) => B>,
) => IApply<U>

export interface IApplicative {
  /** fantasy-land/of :: Applicative f => a -> f a */
  readonly of: Applicative
}
export type Applicative<RType = IApply> = <TVal>(value?: TVal) => RType

export interface ApplicativeFP<F> extends ApplyFP<F> {
  readonly of: <A>(a: A) => HKT<F, A>
}
export interface ChainFP<F> extends ApplyFP<F> {
  readonly chain: <A, B>(fa: HKT<F, A>, f: (a: A) => HKT<F, B>) => HKT<F, B>
}
export interface ApplyFP<F> extends FunctorFP<F> {
  readonly ap: <A, B>(fab: HKT<F, (a: A) => B>, fa: HKT<F, A>) => HKT<F, B>
}
export interface FunctorFP<F> {
  readonly URI: F
  readonly map: <A, B>(fa: HKT<F, A>, f: (a: A) => B) => HKT<F, B>
}
export interface HKT<URI, A> {
  readonly _URI: URI
  readonly _A: A
}

export type Option<A> =
  | { type: 'None' }
  | {
      type: 'Some'
      value: A
    }

export interface IChain<A = any> {
  // extends Monad<A>
  /** fantasy-land/chain :: Chain m => m A ~> (A -> m B) -> m B */
  chain: ChainType<A>
}
export type ChainType<A = any> = <B = any>(
  fn: (val: A) => IChain<B>,
) => IChain<B>

export interface IMonad<A = any> extends IChain<A>, IApply<A> {
  chain<B = any>(fn: (val: A) => IChain<B>): IMonad<B>
  ap<B = any>(Apply: IApply<(val: A) => B>): IMonad<B>
  map<B>(fn: (val: A) => B): IMonad<B>
}
