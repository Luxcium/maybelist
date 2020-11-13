/**
 * ## Functor
 *
 * @see https://github.com/fantasyland/fantasy-land#functor \
 *  \
 * u['fantasy-land/map'](a => a) is equivalent to u (identity) \
 * u['fantasy-land/map'](x => f(g(x))) is equivalent to \
 *  u\['fantasy-land/map'](g) * \['fantasy-land/map'](f) (composition) \
 * \
 * fantasy-land/map method
 *
 * @typedef fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b \
 *  \
 * A value which has a Functor must provide a fantasy-land/map method. \
 *  \
 * The fantasy-land/map method takes one argument: \
 * \
 * `u['fantasy-land/map'](fn)` \
 *  \
 * fn must be a function, \
 * \
 * If f is not a function, the behaviour of fantasy-land/map is unspecified. \
 * f can return any value. \
 * No parts of f's return value should be checked. \
 * fantasy-land/map must return a value of the same Functor
 */

interface IFMap<A = unknown> {
  /** fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b */
  map: MapType<A>;
}

/** A functor must, in our implementation, Fork and return its internat value */
interface IFork<A = unknown> {
  readonly fork: A;
}

/** A functor must FMap and in our implementation of a functor must Fork */
export interface IFunctor<A = unknown>
  extends IFMap<A>,
    IFork<A>,
    FunctorType<A> {
  map<B>(fn: (val: A) => B): FunctorType<B>;
  toString(): string;
  toValue(): A;
  readonly fork: A;
}

type FunctorType<T = unknown> = IFMap<T> & IFork<T>;

type MapType<A = unknown> = (fn: (val: A) => unknown) => IFMap;
