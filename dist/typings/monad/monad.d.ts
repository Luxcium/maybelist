import { Functor } from '..';
export declare type FnAtoB<A, B> = (val: A) => B;
export declare class Monad<MVal = any> extends Functor<MVal> {
    static of<TVal>(value: TVal): Monad<TVal>;
    static fromValueOf<TVal>(value: Monad<TVal>): Monad<TVal>;
    constructor(value: MVal);
    ap<R = unknown>(c: Monad<FnAtoB<MVal, R>>): Monad<R>;
    chain<R = any>(fn: FnAtoB<MVal, Monad<R>>): Monad<R>;
    map<R>(fn: FnAtoB<MVal, R>): Monad<R>;
    get fork(): MVal;
    toString(): string;
    toValue(): MVal;
}
