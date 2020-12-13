export interface AbstractBase<T> {
  fork: T;
  clone: T;
  toString(): string;
  toValue(): T;
}
