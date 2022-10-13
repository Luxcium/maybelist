
// const MaybelistKind: KindType = new Kind('MAYBELIST');

import { BaseClass, Functor } from "../../../classes";
import { KindType } from "../../../classes/base/types";
import { MaybelistKind } from "../maybelist";

/*
~~===~···~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~~==~···~=== ~~
*/
export class PartialMaybelist<
  Val = unknown,
  MLVal extends Array<Val> = Val[]
  > extends BaseClass<MLVal> {

    public static of<TVal>(...values: TVal[] | [TVal[]]) {
    if (values.length === 1) {
      const value = values[0];
      if (Array.isArray(value)) {
        return new PartialMaybelist<TVal>(value as TVal[], null);
      }
    }
    return new PartialMaybelist<TVal>(values as TVal[], null);
  }

  public static fromValueOfx<xTVal>(value: Functor<xTVal[]>): PartialMaybelist<xTVal> {
    return PartialMaybelist.of<xTVal>(value.clone);
  }
private list_ : any
  protected constructor(
    maybelistValue: MLVal,
    KIND?: KindType | string | null,
    isNothing = false,
  ) {
    super(maybelistValue as MLVal, MaybelistKind as KindType);
    super._addKINDS(KIND as KindType);
   this.list_ =  isNothing ? []: maybelistValue;
  }
  public get list() {
    return this.list_
  }
}
