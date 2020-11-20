import type { Functor } from '..';
interface IFMap<A = unknown> {
    map: MapType<A>;
}
interface IFork<A = unknown> {
    readonly fork: A;
}
interface IFunctor<A = unknown> extends IFMap<A>, IFork<A>, FunctorType<A> {
    map<B>(fn: (val: A) => B): IFunctor<B>;
    'fantasy-land/map'<B>(fn: (val: A) => B): IFunctor<B>;
    toString(): string;
    toValue(): A;
    readonly fork: A;
    readonly clone: A;
}
declare type MapType<A = unknown> = <B>(fn: (val: A) => B) => IFMap<B>;
declare type FunctorType<A = unknown> = IFMap<A> & IFork<A>;
declare type Of = <TVal>(value: TVal) => Functor<TVal>;
declare type FomValueOf = <TVal>(value: Functor<TVal>) => Functor<TVal>;
interface StaticFunctor {
    of: Of;
    fomValueOf: FomValueOf;
}
export type { IFunctor, StaticFunctor };
