import { AbstractBase } from './types';

/*
~~=···~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~···= ~~
*/
export abstract class BaseClass<T> extends Object implements AbstractBase<T> {
  // private |-···―――――――――――――――――――――――――――――――――――――――――···-| _value |-···――― ~
  private _value: T;

  // constructor |-···―――――――――――――――――――――――――――――――――――――···-| Base() |-···――― ~
  protected constructor(value: T) {
    super();
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

  // public |-···――――――――――――――――――――――――――――――――――――――···-| toString() |-···――― ~
  public toString(): string {
    return JSON.stringify(this.fork);
  }

  // public |-···―――――――――――――――――――――――――――――――――――――――···-| toValue() |-···――― ~
  public valueOf(): T {
    return this.clone;
  }
}
/*
~~=···~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~···= ~~
*/
