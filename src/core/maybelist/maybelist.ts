import { Functor, Monad } from '../../classes';
import { BaseClass, Kind, KindType } from '../../classes/base/base';
import { FnAtoB, IMonad } from '../../types';
import { promiseOf } from '../../util';
import {
  CallbackfnT,
  CallbackfnU,
  FMapper,
  FnMapList,
  FnMapList_PM,
  FnMapListMP,
  ListMap,
  ListMap_PM,
  ListMapMP,
  MapList,
  MapList_PM,
  MapListMP,
  T_PT_,
} from './types';

const MaybelistKind: KindType = new Kind('MAYBELIST');

/*
~~===~···~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~···~=== ~~
*/
class Maybelist<
  Val = unknown,
  MLVal extends Array<Val> = Val[]
> extends BaseClass<MLVal> {
  /* implements IMaybelist<Val> */
  // #region =======-| constructor |-===========================================≈

  // static |-···――――――――――――――――――――――――――――――――――――――···-| fromTVal() |-···――― ~
  public static of<TVal>(...values: TVal[] | [TVal[]]) {
    if (values.length === 1) {
      const value = values[0];
      if (Array.isArray(value)) {
        return new Maybelist<TVal>(value as TVal[], null);
      }
    }
    return new Maybelist<TVal>(values as TVal[], null);
  }

  public static fromValueOfx<xTVal>(value: Functor<xTVal[]>): Maybelist<xTVal> {
    return Maybelist.of<xTVal>(value.clone);
  }

  // readonly ==================================================-| values |-====
  protected readonly _list!: Val[];

  // readonly ==================================================-| length |-====
  protected readonly _length!: number;

  // readonly =================================================-| nothing |-====
  protected readonly _isNothing!: boolean;

  // readonly =============================================-| isUndefined |-====
  protected readonly _isLengthOne!: boolean;

  // readonly =============================================-| isUndefined |-====
  protected readonly _isLengthZero!: boolean;

  // readonly ==================================================-| isNull |-====
  protected readonly _isNull!: boolean;

  // readonly =============================================-| isUndefined |-====
  protected readonly _isUndefined!: boolean;

  // constructor ============================================-| Maybelist |-====
  // protected constructor(value: MLVal, isNothing = false) {
  protected constructor(
    maybelistValue: MLVal,
    KIND?: KindType | string | null,
    isNothing = false,
  ) {
    super(maybelistValue as MLVal, MaybelistKind as KindType);
    super._addKINDS(KIND as KindType);
    this._list = maybelistValue;
    const maybelist = {
      _value: {
        configurable: false,
        enumerable: false,
        maybelistValue,
        writable: false,
      },
      isLengthOne: {
        configurable: false,
        enumerable: maybelistValue.length === 1,
        value: maybelistValue.length === 1,
        writable: false,
      },
      isLengthZero: {
        configurable: false,
        enumerable: maybelistValue.length === 0,
        value: maybelistValue.length === 0,
        writable: false,
      },
      isNothing: {
        configurable: false,
        enumerable: false,
        value: isNothing,
        writable: false,
      },
      isNull: {
        configurable: false,
        enumerable: maybelistValue.length === 1 && maybelistValue[0] === null,
        value: maybelistValue.length === 1 && maybelistValue[0] === null,
        writable: false,
      },
      length: {
        enumerable: maybelistValue.length > 1,
        value: maybelistValue.length,
        configurable: false,
        writable: false,
      },
      isUndefined: {
        configurable: false,
        enumerable:
          maybelistValue.length === 1 && maybelistValue[0] === undefined,
        value: maybelistValue.length === 1 && maybelistValue[0] === undefined,
        writable: false,
      },
      list: {
        maybelistValue,
        enumerable: true,
        configurable: false,
        writable: false,
      },
    };

    if (
      (maybelistValue.length === 1 && maybelistValue[0] == null) ||
      maybelistValue.length === 0
    ) {
      maybelist.isNothing.value = true;
      maybelist.isNothing.enumerable = false;
      maybelist.list.enumerable = false;
    }

    Object.defineProperties(this, maybelist);
  }
  // #endregion =======-| constructor |-===========================================≈
  // #region =======-| Flags |-=================================================≈

  // get |-···―――――――――――――――――――――――――――――――――――――···-| length |-···――――――···-|
  public get length(): number {
    return this._length;
  }

  // get |-···――――――――――――――――――――――――――――――――――···-| isNothing |-···――――――···-|
  private get isNothing(): boolean {
    return this._isNothing;
  }

  // get |-···――――――――――――――――――――――――――――――――···-| isLengthOne |-···――――――···-|
  private get isLengthOne(): boolean {
    return this._isLengthOne;
  }

  // get |-···―――――――――――――――――――――――――――――――···-| isLengthZero |-···――――――···-|
  private get isLengthZero(): boolean {
    return this._isLengthZero;
  }

  // get |-···―――――――――――――――――――――――――――――――――――――···-| isNull |-···――――――···-|
  private get isNull(): boolean {
    return this._isNull;
  }

  // get |-···――――――――――――――――――――――――――――――――···-| isUndefined |-···――――――···-|
  private get isUndefined(): boolean {
    return this._isUndefined;
  }

  // get ==================================================-| hasSomeNull |-====
  private get hasNull(): boolean {
    return this.fork.some(element => element === null, this);
  }

  // get =============================================-| hasSomeUndefined |-====
  private get hasUndefined(): boolean {
    return this.fork.some(element => element === undefined, this);
  }

  // get =============================================-| hasSomeUndefined |-====
  private get hasNullOrUndefined(): boolean {
    return this.hasNull || this.hasUndefined;
  }

  // get ========================================================-| flags |-====
  public get flags() {
    return {
      hasNull: this.hasNull,
      hasNullOrUndefined: this.hasNullOrUndefined,
      hasUndefined: this.hasUndefined,
      isLengthOne: this.isLengthOne,
      isLengthZero: this.isLengthZero,
      isNothing: this.isNothing,
      isNull: this.isNull,
      isUndefined: this.isUndefined,
      length: this.length,
    };
  }

  // get =====================================================-| getFlags |-====
  public get getFlags() {
    // return flags;
    // # ZUBL-NUL1
    // # 1000-1000
    // # 0110-1101
    // # 0011-1011
    // # 0110-0100
    // # 0011-0010
    // # 0000-0001
    //  # 0000-0000
    const { boolToNum } = Maybelist;
    const flags = [
      [
        boolToNum(this.flags.isLengthZero),
        boolToNum(this.flags.isUndefined),
        boolToNum(this.flags.hasNullOrUndefined),
        boolToNum(this.flags.isNull),
      ],
      [
        boolToNum(this.flags.isNothing),
        boolToNum(this.flags.hasUndefined),
        boolToNum(this.flags.hasNull),
        boolToNum(this.flags.isLengthOne),
      ],
    ];

    return Number(`0b${flags.flatMap(t => t).join('')}`);
  }

  // #endregion ====-| Flags |-=================================================≈
  // #region =======-| Iterator |-==============================================≈

  // public =================================================-| entries() |-====

  public entries() {
    return this.fork.entries();
  }

  // public ====================================================-| keys() |-====

  public keys() {
    return this.fork.keys();
  }

  // public ==================================================-| values() |-====

  public values() {
    return this.fork.values();
  }

  // ======================================================-| [n: number] |-====
  readonly [n: number]: Val;

  // iterator ====================================-| *[Symbol.iterator]() |-====
  public *[Symbol.iterator]() {
    yield* this._list;
  }
  // #endregion =======-| Iterator |-==============================================≈
  // #region =======-| IterationMethods |-======================================≈

  // void Array.prototype.every; //--+
  // void Array.prototype.filter; //--+
  // void Array.prototype.find; //--+
  // void Array.prototype.findIndex; //--+
  // void Array.prototype.forEach; //--+
  // void Array.prototype.map; //--!!
  // void Array.prototype.reduce; //--+
  // void Array.prototype.reduceRight; //--+
  // void Array.prototype.some; //--+

  // public ===================================================-| every() |-====

  public every<S extends Val>(
    predicate: (value: Val, index: number, array: Val[]) => value is S,
    thisArg?: any,
  ): this is S[];

  every(
    predicate: (value: Val, index: number, array: Val[]) => unknown,
    thisArg?: any,
  ): boolean {
    return this.fork.every(predicate, thisArg);
  }

  // public ==================================================-| filter() |-====

  public filter<S extends Val>(
    predicate: (value: Val, index: number, array: Val[]) => value is S,
    thisArg?: any,
  ): Maybelist<S>;

  filter(
    predicate: (value: Val, index: number, array: Val[]) => unknown,
    thisArg?: any,
  ): Maybelist<Val> {
    return Maybelist.of(...this.fork.filter(predicate, thisArg));
  }

  // public ====================================================-| find() |-====

  public find<S extends Val>(
    predicate: (this: Val, value: Val, index: number, obj: Val[]) => value is S,
    thisArg?: any,
  ): S | undefined; // Maybelist<undefined>;

  find(
    predicate: (value: Val, index: number, obj: Val[]) => unknown,
    thisArg?: any,
  ): Val | undefined {
    // Maybelist<T | undefined>
    return this.fork.find(predicate, thisArg);
  }

  // public ====================================================-| find() |-====

  findIndex(
    predicate: (value: Val, index: number, obj: Val[]) => unknown,
    thisArg?: any,
  ): number {
    return this.fork.findIndex(predicate, thisArg);
  }

  // public =================================================-| forEach() |-====

  public forEach(
    callbackfn: (value: Val, index: number, array: Val[]) => void,
    thisArgument?: any,
  ): void {
    return this.fork.forEach(callbackfn, thisArgument);
  }

  // public map<U>(
  //   callbackfn: (value: T, index: number, array: T[]) => U,
  //   thisArg?: any,
  // ): Maybelist<U> {
  //   return Maybelist.of<U>(
  //     super.map<U[]>(values => values.map<U>(callbackfn, thisArg)).fork,
  //   );
  // }
  // public ==================================================-| reduce() |-====

  public reduce<U>(
    callbackfn:
      | ((
          previousValue: U,
          currentValue: Val,
          currentIndex: number,
          array: Val[],
        ) => U)
      | ((
          previousValue: Val,
          currentValue: Val,
          currentIndex: number,
          array: Val[],
        ) => Val),
    initialValue?: U | Val,
  ): U | Val {
    if (!initialValue) {
      return this.fork.reduce(callbackfn as CallbackfnT<Val>);
    }
    return this.fork.reduce<Val | U>(
      callbackfn as CallbackfnU<U, Val>,
      initialValue,
    );
  }

  // public =============================================-| reduceRight() |-====

  public reduceRight<U>(
    callbackfn:
      | ((
          previousValue: U,
          currentValue: Val,
          currentIndex: number,
          array: Val[],
        ) => U)
      | ((
          previousValue: Val,
          currentValue: Val,
          currentIndex: number,
          array: Val[],
        ) => Val),
    initialValue?: U | Val,
  ): U | Val {
    if (!initialValue) {
      return this.fork.reduceRight(callbackfn as CallbackfnT<Val>);
    }
    return this.fork.reduceRight<Val | U>(
      callbackfn as CallbackfnU<U, Val>,
      initialValue,
    );
  }

  // public ====================================================-| some() |-====

  public some(
    predicate: (value: Val, index: number, array: Val[]) => unknown,
    thisArg?: any,
  ): boolean {
    return this.fork.some(predicate, thisArg);
  }
  // #endregion ====-| IterationMethodes |-=====================================≈
  // #region =======-| AccessorsMethods |-======================================≈

  // Array.prototype.concat()
  // Array.prototype.includes()
  // Array.prototype.indexOf()
  // Array.prototype.join()
  // Array.prototype.lastIndexOf()
  // Array.prototype.slice()
  // Array.prototype.toSource()
  // Array.prototype.toString()
  // Array.prototype.toLocaleString()

  // public ==================================================-| concat() |-====

  public concat(...items: ConcatArray<Val>[]): Maybelist<Val> {
    return Maybelist.of<Val>(...this.fork.concat(...items));
  }

  // public ================================================-| includes() |-====

  public includes(searchElement: Val, fromIndex?: number): boolean {
    return this.fork.includes(searchElement, fromIndex);
  }

  // public =================================================-| indexOf() |-====

  public indexOf(searchElement: Val, fromIndex?: number): IMonad<number> {
    return Monad.from(this.fork.indexOf(searchElement, fromIndex));
  }

  // public ====================================================-| join() |-====

  /**
   * Adds all the elements of a Maybelist separated by the specified separator
   * string.
   *
   * @param separator - A string used to separate one element of a Maybelist
   * from the next in the resulting String. If omitted, the Maybelist elements
   * are separated with a comma.
   */
  public join(separator?: string): string {
    return this.fork.join(separator);
  }

  // public =============================================-| lastIndexOf() |-====

  public lastIndexOf(searchElement: Val, fromIndex?: number): IMonad<number> {
    return Monad.from(this.fork.lastIndexOf(searchElement, fromIndex));
  }

  // public ===================================================-| slice() |-====

  /**
   * Returns a section of an Maybelist.
   *
   * @param start - The beginning of the specified portion of the Maybelist.
   * @param end - The end of the specified portion of the Maybelist. This is
   *  exclusive of the element at the index 'end'.
   */
  public slice(start?: number, end?: number): Maybelist<Val> {
    return Maybelist.of(...this.fork.slice(start, end));
  }

  // public ================================================-| toSource() |-====

  // Obsolete
  // This feature is obsolete. Although it may still work in some browsers, its
  // use is discouraged since it could be removed at any time.Try to avoid
  // using it.

  // public ================================================-| toString() |-====

  public toString(): string {
    return this.fork.toString();
  }

  // public ==========================================-| toLocaleString() |-====

  public toLocaleString(): string {
    return this.fork.toLocaleString();
  }
  // #endregion ====-| AccessorsMethods |-======================================≈
  // #region =======-| unMutatingMethods |-=====================================≈

  // # Array.prototype.copyWithin()
  // # Array.prototype.fill()
  // # Array.prototype.reverse()
  // # Array.prototype.sort()
  // # Array.prototype.splice()

  // public ===============================================-| copyWithin() |-====

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  public copyWithin(
    target: number,
    start: number,
    end?: number | undefined,
  ): Maybelist<Val> {
    return Maybelist.of(...this.fork.copyWithin(target, start, end));
  }

  // public ====================================================-| fill() |-====

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  public fill(value: Val, start?: number, end?: number): Maybelist<Val> {
    return Maybelist.of(...this.fork.fill(value, start, end));
  }

  // public =================================================-| reverse() |-====

  public reverse(): Maybelist<Val> {
    return Maybelist.of(...this.fork.reverse());
  }

  // public ====================================================-| sort() |-====

  public sort(compareFn?: (a: Val, b: Val) => number): Maybelist<Val> {
    return Maybelist.of(...this.fork.sort(compareFn));
  }

  // public ==================================================-| splice() |-====

  public splice(start: number, deleteCount?: number): Maybelist<Val> {
    return Maybelist.of(...this.fork.splice(start, deleteCount));
  }

  // #endregion ====-| unMutatingMethodes |-====================================≈
  // #region =======-| QueuesAndStacks |-=======================================≈

  // Array.prototype.pop()
  // Array.prototype.push()
  // Array.prototype.shift()
  // Array.prototype.unshift()

  // public =====================================================-| pop() |-====

  /**
   *
   * Alias for rpop. Removes the last element from the queueAndStacks and returns
   * it in a queueAndStacks or null on empty Maybelist.
   *
   */
  public pop(): Maybelist<Val | null> {
    return this.rpop();
  }

  // public ====================================================-| push() |-====

  /**
   * Alias for rpush. Appends new elements to a queueAndStacks, and returns a new queueAndStacks
   *  with thoses elements.
   *
   * @param items - New elements of the Array.
   */
  public push<R = Val>(...items: R[]): Maybelist<R> {
    return this.rpush<R>(...items);
  }

  // public ===================================================-| shift() |-====

  /**
   *
   * Alias for lpop(). Removes the first element from the queueAndStacks and returns
   * it in a queueAndStacks or null on empty Maybelist.
   *
   */
  public shift(): Maybelist<Val | null> {
    return this.lpop();
  }

  // public =================================================-| unshift() |-====

  /**
   * Alias for lpush. Inserts new elements at the start of an queueAndStacks.
   * and returns a new queueAndStacks with thoses elements
   *
   * @param items -  Elements to insert at the start of the Array.
   */
  public unshift<R = Val>(...items: R[]): Maybelist<R> {
    return this.lpush<R>(...items);
  }

  // public ===================================================-| rpush() |-====

  /**
   *
   * Same as push. Appends new elements to a queueAndStacks, and returns a new
   * queueAndStacks with thoses elements.
   *
   * @param items - New elements of the Array.
   */
  public rpush<R = Val>(...items: R[]): Maybelist<R> {
    const myTempList = this.fork as any[];
    myTempList.push(...items);
    return Maybelist.of<R>(...myTempList);
  }

  // public ====================================================-| rpop() |-====

  /**
   *
   * Same as pop(). Removes the last element from the queueAndStacks and returns it
   * in a queueAndStacks or null on empty Maybelist.
   *
   */
  public rpop(): Maybelist<Val | null> {
    const forked = this.fork;
    if (forked.length === 0) {
      return Maybelist.of(null);
    }
    const popedValue = forked.pop();
    return Maybelist.of(popedValue ?? null);
  }

  // public ==================================================-| rpoped() |-====

  /**
   *
   * Same as poped().
   *
   */
  public rpoped(): Maybelist<Val | null> {
    const forked = this.fork;
    if (forked.length === 0) {
      return Maybelist.of(...[null]);
    }
    if (forked.length === 1) {
      return Maybelist.of(...[null]);
    }
    forked.pop();
    return Maybelist.of(...forked);
  }

  // public ===================================================-| lpush() |-====

  /**
   * Same as unshift. Inserts new elements at the start of an queueAndStacks.
   * and returns a new queueAndStacks with thoses elements
   *
   * @param items -  Elements to insert at the start of the Array.
   */
  public lpush<R = Val>(...items: R[]): Maybelist<R> {
    const myTempList = this.fork as any[];
    myTempList.unshift(...items);
    return Maybelist.of<R>(...myTempList);
  }

  // public ====================================================-| lpop() |-====

  /**
   *
   * Same as shift(). Alias for lpop. Removes the first element from the
   * queueAndStacks and returns it in a queueAndStacks or null on empty Maybelist.
   *
   */
  public lpop(): Maybelist<Val | null> {
    const forked = this.fork;
    if (forked.length === 0) {
      return Maybelist.of(null);
    }
    const shiftedValue = forked.shift();
    return Maybelist.of(shiftedValue ?? null);
  }

  // public ==================================================-| lpoped() |-====

  /**
   *
   * Same as shifted().
   *
   */
  public lpoped(): Maybelist<Val | null> {
    const forked = this.fork;
    if (forked.length === 0) {
      return Maybelist.of(...[null]);
    }
    if (forked.length === 1) {
      return Maybelist.of(...[null]);
    }
    forked.shift();
    return Maybelist.of(...forked);
  }

  // public ===================================================-| poped() |-====

  /**
   *
   * Alias for rpoped().
   *
   */
  public poped(): Maybelist<Val | null> {
    return this.rpoped();
  }

  // public =================================================-| shifted() |-====

  /**
   *
   * Alias for lpoped().
   *
   */
  public shifted(): Maybelist<Val | null> {
    return this.lpoped();
  }

  // #endregion ====-| QueuesAndStacks |-=======================================≈
  // #region =======-| HeadsAndTails |-=========================================≈

  // get first() // left most
  // get last() // right most
  // get theOnlyOne() // undefined if not isLengthOne in the Maybelist
  // get lhead()
  // get rtail()
  // get rhead()
  // get ltail()
  // get head()
  // get tail()
  // get getHeadOrTail()
  // get forkHeadOrTail()
  // get forkHeadOrGetTail()
  // get getHeadAndTail()
  // get forkHeadAndGetTail()
  // get forkHeadAndTail()

  // get ======================================================-| first() |-====
  public get first(): Maybelist<Val | null> {
    return this.lhead;
  }

  // get =======================================================-| last() |-====
  public get last(): Maybelist<Val | null> {
    return this.rhead;
  }

  // get =================================================-| theOnlyOne() |-====
  public get getTheOnlyOne(): Val | null | undefined {
    if (!this._isLengthOne) {
      return;
    }
    if (
      this.rhead.forkHeadOrGetTail.head === this.lhead.forkHeadOrGetTail.head
    ) {
      return this.rhead.forkHeadOrGetTail.head;
    }
    throw new Error('this.isLengthOne && NOT(this.rhead === this.lhead)');
  }

  // get ======================================================-| lhead() |-====
  public get lhead(): Maybelist<Val | null> {
    return Maybelist.of(...this.lpop());
  }

  // get ======================================================-| rtail() |-====
  public get rtail(): Maybelist<Val | null> {
    return Maybelist.of(...this.lpoped());
  }

  // get ======================================================-| rhead() |-====
  public get rhead(): Maybelist<Val | null> {
    return Maybelist.of(...this.rpop());
  }

  // get ======================================================-| ltail() |-====
  public get ltail(): Maybelist<Val | null> {
    return Maybelist.of(...this.rpoped());
  }

  // get =======================================================-| head() |-====
  public get head(): Maybelist<Val | null> {
    return this.lhead;
  }

  // get =======================================================-| tail() |-====
  public get tail(): Maybelist<Val | null> {
    return this.rtail;
  }

  // get ================================================-| getHeadOrTail |-====
  public get getHeadOrTail() {
    const { head } = this;
    const { tail } = this;
    return {
      head,
      tail,
    };
  }

  // get ===============================================-| forkHeadOrTail |-====
  public get forkHeadOrTail() {
    const head = this.head.fork[0];
    const tail = this.tail.fork;
    return {
      head,
      tail,
    };
  }

  // get ============================================-| forkHeadOrGetTail |-====
  public get forkHeadOrGetTail() {
    const head = this.head.fork[0];
    const { tail } = this;
    return {
      head,
      tail,
    };
  }

  // get ===============================================-| getHeadAndTail |-====
  public get getHeadAndTail() {
    const { head } = this;
    const { tail } = this;
    return [head, tail];
  }

  // get ===========================================-| forkHeadAndGetTail |-====
  public get forkHeadAndGetTail() {
    const head = this.head.fork[0];
    const { tail } = this;
    return [head, tail];
  }

  // get ==============================================-| forkHeadAndTail |-====
  public get forkHeadAndTail(): [Val | null, (Val | null)[]] {
    const head = this.head.fork[0];
    const tail = this.tail.fork;
    return [head, tail];
  }

  // #endregion ====-| HeadsAndTails |-=========================================≈
  // #region =======-| Utilities |-=============================================≈
  // static =================================================-| boolToNum |-====
  public static async promiseOf<V>(value: V | Promise<V>): Promise<V> {
    return Promise.resolve(value).then(async x => x);
  }

  public get promiseOf(): Promise<Maybelist<Val>> {
    return Promise.resolve(Maybelist.of<Val>(this.fork)).then(async x => x);
  }

  //   public async  promiseOf<V>(value: V | Promise<V>): Promise<V> {
  //   return Promise.resolve(value).then(async x => x);
  // }

  // static =================================================-| boolToNum |-====
  protected static boolToNum = (b: boolean): 0 | 1 => {
    if (b) {
      return 1;
    }
    return 0;
  };

  // public ================================================-| getClone() |-====

  public getClone(): Maybelist<Val> {
    void Maybelist.promiseOf;
    return Maybelist.of<Val>(...this.clone);
  }

  // #endregion ====-| Utilities |-=============================================≈
  // #region =======-| Fantasy |-===============================================≈

  // // public ======================================================-| ap() |-====

  // @beConfigurable
  // @beWritable
  // @beNotEnumerable
  // public [Fantasy.ap]<R>(M: IMonad<(val: Val[]) => R>): IMonad<R> {
  //   return this.ap<R>(M);
  // }

  // public ap<R>(M: IMonad<(val: Val[]) => R>): IMonad<R> {
  //   return M.map<IMonad<R>>((fx: (val: Val[]) => R) => this.map<R>(x => fx(x)))
  //     .fork;
  // }

  // // public =====================================================-| fAp() |-====

  // public fAp<R = any>(
  //   M: Maybelist<(val: Val, index: number, array: Val[]) => R>,
  // ): Maybelist<R> {
  //   const fnx =
  //     M.getTheOnlyOne ||
  //     ((val: Val, index: number, array: Val[]): R => {
  //       void [index, array];
  //       return (val as any) as R;
  //     });
  //   return Maybelist.of(...this.fMap<R>(fnx));
  // }

  // // public ==================================================-| flatAp() |-====

  // public flatAp<R = any>(
  //   M: IMonad<(val: Val, index: number, array: Val[]) => R>,
  // ): Maybelist<R> {
  //   return Maybelist.of(...M.map(fx => this.flatMap(fx).fork).fork);
  // }

  // // public ===================================================-| chain() |-====

  // @beConfigurable
  // @beWritable
  // @beNotEnumerable
  // public [Fantasy.chain]<R>(fn: (val: Val[]) => IMonad<R>): IMonad<R> {
  //   return this.chain<R>(fn);
  // }

  // public chain<R>(fn: (val: Val[]) => IMonad<R>): IMonad<R> {
  //   return super.chain(fn);
  // }

  // // public ==================================================-| fChain() |-====

  // public fChain<R = any>(
  //   fn: (val: Val, index: number, array: Val[]) => Maybelist<R>,
  // ): Maybelist<R> {
  //   return Maybelist.of(
  //     ...this.chain<R[]>(values =>
  //       Monad.of(
  //         values.map((value: Val, index: number, array: Val[]) =>
  //           fn(value, index, array),
  //         ),
  //       ),
  //     ).fork,
  //   );
  // }

  // // public ===============================================-| flatChain() |-====

  // public flatChain<R = any>(
  //   fn: (val: Val, index: number, array: Val[]) => R,
  // ): Maybelist<R> {
  //   return Maybelist.of(
  //     ...this.chain<R[]>(values => Monad.of(values.flatMap(fn))).fork,
  //   );
  // }

  // #endregion ====-| Fantasy |-===============================================≈
  // #region =======-| MISCELLANEOUS |-=========================================≈

  // // public =================================================-| flatMap() |-====

  // public flatMap<R = any>(
  //   fn: (val: Val, index: number, array: Val[]) => R,
  // ): Maybelist<R> {
  //   return Maybelist.of(...this.map(values => values.flatMap(fn)).fork);
  // }

  // public ====================================================-| fMap() |-====

  public map<R = any>(fn: FMapper<Val, R>): Maybelist<R> {
    return Maybelist.of(
      ...this.clone.map((value: Val, index: number, array: Val[]) =>
        fn(value, index, array),
      ),
    );
  }

  // // public =====================================================-| map() |-====

  // @beConfigurable
  // @beWritable
  // @beNotEnumerable
  // public [Fantasy.map]<R = any>(fn: (val: Val[]) => R): IMonad<R> {
  //   return this.map<R>(fn);
  // }

  // public map<R = any>(fn: (val: Val[]) => R): IMonad<R> {
  //   return super.map(x => fn(x));
  // }

  // // static ===============================================-| fromAsync() |-====
  // public static fromAsync = <T = any>(value: T[]) => {
  //   return Maybelist.of<Promise<T>>(
  //     value.map(async item => promiseOf<T>(item)),
  //   );
  // };

  // // static =================================================-| ofAsync() |-====
  // public static ofAsync = <T = any>(...value: T[]) => {
  //   return Maybelist.of<Promise<T>>(
  //     ...value.map(async item => promiseOf<T>(item)),
  //   );
  // };

  // // public ====================================================-| will() |-====

  // public async will() {
  //   return Maybelist.of(...(await Promise.all(this.fork)));
  // }

  // // public ================================================-| willFMap() |-====

  // public async willFMap<R = any>(fn: FMapper<Val, R>): Promise<Maybelist<R>> {
  //   return Maybelist.of(...(await Promise.all(this.fork))).fMap(fn);
  // }

  // // public =================================================-| willMap() |-====

  // public thenMap<R>(fn: FnAtoB<Val, R>): Maybelist<Promise<R>> {
  //   const step1 = this.fMap(async item => promiseOf(item).then(t => fn(t)));
  //   return Maybelist.of(...step1);
  // }

  // // public ================================================-| thenFMap() |-====

  // public thenFMap<R = any>(
  //   fn: FMapper<Val, R> | FullFMapperThen<Val, R>,
  // ): Maybelist<Promise<R>> {
  //   return Maybelist.of(
  //     ...this.map(values =>
  //       values.map(async (value: Val, index: number, array: Val[]) =>
  //         promiseOf(fn(value, index, array)),
  //       ),
  //     ).fork,
  //   );
  // }

  // #endregion ====-| MISCELLANEOUS |-=========================================≈
  // #region =======-| ThenableTools |-=========================================≈

  // #region ======= !(A) ==== <R> =============================================≈
  // private static _mapValue = <T, R>(mapFunction: FnAtoB<T, R>, value: T): R =>
  //   mapFunction(value);

  // private static __mapValue = <T, R>(
  //   mapFunction: FnAtoB<T, R>,
  // ): MapValue<T, R> => (value: T): R =>
  //   Maybelist._mapValue(mapFunction, value);

  // private static __valueMap = <T>(value: T): ValueMap<T> => <R>(
  //   mapFunction: FnAtoB<T, R>,
  // ): R => Maybelist._mapValue(mapFunction, value);

  // private static __fnMapValue = <T, R>(
  //   mapFunction: FnAtoB<T, R>,
  // ): FnMapValue<T, R> => (value: () => T): R =>
  //   Maybelist._mapValue(mapFunction, value());

  // private static __fnValueMap = <T>(value: () => T): ValueMap<T> => <R>(
  //   mapFunction: FnAtoB<T, R>,
  // ): R => Maybelist._mapValue(mapFunction, value());
  // #endregion ======= !(A) ==== <R> ==========================================≈
  // #region ======= !(B) ==== Promise<R> ======================================≈

  // private static _mapValue_P = async <T, R>(
  //   mapFunction: FnAtoB<T, R>,
  //   value: T_PT_<T>,
  // ): Promise<R> =>
  //   promisseOf(promisseOf(value).then((val: T) => mapFunction(val))).then(
  //     x => x,
  //   );

  // private static __mapValue_P = <T, R>(
  //   mapFunction: FnAtoB<T, R>,
  // ): MapThenValue<T, R> => async (value: T_PT_<T>): Promise<R> =>
  //   Maybelist._mapValue_P(mapFunction, value);

  // private static __valueMap_P = <T>(value: T_PT_<T>): ValueMap_P<T> => async <
  //   R
  // >(
  //   mapFunction: FnAtoB<T, R>,
  // ): Promise<R> => Maybelist._mapValue_P(mapFunction, value);

  // private static __fnMapValue_P = <T, R>(
  //   mapFunction: FnAtoB<T, R>,
  // ): FnMapThenValue<T, R> => async (value: () => T_PT_<T>): Promise<R> =>
  //   Maybelist._mapValue_P(mapFunction, value());

  // private static __fnValueMap_P = <T>(
  //   value: () => T_PT_<T>,
  // ): ValueMap_P<T> => async <R>(mapFunction: FnAtoB<T, R>): Promise<R> =>
  //   Maybelist._mapValue_P(mapFunction, value());
  // #endregion ======= !(B) ==== Promise<R> ===================================≈
  // #region =======-|(C) ==== Maybelist<R> ====================================≈

  private static _mapList = <U, R>(
    mapFunction: FnAtoB<U, R>,
    list: Maybelist<U>,
  ): Maybelist<R> => list.map<R>(mapFunction);

  private static __mapList = <U, R>(
    mapFunction: FnAtoB<U, R>,
  ): MapList<U, R> => (list: Maybelist<U>): Maybelist<R> =>
    Maybelist._mapList(mapFunction, list);

  private static __listMap = <U>(list: Maybelist<U>): ListMap<U> => <R>(
    mapFunction: FnAtoB<U, R>,
  ): Maybelist<R> => Maybelist._mapList(mapFunction, list);

  private static __fnMapList = <U, R>(
    mapFunction: FnAtoB<U, R>,
  ): FnMapList<U, R> => (list: () => Maybelist<U>): Maybelist<R> =>
    Maybelist._mapList(mapFunction, list());

  private static __fnListMap = <U>(list: () => Maybelist<U>): ListMap<U> => <R>(
    mapFunction: FnAtoB<U, R>,
  ): Maybelist<R> => Maybelist._mapList(mapFunction, list());

  // #endregion ==== (C) ==== Maybelist<R> =================================≈
  // #region ======= (D) ==== Maybelist<Promise<R>> ============================≈

  private static _mapListMP = <U, R>(
    mapFunction: FnAtoB<U, R>,
    list: Maybelist<Promise<U> | U>,
  ): Maybelist<Promise<R>> =>
    list.map(async i => promiseOf(i).then(v => mapFunction(v)));

  private static __mapListMP = <U, R>(
    mapFunction: FnAtoB<U, R>,
  ): MapListMP<U, R> => (list: Maybelist<Promise<U> | U>) =>
    Maybelist._mapListMP(mapFunction, list);

  private static __listMapMP = <U>(
    list: Maybelist<Promise<U> | U>,
  ): ListMapMP<U> => <R>(mapFunction: FnAtoB<U, R>): Maybelist<Promise<R>> =>
    Maybelist._mapListMP(mapFunction, list);

  private static __fnMapListMP = <U, R>(
    mapFunction: FnAtoB<U, R>,
  ): FnMapListMP<U, R> => (list: () => Maybelist<Promise<U> | U>) =>
    Maybelist._mapListMP(mapFunction, list());

  private static __fnListMapMP = <U>(
    list: () => Maybelist<Promise<U> | U>,
  ): ListMapMP<U> => <R>(mapFunction: FnAtoB<U, R>): Maybelist<Promise<R>> =>
    Maybelist._mapListMP(mapFunction, list());

  // #endregion ==== (D) ==== Maybelist<Promise<R>> ========================≈
  // #region ======= (E) ==== Promise<Maybelist<R>> ============================≈

  private static _mapList_PM = async <T, R>(
    mapFunction: FnAtoB<T, R>,
    maybelist: Promise<Maybelist<T>> | Maybelist<T>,
  ): Promise<Maybelist<R>> =>
    Maybelist.promiseOf(
      Maybelist.promiseOf(maybelist).then(list => list.map<R>(mapFunction)),
    );

  private static __mapList_PM = <T, R>(
    mapFunction: FnAtoB<T, R>,
  ): MapList_PM<T, R> => async (
    list: Promise<Maybelist<T>> | Maybelist<T>,
  ): Promise<Maybelist<R>> => Maybelist._mapList_PM(mapFunction, list);

  private static __listMap_PM = <T>(
    list: Promise<Maybelist<T>> | Maybelist<T>,
  ): ListMap_PM<T> => async <R>(
    mapFunction: FnAtoB<T, R>,
  ): Promise<Maybelist<R>> => Maybelist._mapList_PM(mapFunction, list);

  private static __fnMapList_PM = <T, R>(
    mapFunction: FnAtoB<T, R>,
  ): FnMapList_PM<T, R> => async (
    list: () => Promise<Maybelist<T>> | Maybelist<T>,
  ): Promise<Maybelist<R>> => Maybelist._mapList_PM(mapFunction, list());

  private static __fnListMap_PM = <T>(
    list: () => Promise<Maybelist<T>> | Maybelist<T>,
  ): ListMap_PM<T> => async <R>(
    mapFunction: FnAtoB<T, R>,
  ): Promise<Maybelist<R>> => Maybelist._mapList_PM(mapFunction, list());

  // #endregion ==== (E) ==== Promise<Maybelist<R>> ============================≈
  // #region ======= !(F) ==== Promise<Maybelist<Promise<R>>> ==================≈

  // private static _thenMapList_PMP = async <T, R>(
  //   mapFunction: FnAtoB<T, R>,
  //   list: Promise<Maybelist<Promise<T>>>,
  // ): Promise<Maybelist<Promise<R>>> =>
  //   promisseOf(
  //     promisseOf(list).then(l =>
  //       l.fMap<Promise<R>>(async i => promisseOf(i).then(v => mapFunction(v))),
  //     ),
  //   );
  // private static __mapList_PMP = <T, R>(
  //   mapFunction: FnAtoB<T, R>,
  // ): MapList_PMP<T, R> => async (
  //   list: Promise<Maybelist<Promise<T>>>,
  // ): Promise<Maybelist<Promise<R>>> =>
  //   Maybelist._thenMapList_PMP(mapFunction, list);

  // private static __listMap_PMP = <T>(
  //   list: Promise<Maybelist<Promise<T>>>,
  // ): ListMap_PMP<T> => async <R>(
  //   mapFunction: FnAtoB<T, R>,
  // ): Promise<Maybelist<Promise<R>>> =>
  //   Maybelist._thenMapList_PMP(mapFunction, list);

  // private static __fnMapList_PMP = <T, R>(
  //   mapFunction: FnAtoB<T, R>,
  // ): FnMapList_PMP<T, R> => async (
  //   list: () => Promise<Maybelist<Promise<T>>>,
  // ): Promise<Maybelist<Promise<R>>> =>
  //   Maybelist._thenMapList_PMP(mapFunction, list());

  // private static __fnListMap_PMP = <T>(
  //   list: () => Promise<Maybelist<Promise<T>>>,
  // ): ListMap_PMP<T> => async <R>(
  //   mapFunction: FnAtoB<T, R>,
  // ): Promise<Maybelist<Promise<R>>> =>
  //     Maybelist._thenMapList_PMP(mapFunction, list());

  // #endregion ======= !(F) ==== Promise<Maybelist<Promise<R>>> ===============≈
  // #region ======== (G) ==== as a function ===================================≈

  // ===========================================================================≈

  /**
   * First provide a `Maybelist<T>` and get a `ListMap`.
   * Then pass a `mapFunction` returns a `Maybelist<R>`
   * (property) listMap:
   */

  public static listMap: <U>(list: Maybelist<U>) => ListMap<U> =
    Maybelist.__listMap;

  // ===========================================================================≈

  /**
   * First provide a `M_<T_PT_<T>>` and get a `ListMapMP`.
   * Then pass a `mapFunction` returns a `MP_<R>`
   * (property) listMapMP:
   */
  public static listMapMP: <T>(list: Maybelist<T_PT_<T>>) => ListMapMP<T> =
    Maybelist.__listMapMP;

  // ===========================================================================≈

  /**
   * First provide a `mapFunction` and get a `MapList`.
   * Then pass a `Maybelist<T>` returns a `Maybelist<R>`
   * (property) mapList:
   */
  public static mapList: <T, R>(mapFunction: FnAtoB<T, R>) => MapList<T, R> =
    Maybelist.__mapList;

  // ===========================================================================≈

  /**
   * First provide a `mapFunction` and get a `MapThenList`.
   * Then pass a `list` (may list or promiseOf) will return a `PM_<R>`
   * (property) mapList_PM:
   */
  public static mapList_PM: <T, R>(
    mapFunction: FnAtoB<T, R>,
  ) => MapList_PM<T, R> = Maybelist.__mapList_PM;

  // ===========================================================================≈

  /**
   * First provide a `mapFunction` and get a `ListMapMP`.
   * Then pass a `M_<T_PT_<T>>` returns a `MP_<R>`
   * (property) mapListMP:
   */
  public static mapListMP: <T, R>(
    mapFunction: FnAtoB<T, R>,
  ) => MapListMP<T, R> = Maybelist.__mapListMP;

  // ===========================================================================≈

  /**
   * First provide a `()=> Maybelist<T>` and get a `ListMap`.
   * Then pass a `mapFunction` returns a `Maybelist<R>`
   * (property) fnListMap:
   */
  public static fnListMap: <T>(list: () => Maybelist<T>) => ListMap<T> =
    Maybelist.__fnListMap;

  // ===========================================================================≈

  /**
   * First provide a `()=> M_<T_PT_<T>>` and get a `ListMapMP`.
   * Then pass a `mapFunction` returns a `MP_<R>`
   * (property) fnListMapMP:
   */
  public static fnListMapMP: <T>(
    list: () => Maybelist<T_PT_<T>>,
  ) => ListMapMP<T> = Maybelist.__fnListMapMP;

  // ===========================================================================≈

  /**
   * First provide a `mapFunction` and get a `MapList`.
   * Then pass a `()=> Maybelist<T>` returns a `Maybelist<R>`
   * (property) mapList:
   */
  public static fnMapList: <T, R>(
    mapFunction: FnAtoB<T, R>,
  ) => FnMapList<T, R> = Maybelist.__fnMapList;

  // ===========================================================================≈

  /**
   * First provide a `mapFunction` and get a `MapThenList`.
   * Then pass a `()=> list` (may list or promiseOf) will return a `PM_<R>`
   * (property) mapList_PM:
   */
  public static fnMapList_PM: <T, R>(
    mapFunction: FnAtoB<T, R>,
  ) => FnMapList_PM<T, R> = Maybelist.__fnMapList_PM;

  // ===========================================================================≈

  /**
   * First provide a `mapFunction` and get a `ListMapMP`.
   * Then pass a `()=> M_<T_PT_<T>>` returns a `MP_<R>`
   * (property) mapListMP:
   */
  public static fnMapListMP: <U, R>(
    mapFunction: FnAtoB<U, R>,
  ) => FnMapListMP<U, R> = Maybelist.__fnMapListMP;

  // ===========================================================================≈

  public static promiseAllList = async <T>(x: Maybelist<Promise<T>>) => {
    return promiseOf(Maybelist.of<T>(await Promise.all(x.fork))).then(y => y);
  };

  // ===========================================================================≈

  // /**
  //  * First provide a `value<T>` and get a `ValueMap`.
  //  * Then pass a `mapFunction` returns an `R`.
  //  * (property) valueMap:
  //  */

  // public static valueMap: <T>(value: T) => ValueMap<T> =

  //   Maybelist.__valueMap;

  // /**
  //  * First provide a `value<T>` (value or promiseOf) and get a `ValueThenMap`.
  //  * Then pass a `mapFunction` will return a `Promise<R>`
  //  * (property) valueMap_P:
  //  */

  // public static valueMap_P: <T>(value: T_PT_<T>) => ValueMap_P<T> =

  //   Maybelist.__valueMap_P;

  // ===========================================================================≈

  /**
   * First provide a `list` (list or promiseOf) and get a `ListMap_PM`.
   * Then pass a `mapFunction` will return a `PM_<R>`
   * (property) listMap_PM:
   */
  public static listMap_PM: <T>(
    list: Maybelist<T> | Promise<Maybelist<T>>,
  ) => ListMap_PM<T> = Maybelist.__listMap_PM;

  // ===========================================================================≈

  // /**
  //  * First provide a `M_<T_PT_<T>>` (list or promiseOf) and get a `ListMap_PMP`.
  //  * Then pass a `mapFunction` will return a `PMP_<R>`
  //  * (property) listMap_PMP:
  //  */

  // public static listMap_PMP: <T>(

  //   list: T_PT_<Maybelist<T_PT_<T>>>,
  // ) => ListMap_PMP<T> = Maybelist.__listMap_PMP;

  // /**
  //  * First provide a `mapFunction` and get a `MapValue`.
  //  * Then pass a `Maybelist<T>` returns a `Maybelist<R>`
  //  * (property) mapValue:
  //  */

  // public static mapValue: <T, R>(mapFunction: FnAtoB<T, R>) => MapValue<T, R> =

  //   Maybelist.__mapValue;

  // /**
  //  * First provide a `mapFunction` and get a `MapThenValue`.
  //  * Then pass a `value<T>` (value or promiseOf) will return a `Promise<R>`
  //  * (property) mapValue_P:
  //  */

  // public static mapValue_P: <T, R>(

  //   mapFunction: FnAtoB<T, R>,
  // ) => MapThenValue<T, R> = Maybelist.__mapValue_P;

  // /**
  //  * First provide a `mapFunction` and get a `MapList_PMP`.
  //  * Then pass a `M_<T_PT_<T>>` (list or promiseOf) will return a `PMP_<R>`
  //  * (property)  mapList_PMP:
  //  */

  // public static mapList_PMP: <T, R>(

  //   mapFunction: FnAtoB<T, R>,
  // ) => MapList_PMP<T, R> = Maybelist.__mapList_PMP;

  // /**
  //  * First provide a `()=> value<T>` and get a `ValueMap`.
  //  * Then pass a `mapFunction` returns an `R`.
  //  * (property) fnValueMap:
  //  */

  // public static fnValueMap: <T>(value: () => T) => ValueMap<T> =

  //   Maybelist.__fnValueMap;

  // /**
  //  * First provide a `()=> value<T>` (value or promiseOf) and get a `ValueThenMap`.
  //  * Then pass a `mapFunction` will return a `Promise<R>`
  //  * (property) fnValueMap_P:
  //  */

  // public static fnValueMap_P: <T>(value: () => T_PT_<T>) => ValueMap_P<T> =

  //   Maybelist.__fnValueMap_P;

  /**
   * First provide a `()=> list` (list or promiseOf) and get a `ListMap_PM`.
   * Then pass a `mapFunction` will return a `PM_<R>`
   * (property) fnListMap_PM:
   */
  public static fnListMap_PM: <T>(
    list: () => Maybelist<T> | Promise<Maybelist<T>>,
  ) => ListMap_PM<T> = Maybelist.__fnListMap_PM;

  // /**
  //  * First provide a `()=> M_<T_PT_<T>>` (list or promiseOf) and get a
  //  * `ListMap_PMP`. Then pass a `mapFunction` will return a `PMP_<R>`
  //  * (property) fnListMap_PMP:
  //  */

  // public static fnListMap_PMP: <T>(

  //   list: () => T_PT_<Maybelist<T_PT_<T>>>,
  // ) => ListMap_PMP<T> = Maybelist.__fnListMap_PMP;

  // /**
  //  * First provide a `mapFunction` and get a `MapValue`.
  //  * Then pass a `()=> Maybelist<T>` returns a `Maybelist<R>`
  //  * (property) mapValue:
  //  */

  // public static fnMapValue: <T, R>(

  //   mapFunction: FnAtoB<T, R>,
  // ) => FnMapValue<T, R> = Maybelist.__fnMapValue;

  // /**
  //  * First provide a `mapFunction` and get a `MapThenValue`.
  //  * Then pass a `()=> value<T>` (value or promiseOf) will return a `Promise<R>`
  //  * (property) mapValue_P:
  //  */

  // public static fnMapValue_P: <T, R>(

  //   mapFunction: FnAtoB<T, R>,
  // ) => FnMapThenValue<T, R> = Maybelist.__fnMapValue_P;

  // /**
  //  * First provide a `mapFunction` and get a `MapList_PMP`.
  //  * Then pass a `()=> M_<T_PT_<T>>` (list or promiseOf) will return a `PMP_<R>`
  //  * (property)  mapList_PMP:
  //  */

  // public static fnMapList_PMP: <T, R>(

  //   mapFunction: FnAtoB<T, R>,
  // ) => FnMapList_PMP<T, R> = Maybelist.__fnMapList_PMP;

  // #endregion ======== (G) ==== as a function ================================≈
  // #endregion ====-| ThenableTools |-=========================================≈
}
// #region =======-| Types |-===================================================≈

