import { AbstractBase, KindType } from './types';

class Kind implements KindType {
  public KIND: symbol;
  public Name: string;

  // constructor |-···―――――――――――――――――――――――――――――――――――――···-| Base() |-···――― ~
  constructor(NAME: string) {
    this.KIND = Symbol.for(NAME);
    this.Name = NAME;
  }
}
const BaseClassKind: KindType = new Kind('BASECLASS');
/*
~~=···~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~···= ~~
*/
abstract class BaseClass<T = unknown> implements AbstractBase<T> {
  // private |-···―――――――――――――――――――――――――――――――――――――――――···-| _value |-···――― ~
  private _value: T;

  protected _KINDS: KindType[];
  protected _addKINDS(KIND?: KindType | string | null) {
    this._KINDS = [BaseClassKind];
    if (typeof KIND === 'string') {
      this._KINDS.push(new Kind(KIND));
      return this;
    }
    if (KIND) {
      this._KINDS.push(KIND);
      return this;
    }
    return this;
  } //: KindType[];
  public get KINDS() {
    return this._KINDS;
  }

  // constructor |-···―――――――――――――――――――――――――――――――――――――···-| Base() |-···――― ~
  protected constructor(value: T, KIND?: KindType | string) {
    this._value = value;
    this._KINDS = [];
    this._addKINDS(BaseClassKind);
    this._addKINDS(KIND);
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

export { BaseClass, BaseClassKind, Kind };
