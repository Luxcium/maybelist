interface Value<A = unknown> {
  readonly _value: A;
}
interface Fork<A = unknown> {
  readonly fork: A;
}
interface Clone<A = unknown> {
  readonly clone: A;
}
interface ValueOf<A = unknown> {
  valueOf(): A;
}
interface ToString {
  toString(): string;
}

type Clonable<T> = GConstructor<Clone<T>>;
type Constructor = new (...args: any[]) => {};
type Forkable<T> = GConstructor<Fork<T>>;
type GConstructor<T = {}> = new (...args: any[]) => T;
type Stringifyable = GConstructor<ToString>;
type Valuable<T> = GConstructor<ValueOf<T>>;
type WithValue<T> = GConstructor<Value<T>>;
export type {
  Clonable,
  Clone,
  Constructor,
  Fork,
  Forkable,
  GConstructor,
  Stringifyable,
  ToString,
  Valuable,
  Value,
  ValueOf,
  WithValue,
};

// 🌹 ✨
