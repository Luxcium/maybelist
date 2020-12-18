type KindType = {
  KIND: symbol;
  Name: string;
};
interface IFork<Ax = unknown> {
  readonly fork: Ax;
}
interface IClone<Ax = unknown> {
  readonly clone: Ax;
}

interface ToString {
  toString(): string;
}

interface ValueOf<Ax = unknown> {
  valueOf(): Ax;
}

type ForkType<Ax = unknown> = IFork<Ax> & IClone<Ax>;

interface AbstractBase<A = unknown>
  extends IFork<A>,
    IClone<A>,
    ToString,
    ValueOf<A> {
  readonly fork: A;
  readonly clone: A;
  toString(): string;
  valueOf(): A;
}

export type {
  AbstractBase,
  ForkType,
  IClone,
  IFork,
  KindType,
  ToString,
  ValueOf,
};
