import { Either, EitherMaybeList } from './my-types';

export interface HeadOrTail<T> {
  head: Either<T | null>;
  tail: EitherMaybeList<T, null>;
}
