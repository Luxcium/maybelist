import type { IFunctor } from './types';
export declare class Functor<FVal = any> implements IFunctor<FVal> {
    protected _value: FVal;
    static of<TVal>(value: TVal): Functor<TVal>;
    ['fantasy-land/map']: <R = any>(fn: (val: FVal) => R) => Functor<R>;
    protected constructor(_value: FVal);
    map<R = any>(fn: (val: FVal) => R): Functor<R>;
    get fork(): FVal;
    get clone(): FVal;
    toString(): string;
    toValue(): FVal;
    static fromValueOf<TVal>(value: Functor<TVal>): Functor<TVal>;
}
