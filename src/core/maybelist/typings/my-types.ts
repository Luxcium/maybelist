import { FnAtoB } from '../../..';
import { Maybelist } from '..';

type ArrayOrList<T> = T[] | Maybelist<T>;
type EitherMaybeList<TRight, TNull = undefined> =
  | Maybelist<TRight>
  | Maybelist<TNull | null>;

type NullOrEither<TRight, TNull = undefined> = Either<TRight, TNull | null>;

type MaybeEither<TRight, TNull = undefined> = Either<TRight, TNull | undefined>;

type MaybeNullOrEither<TRight, TNull = undefined> =
  | TRight
  | TNull
  | null
  | undefined;

type GenericMapper = <a, b>(
  fn: FnAtoB<a, b>,
) => (list: Maybelist<a>) => PromiseList<b>;

type EitherList<TRight, TNull = []> = TRight[] | TNull;
type PromiseList<T> = Promise<EitherMaybeList<T>>;
type Either<TRight, TNull = undefined> = TRight | TNull;
interface PairID {
  symbol: string;
  symbolId: number;
}
type nil = null | undefined | void;

export type {
  ArrayOrList,
  Either,
  EitherList,
  EitherMaybeList,
  GenericMapper,
  MaybeEither,
  MaybeNullOrEither,
  nil,
  NullOrEither,
  PairID,
  PromiseList,
};