// #endregion =======-| Types |-================================================≈

console.log(Maybelist.of([[45], 45]));
console.log(Maybelist.of([45], 45));
console.log(Maybelist.of(45, 45));

export { Maybelist, MaybelistKind };
export default Maybelist;

// void new Maybelist([43])
//  // static |-···――――――――――――――――――――――――――――――――――――――――――――···-| of() |-···――― ~
//   public static of<TVal = unknown, TVals extends Array<TVal> = TVal[]>(
//     ...values: TVals | [TVals]
//   ): Maybelist<TVal> {
//     if (values.length === 1) {
//       const value = values[0];
//       if (Array.isArray(value)) {
//         // super(value);
//         // return this;
//         return new Maybelist<TVal>(value);
//       }
//     }
//     const value = values as TVal[];
//     return new Maybelist<TVal>(value);

//     // super(_value);
//     // return this;
//   }

//   // public fMap<R>(fn: (val: Ts) => R): Monad<R> {
//   //   return Monad.of<R>(
//   //     super.fMap<R>(x => fn(x)).fork,
//   //   );
//   // }

//   // public fMap<R = any, Rs extends Array<R> = R[]>(
//   //   fn: (val: Ts) => Rs,
//   // ): Maybelist<R, Rs> {
//   //   return new Maybelist(super.fMap<Rs>(fn).fork);
//   // }

