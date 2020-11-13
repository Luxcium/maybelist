interface IFMap<A = unknown> {
    map: MapType<A>;
}
interface IFork<A = unknown> {
    readonly fork: A;
}
export interface IFunctor<A = unknown> extends IFMap<A>, IFork<A>, FunctorType<A> {
    map<B>(fn: (val: A) => B): IFunctor<B>;
    toString(): string;
    toValue(): A;
    readonly fork: A;
    readonly clone: A;
}
declare type MapType<A = unknown> = <B>(fn: (val: A) => B) => IFMap<B>;
declare type FunctorType<A = unknown> = IFMap<A> & IFork<A>;
export {};
