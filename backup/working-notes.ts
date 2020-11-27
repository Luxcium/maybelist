export default null;

// public map<R>(fn: (val: AVal) => R): Apply<R>{

// }

// public ap<R>(apply: Apply<(val: AVal) => Apply<R>>): Apply<R> {
//   return apply;
// }
// // public ap<R>(apply: Apply<(val: AVal) => Apply<R>>): Apply<R>{
// //    return apply as any as  Apply<R>
// // return apply.map<Apply<R>>((fn: (val: AVal) => R) => this.map<R>(x => fn(x)))




// /* <R> */
// public ap(functor: Functor<(val: U[]) => any>) /*: Maybelist<any> */ {
//   return functor.map<Maybelist<any>>((fx: (val: any /* MVal[] */) => any) =>
//     this.map((x:U) => fx(x))),
//   ).fork;
// }

// public ap<R>(functor: Functor<FnAtoB<MVal, R>>): Maybelist<R> {
//   return functor.map<Maybelist<R>>((fn: (val: MVal) => R) =>
//     this.map<R>(x => fn(x)),
//   ).fork;
// }

//  public chain<R>(fn: (val: MVal[]) => Maybelist<R>): Maybelist<R> {
//   return Maybelist.of<R>(super.chain(fn).fork);
//  }

// public chain<R>(fn: FnAtoB<MVal, Maybelist<R>>): Maybelist<R> {
//   return Maybelist.of<Maybelist<R>>(
//     this.map<Maybelist<R>>(x => fn(x)).fork,
//   ).fork;
// }

// public static of = <TVal>(...values: TVal[] | [TVal[]]): Maybelist<TVal> => {
//   if (values.length === 1) {
//     const value = values[0];
//     if (Array.isArray(value)) {
//       return new Maybelist<TVal>([...value]);
//     }
//   }

//   return new Maybelist<TVal>([...(values as TVal[])]);
// };
// public static fromValueOf<TVal>(value: Functor<TVal>): Monad<TVal> {
//   return Monad.of<TVal>(JSON.parse(JSON.stringify(value.fork)));
// }

// public static of<TVal>(...values: TVal[] | [TVal[]]) {
//   if (values.length === 1) {
//     const value = values[0];
//     if (Array.isArray(value)) {
//       return new Maybelist<TVal>([...value]);
//     }
//   }
//   return new Maybelist<TVal>([...(values as TVal[])]);
// }

// map(callbackfn: (value: T, index: number, array: T[]) => any, thisArg?: any): any[]
// public declare ['fantasy-land/map'];
// public |-···―――――――――――――――――――――――――――――――――――――――――――···-| map() |-···――― ~
// public map<R>(fn: (val: U) => R): Monad<R> {
//   return Monad.of<R>(
//     super.map<R>(x => fn(x)).fork,
//   );
// }
// public map(fx: FnAtoB<U, any>) {
//   return Maybelist.of(fx(this.fork));
// }

// // public declare ['fantasy-land/ap'];
// // public |-···――――――――――――――――――――――――――――――――――――――――――――···-| ap() |-···――― ~
// public ap(functor: Functor<FnAtoB<T, any>>) /*: Maybelist<any> */ {
//   return functor.map<Maybelist<any>>((fn: FnAtoB<T, any>) => this.map(fn))
//     .fork;
// }

// // public declare ['fantasy-land/chain'];
// // public |-···―――――――――――――――――――――――――――――――――――――――――···-| chain() |-···――― ~
// public chain(fn: FnAtoB<T, any>) {
//   return Maybelist.of(this.map(fn).fork).fork;
// }

// public static [Fantasy.of] = MaybeList.of;

// static |-···―――――――――――――――――――――――――――――――――――···-| fromValueOf() |-···――― ~
// public static fromValueOf<TVal>(value: Functor<TVal>): Maybelist<TVal> {
//   return Maybelist.of<TVal>(JSON.parse(JSON.stringify(value.fork)));
// }

// public constructor(value: U) {
//   super(value);
//   // this['fantasy-land/map'] = this.map;
//   // this['fantasy-land/ap'] = this.ap;
//   // this['fantasy-land/chain'] = this.chain;
// }
// // public declare ['fantasy-land/map'];
// public map<R>(fn: FnAtoB<U, R>) {
//   return super.map<R>(x => fn(x));
//   // return Monad.of(super.map(x => fn(x)).fork);
// }
// // public declare ['fantasy-land/ap'];
// public ap<R>(functor: Functor<FnAtoB<U, R>>) {
//   return functor.map((fn: (val: U) => R) => this.map<R>(x => fn(x))).fork;
// }
// // public declare ['fantasy-land/chain'];
// // public chain<R>(fn: FnAtoB<U, Maybelist<R>>): Maybelist<R> {
// //   return Maybelist.of<Maybelist<R>>(
// //     this.map<Maybelist<R>>(x => fn(x)).fork,
// //   ).fork;
// // }
// public chain<R>(fn: FnAtoB<U, R>) {
//   return this.map(fn).fork;
// }
// ――――――――

// // static ======================================================-| of() |-====
// // // ...values: TVal[] | [TVal[]]
// public static of = <TVal>(value: TVal[]): Maybelist<TVal> => {
//   return new Maybelist<TVal>(value);
// };
// // public static of = <TVal>(...values: TVal[] | [TVal[]]): Maybelist<TVal> => {
// //   if (values.length === 1) {
// //     const value = values[0];
// //     if (Array.isArray(value)) {
// //       return new Maybelist<TVal>([...value]);
// //     }
// //   }

// //   return new Maybelist<TVal>([...(values as TVal[])]);
// // };
// // public static fromValueOf<TVal>(value: Functor<TVal>): Monad<TVal> {
// //   return Monad.of<TVal>(JSON.parse(JSON.stringify(value.fork)));
// // }
// public constructor(value: U[]) {
//   super(value);
//   // this['fantasy-land/map'] = this.map;
//   // this['fantasy-land/ap'] = this.ap;
//   // this['fantasy-land/chain'] = this.chain;
// }
// // public declare ['fantasy-land/map'];
// public map(fx: (val: U[]) => any) {
//   return Maybelist.of(
//     super.map(x => fx(x)).fork,
//   );
// }
// // public declare ['fantasy-land/ap'];
// // public ap<R>(functor: Functor<FnAtoB<U[], R>>) {
// //   return functor.map<Maybelist<R>>(fn => this.map<R>(x => fn(x))).fork;
// // }
// // // public declare ['fantasy-land/chain'];
// public chain<R>(fx: FnAtoB<U[], Maybelist<R>>) {
//   return Maybelist.of<Maybelist<R>>(
//     this.map<Maybelist<R>>(x => fx(x)).fork,
//   ).fork;
// }

// extends Monad<Ts>
// implements IMaybelist<Ts>, IChain<Ts>, IApply<Ts>, IMonad<Ts>, IFunctor<Ts>
// static |-···――――――――――――――――――――――――――――――――――――――――――――――···-| of() |-···――― ~
// public static of = <T, R extends Array<T> = T[]>(...values: R | [R]) => {
//   if (values.length === 1) {
//     const value = values[0];
//     if (Array.isArray(value)) {
//       return new Maybelist<R>([...value]);
//     }
//   }

//   return new Maybelist<R>([...(values as R)]);
// };
// public static of = <TVal>(value: TVal): Maybelist<TVal> => {
//   return new Maybelist<TVal>(value);
// };
