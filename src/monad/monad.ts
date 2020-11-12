import { Functor } from '..';

export type FnAtoB<A, B> = (val: A) => B;

export class Monad<MVal> extends Functor<MVal> {
  public static of<TVal>(value: TVal): Monad<TVal> {
    return new Monad<TVal>(value);
  }

  public static fromValueOf<TVal>(value: Monad<TVal>): Monad<TVal> {
    return new Monad<TVal>(JSON.parse(JSON.stringify(value.fork)));
  }

  public constructor(value: MVal) {
    super(value);
  }

  public ap<R>(c: Monad<FnAtoB<MVal, R>>): Monad<R> {
    return c.map<Monad<R>>((fn: (val: MVal) => R) => this.map<R>(x => fn(x)))
      .fork;
  }

  public chain<R>(fn: FnAtoB<MVal, Monad<R>>): Monad<R> {
    return Monad.of<Monad<R>>(
      this.map<Monad<R>>(x => fn(x)).fork,
    ).fork;
  }

  public map<R>(fn: (val: MVal) => R): Monad<R> {
    // return new Functor<R>(fn(this._value));
    return Monad.of(
      super.map<R>(x => fn(x)).fork,
    );
  }

  public get fork(): MVal {
    return this._value;
  }

  public toString(): string {
    return JSON.stringify(this);
  }

  public toValue(): MVal {
    return JSON.parse(this.toString());
  }
}

// can put a sub class in a variable of parent class type
const myFunct: Functor<number> = Monad.of<number>(42);

console.log(myFunct.map<number>((x: number) => x * 2)); // Monad { _value: 84 }
