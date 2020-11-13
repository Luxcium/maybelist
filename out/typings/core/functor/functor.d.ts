import type { IFunctor } from './types';
export declare class Functor<FVal = unknown> implements IFunctor<FVal> {
    protected _value: FVal;
    constructor(_value: FVal);
    map<R = any>(fn: (val: FVal) => R): IFunctor<R>;
    get fork(): FVal;
    get clone(): FVal;
    toString(): string;
    toValue(): FVal;
    static fromValueOf<TVal>(value: IFunctor<TVal>): IFunctor<TVal>;
    static of<TVal>(value: TVal): IFunctor<TVal>;
}
