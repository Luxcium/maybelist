interface IFork<Ax = unknown> {
  readonly fork: Ax;
}
interface IClone<Ax = unknown> {
  readonly clone: Ax;
}

type ForkType<Ax = unknown> = IFork<Ax> & IClone<Ax>;

interface AbstractBase<A> extends IFork<A>, IClone<A> {
  readonly fork: A;
  readonly clone: A;
  toString(): string;
  valueOf(): A;
}

export type { AbstractBase, ForkType, IClone, IFork };
