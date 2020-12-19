/**
 *
 * @author Benjamin Vincent Kasapoglu (Luxcium)
 * @copyright © 2020 Benjamin Vincent Kasapoglu (Luxcium)
 * @license MIT
 *
 */

import { Maybelist } from '..';

type Value<V> = V;

/** T (Identity T type)*/
type T_<T> = T;
/** MaybeList<T> */
type M_<T> = T_<Maybelist<T>>;
/** Promise<T> */
type P_<T> = Promise<T>;
/** MaybeList<Promise<T>> */
type MP_<T> = M_<Promise<T>>;
/** Promise<MaybeList<T>> */
type PM_<T> = Promise<M_<T>>;
/** Promise<MaybeList<Promise<T>>> */
type PMP_<T> = Promise<M_<Promise<T>>> | Promise<MP_<T>> | PM_<Promise<T>>;
/** T | Promise<T> */
type T_PT_<T> = T | Promise<T>;
/** MaybeList<T> | Promise<MaybeList<T>> */
type M_PM_<T> = (M_<T> | PM_<T>) | T_PT_<M_<T>>;
/** MaybeList<Promise<T>> | Promise<MaybeList<Promise<T>>> */
type MP_PMP_<T> = (MP_<T> | PMP_<T>) | T_PT_<MP_<T>>;
/** MaybeList<T | Promise<T>> | Promise<MaybeList<T | Promise<T>>> */
type M_MP_<T> = Maybelist<T | Promise<T>>;
/** MaybeList<T | Promise<T>> | Promise<MaybeList<T | Promise<T>>> */
type PM_PMP_<T> = Promise<Maybelist<T | Promise<T>>>;
/** MaybeList<T | Promise<T>> | Promise<MaybeList<T | Promise<T>>> */
type M_MP_PM_PMP_<T> =
  | Maybelist<T | Promise<T>>
  | Promise<Maybelist<T | Promise<T>>>;

type FnAtoB<A, B> = (value: A) => B;
/** () => T */
type _T_<T> = () => T_<T>;
/** () => MaybeList<T> */
type _M_<T> = () => M_<T>;
/** () => Promise<T> */
type _P_<T> = () => Promise<T>;
/** () => MaybeList<Promise<T>> */
type _MP_<T> = () => MP_<T>;
/** () => Promise<MaybeList<T>> */
type _PM_<T> = () => PM_<T>;
/** () => Promise<MaybeList<Promise<T>>> */
type _PMP_<T> = () => PMP_<T>;
/** () => T | Promise<T> */
type _T_PT_<T> = () => T_PT_<T>;
/** () => MaybeList<T> | Promise<MaybeList<T>> */
type _M_PM_<T> = () => M_PM_<T>;
/** () => MaybeList<Promise<T>> | Promise<MaybeList<Promise<T>>> */
type _MP_PMP_<T> = () => MP_PMP_<T>;

type ListMap_PM<T> = <R>(thenMap: FnAtoB<T, R>) => PM_<R>;
type ListMap_PMP<T> = <R>(mapFunction: FnAtoB<T, R>) => PMP_<R>;
type ListMap<T> = <R>(thenMap: FnAtoB<T, R>) => M_<R>;
type ListMapMP<T> = <R>(mapFunction: FnAtoB<T, R>) => MP_<R>;
type MapList_PM<T, R> = (list: M_PM_<T>) => PM_<R>;
type MapList_PMP<T, R> = (list: T_PT_<M_<T_PT_<T>>>) => PMP_<R>;
type MapList<T, R> = (list: M_<T>) => M_<R>;
type MapListMP<T, R> = (list: M_<T>) => MP_<R>;
type MapThenValue<T, R> = (value: T_PT_<T>) => Promise<R>;
type MapValue<T, R> = (value: T) => R;

type FnMapList_PM<T, R> = (list: () => M_PM_<T>) => PM_<R>;
type FnMapList_PMP<T, R> = (list: () => T_PT_<M_<T_PT_<T>>>) => PMP_<R>;
type FnMapList<T, R> = (list: () => M_<T>) => M_<R>;
type FnMapListMP<T, R> = (list: () => M_<T>) => MP_<R>;
type FnMapThenValue<T, R> = (value: () => T_PT_<T>) => Promise<R>;
type FnMapValue<T, R> = (value: () => T) => R;

type ValueMap<T> = <R>(thenMap: FnAtoB<T, R>) => R;
type ValueMap_P<T> = <R>(thenMap: FnAtoB<T, R>) => Promise<R>;

export type {
  _M_,
  _M_PM_,
  _MP_,
  _MP_PMP_,
  _P_,
  _PM_,
  _PMP_,
  _T_,
  _T_PT_,
  FnAtoB,
  FnMapList,
  FnMapList_PM,
  FnMapList_PMP,
  FnMapListMP,
  FnMapThenValue,
  FnMapValue,
  ListMap,
  ListMap_PM,
  ListMap_PMP,
  ListMapMP,
  M_,
  M_MP_,
  M_MP_PM_PMP_,
  M_PM_,
  MapList,
  MapList_PM,
  MapList_PMP,
  MapListMP,
  MapThenValue,
  MapValue,
  MP_,
  MP_PMP_,
  P_,
  PM_,
  PM_PMP_,
  PMP_,
  T_,
  T_PT_,
  Value,
  ValueMap,
  ValueMap_P,
};
