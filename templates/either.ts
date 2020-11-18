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
 *
 * Hands-On Functional Programming with TypeScript
 *
 * @author Remo H. Jansen
 * @publisher Packt Publishing
 * @releasedate January 2019
 * @ISBN 9781788831437
 * @topic Functional Programming
 * @copyright 2019 Packt Publishing
 * @description The Either algebraic data type is the union of the Just and Nothing types
 *
 * The good thing about using Either is that the compiler forces us to use a
 * type guard. This means that using Either can lead to increased type safety
 * when dealing with potential failures in I/O operations such
 * as HTTP requests.
 *
 * We can use a type guard to ensure that we are accessing a Nothing instance
 * when a request fails, and a Just instance when a request is completed
 * without errors
 *
 */

type Either<T1, T2> = Just<T1> | Nothing<T2>;

/** The just type is a Functor used to represent a non-nullable value */
class Just<T> {
  public static of<TVal>(val: TVal) {
    return new Just(val);
  }
  private _value: T;
  public constructor(val: T) {
    this._value = val;
  }
  public map<TMap>(fn: (val: T) => TMap) {
    return new Just<TMap>(fn(this._value));
  }
}

/** The Nothing type represents the lack of a value: */
class Nothing<T> {
  public static of<TVal>(val?: TVal) {
    return new Nothing(val);
  }
  private _value: T | undefined;
  public constructor(val?: T) {
    this._value = val;
  }
  public map<TMap>(fn: (val: T) => TMap) {
    if (this._value !== undefined) {
      return new Nothing<TMap>(fn(this._value));
    }
    return new Nothing<TMap>(this._value as any);
  }
}
// #endregion Copyright © 2019 Packt Publishing ―――――――――――――――――――――――――――···-|

// Should instead implement Left or Right types
export type { Either, Just, Nothing };
