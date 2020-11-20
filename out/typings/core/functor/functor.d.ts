import type { IFunctor } from './types';
declare class Functor<FVal = any> implements IFunctor<FVal> {
    protected _value: FVal;
    static of<TVal>(value: TVal): Functor<TVal>;
    static fromValueOf<TVal>(value: Functor<TVal>): Functor<TVal>;
    ['fantasy-land/map']: <R = any>(fn: (val: FVal) => R) => Functor<R>;
    protected constructor(_value: FVal);
    map<R = any>(fn: (val: FVal) => R): Functor<R>;
    get fork(): FVal;
    get clone(): FVal;
    toString(): string;
    toValue(): FVal;
}
export { Functor };
