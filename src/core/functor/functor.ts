import {
  beConfigurable,
  beEnumerable,
  beNotConfigurable,
  beNotEnumerable,
  beNotWritable,
  beWritable,
  configurable,
  enumerable,
  writable,
} from '../../util';
import type { IFunctor } from './types';

export class Functor<FVal = any> implements IFunctor<FVal> {
  public static of<TVal>(value: TVal): Functor<TVal> {
    return new Functor<TVal>(value);
  }

  /**
   * `fn` can return any value.
   * No parts of `fn` return `R` value should be checked.
   *
   * @param fn
   */
  public ['fantasy-land/map'];

  protected constructor(protected _value: FVal) {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    this['fantasy-land/map'] = this.map;
  }

  /**
   * fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
   *
   * @param fn
   */
  @beNotWritable
  @beConfigurable
  @beEnumerable
  public map<R = any>(fn: (val: FVal) => R): Functor<R> {
    return new Functor<R>(fn(this._value));
  }

  @beConfigurable
  @beEnumerable
  public get fork(): FVal {
    return this._value;
  }

  @beConfigurable
  @beEnumerable
  public get clone(): FVal {
    return this.toValue();
  }

  @beNotWritable
  @beConfigurable
  @beEnumerable
  public toString(): string {
    return JSON.stringify(this.fork);
  }

  @beNotWritable
  @beConfigurable
  @beEnumerable
  public toValue(): FVal {
    return JSON.parse(this.toString());
  }

  @beNotWritable
  @beConfigurable
  @beEnumerable
  public static fromValueOf<TVal>(value: Functor<TVal>): Functor<TVal> {
    return new Functor<TVal>(JSON.parse(JSON.stringify(value.fork)));
  }
}

void beConfigurable;
void beEnumerable;
void beNotConfigurable;
void beNotEnumerable;
void beNotWritable;
void beWritable;
void configurable;
void enumerable;
void writable;
