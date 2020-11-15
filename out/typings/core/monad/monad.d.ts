import { Functor } from '..';
import type { FnAtoB } from '../types';
export declare class Monad<MVal> extends Functor<MVal> {
    static of<TVal>(value: TVal): Monad<TVal>;
    static fromValueOf<TVal>(value: Monad<TVal>): Monad<TVal>;
    constructor(value: MVal);
    ap<R>(c: Monad<FnAtoB<MVal, R>>): Monad<R>;
    chain<R>(fn: FnAtoB<MVal, Monad<R>>): Monad<R>;
    map<R>(fn: (val: MVal) => R): Monad<R>;
}
