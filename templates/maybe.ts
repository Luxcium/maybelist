// #region Copyright © 2019 Packt Publishing ――――――――――――――――――――――――――――――···-|

// This region is excluded of the project license
//
// It is your responsibility to make sure that you have the authorization
// Required to copy and use this region of code. I am using it only for
// illustration purpose and as a reference for the project.
// I will include and implement my own version of this code and will
// then probably remove this section of code.
//
// *NO* PERMISSION GRANTED — PROVIDED "AS IS" WITHOUT WARRANTY

/**
 * Hands-On Functional Programming with TypeScript
 *
 * @author Remo H. Jansen
 * @publisher Packt Publishing
 * @releasedate January 2019
 * @ISBN 9781788831437
 * @topic Functional Programming
 * @copyright 2019 Packt Publishing
 * @description The following Maybe data type is a Functor and an Applicative, which means that it contains a value and implements the map method. The main difference with the preceding implementation of Functor is that the value contained is optional
 */

class MayBe<T> {
  public static of<TVal>(val?: TVal) {
    return new MayBe(val);
  }

  private _value!: T;

  public constructor(val?: T) {
    if (val) {
      this._value = val;
    }
  }

  public isNothing() {
    return this._value === null || this._value === undefined;
  }

  public map<TMap>(fn: (val: T) => TMap) {
    return this.isNothing()
      ? new MayBe<TMap>()
      : new MayBe<TMap>(fn(this._value));
  }

  public ap<TMap>(c: MayBe<(val: T) => TMap>) {
    return c.map((fn) => this.map(fn));
  }
}
// #endregion Copyright © 2019 Packt Publishing ―――――――――――――――――――――――――――···-|

export { MayBe };
