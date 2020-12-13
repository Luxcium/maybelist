type FnAtoB<A, B> = (val: A) => B;
type FnAB<B> = <A>(val: A) => B;
export type { IMaybelist } from './maybelist/types';
export type { FnAB, FnAtoB };
