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