//   // public declare ap;
//   // public declare chain;

// implements IMaybelist<T, Ts>
//   // static |-···――――――――――――――――――――――――――――――――――――――――――――···-| of() |-···――― ~
// public static of = <Tx>(...values: Tx[] | [Tx[]]): MaybelistBaseClass<Tx> => {
//   return new MaybelistBaseClass<Tx>(...values);
// };
// // static |-···―――――――――――――――――――――――――――――――――――···-| fromValueOf() |-···――― ~
// public static fromValueOf = <Tx>(
//   value: Functor<Tx>,
// ): MaybelistBaseClass<Tx> => {
//   return MaybelistBaseClass.of<Tx>(JSON.parse(JSON.stringify(value.fork)));
// };
// // static |-···――――――――――――――――――――――――――――――――――――――――――――···-| of() |-···――― ~
// public static of = <Tx>(...values: Tx[] | [Tx[]]): Maybelist<Tx> => {
//   if (values.length === 1) {
//     const value = values[0];
//     if (Array.isArray(value)) {
//       return new Maybelist<Tx>([...value]);
//     }
//   }
//   return new Maybelist<Tx>([...(values as Tx[])]);
// };
// // static |-···―――――――――――――――――――――――――――――――――――···-| fromValueOf() |-···――― ~
// public static fromValueOf = <Tx>(
//   value: Functor<Tx> | Maybelist<Tx>,
// ): Maybelist<Tx> => {
//   return Maybelist.of<Tx>(JSON.parse(JSON.stringify(value.fork)));
// };

// // public declare ['fantasy-land/map'];
// // public |-···―――――――――――――――――――――――――――――――――――――――――――···-| map() |-···――― ~
// public fMap<Rx>(fn: FnAtoB<T, Rx>) {
//   return Maybelist.of<Rx>(this.fork.map(fn));
// }
// // public declare ['fantasy-land/ap'];
// // public |-···――――――――――――――――――――――――――――――――――――――――――――···-| ap() |-···――― ~
// public ap<Rx>(functor: Functor<FnAtoB<T, Rx>>) {
//   return functor.fMap((fn: FnAtoB<T, Rx>) => this.fMap<Rx>(x => fn(x))).fork;
// }
// // public declare ['fantasy-land/chain'];
// // public |-···―――――――――――――――――――――――――――――――――――――――――···-| chain() |-···――― ~
// public chain<Rx>(fn: FnAtoB<T, Maybelist<Rx>>) {
//   return Maybelist.of<Rx>(this.fork.flatMap<Rx>(x => fn(x).fork));
// }
