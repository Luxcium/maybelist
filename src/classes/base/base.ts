import { IClone } from '../functor/types';
import { IFork } from '../types';
import { AbstractBase } from './types';

export abstract class Base<T> implements AbstractBase<T>, IFork<T>, IClone<T> {
  // private |-···―――――――――――――――――――――――――――――――――――――――――···-| _value |-···――― ~
  private _value: T;

  // constructor |-···―――――――――――――――――――――――――――――――――――――···-| Base() |-···――― ~
  protected constructor(value: T) {
    this._value = value;
  }

  // get |-···―――――――――――――――――――――――――――――――――――――――――――――――···-| fork |-···――― ~
  public get fork(): T {
    return this._value;
  }

  // get |-···――――――――――――――――――――――――――――――――――――――――――――――···-| clone |-···――― ~
  public get clone(): T {
    return JSON.parse(JSON.stringify(this.fork)) as T;
  }

  public toString(): string {
    return JSON.stringify(this.fork);
  }

  public toValue(): T {
    return this.clone;
  }
}
