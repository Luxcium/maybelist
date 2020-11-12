interface IFMap<A = unknown> {
    map: MapType<A>;
}
interface IFork<A = unknown> {
    readonly fork: A;
}
export interface IFunctor<A = unknown> extends IFMap<A>, IFork<A>, FunctorType<A> {
    map<B>(fn: (val: A) => B): FunctorType<B>;
    toString(): string;
    toValue(): A;
    readonly fork: A;
}
declare type FunctorType<T = unknown> = IFMap<T> & IFork<T>;
declare type MapType<A = unknown> = (fn: (val: A) => unknown) => IFMap;
export {};
