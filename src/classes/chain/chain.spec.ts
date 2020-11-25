import { Chain } from '.';

describe('Chain Class', () => {
  it('should implement specs & tests for our Chain Class', () => {
    expect(Chain);
  });
});

export default null;

/*
Chain
A value that implements the Chain specification must also implement the Apply specification.

m['fantasy-land/chain'](f)['fantasy-land/chain'](g) is equivalent to m['fantasy-land/chain'](x => f(x)['fantasy-land/chain'](g)) (associativity)

fantasy-land/chain method
fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b
A value which has a Chain must provide a fantasy-land/chain method. The fantasy-land/chain method takes one argument:

m['fantasy-land/chain'](f)
f must be a function which returns a value

If f is not a function, the behaviour of fantasy-land/chain is unspecified.
f must return a value of the same Chain
fantasy-land/chain must return a value of the same Chain
 */

// Fantasy Land Specification
// Build Status Join the chat at https://gitter.im/fantasyland/fantasy-land

// (aka "Algebraic JavaScript Specification")

// This project specifies interoperability of common algebraic structures:

// Setoid
// Ord
// Semigroupoid
// Category
// Semigroup
// Monoid
// Group
// Filterable
// Functor
// Contravariant
// Apply
// Applicative
// Alt
// Plus
// Alternative
// Foldable
// Traversable
// Chain
// ChainRec
// Monad
// Extend
// Comonad
// Bifunctor
// Profunctor

// General
// An algebra is a set of values, a set of operators that it is closed under and some laws it must obey.

// Each Fantasy Land algebra is a separate specification. An algebra may have dependencies on other algebras which must be implemented.

// Terminology
// "value" is any JavaScript value, including any which have the structures defined below.
// "equivalent" is an appropriate definition of equivalence for the given value. The definition should ensure that the two values can be safely swapped out in a program that respects abstractions. For example:
// Two lists are equivalent if they are equivalent at all indices.
// Two plain old JavaScript objects, interpreted as dictionaries, are equivalent when they are equivalent for all keys.
// Two promises are equivalent when they yield equivalent values.
// Two functions are equivalent if they yield equivalent outputs for equivalent inputs.
// Type signature notation
// The type signature notation used in this document is described below:1

// :: "is a member of".
// e :: t can be read as: "the expression e is a member of type t".
// true :: Boolean - "true is a member of type Boolean".
// 42 :: Integer, Number - "42 is a member of the Integer and Number types".
// New types can be created via type constructors.
// Type constructors can take zero or more type arguments.
// Array is a type constructor which takes one type argument.
// Array String is the type of all arrays of strings. Each of the following has type Array String: [], ['foo', 'bar', 'baz'].
// Array (Array String) is the type of all arrays of arrays of strings. Each of the following has type Array (Array String): [], [ [], [] ], [ [], ['foo'], ['bar', 'baz'] ].
// Lowercase letters stand for type variables.
// Type variables can take any type unless they have been restricted by means of type constraints (see fat arrow below).
// -> (arrow) Function type constructor.
// -> is an infix type constructor that takes two type arguments where left argument is the input type and the right argument is the output type.
// ->'s input type can be a grouping of types to create the type of a function which accepts zero or more arguments. The syntax is: (<input-types>) -> <output-type>, where <input-types> comprises zero or more comma–space (, )-separated type representations and parens may be omitted for unary functions.
// String -> Array String is a type satisfied by functions which take a String and return an Array String.
// String -> Array String -> Array String is a type satisfied by functions which take a String and return a function which takes an Array String and returns an Array String.
// (String, Array String) -> Array String is a type satisfied by functions which take a String and an Array String as arguments and return an Array String.
// () -> Number is a type satisfied by functions which do not take arguments and return a Number.
// ~> (squiggly arrow) Method type constructor.
// When a function is a property of an Object, it is called a method. All methods have an implicit parameter type - the type of which they are a property.
// a ~> a -> a is a type satisfied by methods on Objects of type a which take a type a as an argument and return a value of type a.
// => (fat arrow) Expresses constraints on type variables.
// In a ~> a -> a (see squiggly arrow above), a can be of any type. Semigroup a => a ~> a -> a adds a constraint such that the type a must now satisfy the Semigroup typeclass. To satisfy a typeclass means to lawfully implement all functions/methods specified by that typeclass.
// For example:

// fantasy-land/traverse :: Applicative f, Traversable t => t a ~> (TypeRep f, a -> f b) -> f (t b)
// '-------------------'    '--------------------------'    '-'    '-------------------'    '-----'
//  '                        '                               '      '                        '
//  '                        ' - type constraints            '      ' - argument types       ' - return type
//  '                                                        '
//  '- method name                                           ' - method target type
// See the Types section in Sanctuary's docs for more info. leftwards_arrow_with_hook
// Type representatives
// Certain behaviours are defined from the perspective of a member of a type. Other behaviours do not require a member. Thus certain algebras require a type to provide a value-level representative (with certain properties). The Identity type, for example, could provide Id as its type representative: Id :: TypeRep Identity.

// If a type provides a type representative, each member of the type must have a constructor property which is a reference to the type representative.

// Algebras
// Setoid
// a['fantasy-land/equals'](a) === true (reflexivity)
// a['fantasy-land/equals'](b) === b['fantasy-land/equals'](a) (symmetry)
// If a['fantasy-land/equals'](b) and b['fantasy-land/equals'](c), then a['fantasy-land/equals'](c) (transitivity)

// fantasy-land/equals method
// fantasy-land/equals :: Setoid a => a ~> a -> Boolean
// A value which has a Setoid must provide a fantasy-land/equals method. The fantasy-land/equals method takes one argument:

// a['fantasy-land/equals'](b)
// b must be a value of the same Setoid

// If b is not the same Setoid, behaviour of fantasy-land/equals is unspecified (returning false is recommended).
// fantasy-land/equals must return a boolean (true or false).

// Ord
// A value that implements the Ord specification must also implement the Setoid specification.

// a['fantasy-land/lte'](b) or b['fantasy-land/lte'](a) (totality)
// If a['fantasy-land/lte'](b) and b['fantasy-land/lte'](a), then a['fantasy-land/equals'](b) (antisymmetry)
// If a['fantasy-land/lte'](b) and b['fantasy-land/lte'](c), then a['fantasy-land/lte'](c) (transitivity)

// fantasy-land/lte method
// fantasy-land/lte :: Ord a => a ~> a -> Boolean
// A value which has an Ord must provide a fantasy-land/lte method. The fantasy-land/lte method takes one argument:

//  a['fantasy-land/lte'](b)
// b must be a value of the same Ord

// If b is not the same Ord, behaviour of fantasy-land/lte is unspecified (returning false is recommended).
// fantasy-land/lte must return a boolean (true or false).

// Semigroupoid
// a['fantasy-land/compose'](b)['fantasy-land/compose'](c) === a['fantasy-land/compose'](b['fantasy-land/compose'](c)) (associativity)

// fantasy-land/compose method
// fantasy-land/compose :: Semigroupoid c => c i j ~> c j k -> c i k
// A value which has a Semigroupoid must provide a fantasy-land/compose method. The fantasy-land/compose method takes one argument:

// a['fantasy-land/compose'](b)
// b must be a value of the same Semigroupoid

// If b is not the same semigroupoid, behaviour of fantasy-land/compose is unspecified.
// fantasy-land/compose must return a value of the same Semigroupoid.

// Category
// A value that implements the Category specification must also implement the Semigroupoid specification.

// a['fantasy-land/compose'](C['fantasy-land/id']()) is equivalent to a (right identity)
// C['fantasy-land/id']()['fantasy-land/compose'](a) is equivalent to a (left identity)

// fantasy-land/id method
// fantasy-land/id :: Category c => () -> c a a
// A value which has a Category must provide a fantasy-land/id function on its type representative:

// C['fantasy-land/id']()
// Given a value c, one can access its type representative via the constructor property:

// c.constructor['fantasy-land/id']()
// fantasy-land/id must return a value of the same Category
// Semigroup
// a['fantasy-land/concat'](b)['fantasy-land/concat'](c) is equivalent to a['fantasy-land/concat'](b['fantasy-land/concat'](c)) (associativity)

// fantasy-land/concat method
// fantasy-land/concat :: Semigroup a => a ~> a -> a
// A value which has a Semigroup must provide a fantasy-land/concat method. The fantasy-land/concat method takes one argument:

// s['fantasy-land/concat'](b)
// b must be a value of the same Semigroup

// If b is not the same semigroup, behaviour of fantasy-land/concat is unspecified.
// fantasy-land/concat must return a value of the same Semigroup.

// Monoid
// A value that implements the Monoid specification must also implement the Semigroup specification.

// m['fantasy-land/concat'](M['fantasy-land/empty']()) is equivalent to m (right identity)
// M['fantasy-land/empty']()['fantasy-land/concat'](m) is equivalent to m (left identity)

// fantasy-land/empty method
// fantasy-land/empty :: Monoid m => () -> m
// A value which has a Monoid must provide a fantasy-land/empty function on its type representative:

// M['fantasy-land/empty']()
// Given a value m, one can access its type representative via the constructor property:

// m.constructor['fantasy-land/empty']()
// fantasy-land/empty must return a value of the same Monoid
// Group
// A value that implements the Group specification must also implement the Monoid specification.

// g['fantasy-land/concat'](g['fantasy-land/invert']()) is equivalent to g.constructor['fantasy-land/empty']() (right inverse)
// g['fantasy-land/invert']()['fantasy-land/concat'](g) is equivalent to g.constructor['fantasy-land/empty']() (left inverse)

// fantasy-land/invert method
// fantasy-land/invert :: Group g => g ~> () -> g
// A value which has a Group must provide a fantasy-land/invert method. The fantasy-land/invert method takes no arguments:

// g['fantasy-land/invert']()
// fantasy-land/invert must return a value of the same Group.
// Filterable
// v['fantasy-land/filter'](x => p(x) && q(x)) is equivalent to v['fantasy-land/filter'](p)['fantasy-land/filter'](q) (distributivity)
// v['fantasy-land/filter'](x => true) is equivalent to v (identity)
// v['fantasy-land/filter'](x => false) is equivalent to w['fantasy-land/filter'](x => false) if v and w are values of the same Filterable (annihilation)

// fantasy-land/filter method
// fantasy-land/filter :: Filterable f => f a ~> (a -> Boolean) -> f a
// A value which has a Filterable must provide a fantasy-land/filter method. The fantasy-land/filter method takes one argument:

// v['fantasy-land/filter'](p)
// p must be a function.

// If p is not a function, the behaviour of fantasy-land/filter is unspecified.
// p must return either true or false. If it returns any other value, the behaviour of fantasy-land/filter is unspecified.
// fantasy-land/filter must return a value of the same Filterable.

// Functor
// u['fantasy-land/map'](a => a) is equivalent to u (identity)
// u['fantasy-land/map'](x => f(g(x))) is equivalent to u['fantasy-land/map'](g)['fantasy-land/map'](f) (composition)

// fantasy-land/map method
// fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
// A value which has a Functor must provide a fantasy-land/map method. The fantasy-land/map method takes one argument:

// u['fantasy-land/map'](f)
// f must be a function,

// If f is not a function, the behaviour of fantasy-land/map is unspecified.
// f can return any value.
// No parts of f's return value should be checked.
// fantasy-land/map must return a value of the same Functor

// Contravariant
// u['fantasy-land/contramap'](a => a) is equivalent to u (identity)
// u['fantasy-land/contramap'](x => f(g(x))) is equivalent to u['fantasy-land/contramap'](f)['fantasy-land/contramap'](g) (composition)

// fantasy-land/contramap method
// fantasy-land/contramap :: Contravariant f => f a ~> (b -> a) -> f b
// A value which has a Contravariant must provide a fantasy-land/contramap method. The fantasy-land/contramap method takes one argument:

// u['fantasy-land/contramap'](f)
// f must be a function,

// If f is not a function, the behaviour of fantasy-land/contramap is unspecified.
// f can return any value.
// No parts of f's return value should be checked.
// fantasy-land/contramap must return a value of the same Contravariant

// Apply
// A value that implements the Apply specification must also implement the Functor specification.

// v['fantasy-land/ap'](u['fantasy-land/ap'](a['fantasy-land/map'](f => g => x => f(g(x))))) is equivalent to v['fantasy-land/ap'](u)['fantasy-land/ap'](a) (composition)

// fantasy-land/ap method
// fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
// A value which has an Apply must provide a fantasy-land/ap method. The fantasy-land/ap method takes one argument:

// a['fantasy-land/ap'](b)
// b must be an Apply of a function

// If b does not represent a function, the behaviour of fantasy-land/ap is unspecified.
// b must be same Apply as a.
// a must be an Apply of any value

// fantasy-land/ap must apply the function in Apply b to the value in Apply a

// No parts of return value of that function should be checked.
// The Apply returned by fantasy-land/ap must be the same as a and b

// Applicative
// A value that implements the Applicative specification must also implement the Apply specification.

// v['fantasy-land/ap'](A['fantasy-land/of'](x => x)) is equivalent to v (identity)
// A['fantasy-land/of'](x)['fantasy-land/ap'](A['fantasy-land/of'](f)) is equivalent to A['fantasy-land/of'](f(x)) (homomorphism)
// A['fantasy-land/of'](y)['fantasy-land/ap'](u) is equivalent to u['fantasy-land/ap'](A['fantasy-land/of'](f => f(y))) (interchange)

// fantasy-land/of method
// fantasy-land/of :: Applicative f => a -> f a
// A value which has an Applicative must provide a fantasy-land/of function on its type representative. The fantasy-land/of function takes one argument:

// F['fantasy-land/of'](a)
// Given a value f, one can access its type representative via the constructor property:

// f.constructor['fantasy-land/of'](a)
// fantasy-land/of must provide a value of the same Applicative

// No parts of a should be checked
// Alt
// A value that implements the Alt specification must also implement the Functor specification.

// a['fantasy-land/alt'](b)['fantasy-land/alt'](c) is equivalent to a['fantasy-land/alt'](b['fantasy-land/alt'](c)) (associativity)
// a['fantasy-land/alt'](b)['fantasy-land/map'](f) is equivalent to a['fantasy-land/map'](f)['fantasy-land/alt'](b['fantasy-land/map'](f)) (distributivity)

// fantasy-land/alt method
// fantasy-land/alt :: Alt f => f a ~> f a -> f a
// A value which has a Alt must provide a fantasy-land/alt method. The fantasy-land/alt method takes one argument:

// a['fantasy-land/alt'](b)
// b must be a value of the same Alt

// If b is not the same Alt, behaviour of fantasy-land/alt is unspecified.
// a and b can contain any value of same type.
// No parts of a's and b's containing value should be checked.
// fantasy-land/alt must return a value of the same Alt.

// Plus
// A value that implements the Plus specification must also implement the Alt specification.

// x['fantasy-land/alt'](A['fantasy-land/zero']()) is equivalent to x (right identity)
// A['fantasy-land/zero']()['fantasy-land/alt'](x) is equivalent to x (left identity)
// A['fantasy-land/zero']()['fantasy-land/map'](f) is equivalent to A['fantasy-land/zero']() (annihilation)

// fantasy-land/zero method
// fantasy-land/zero :: Plus f => () -> f a
// A value which has a Plus must provide a fantasy-land/zero function on its type representative:

// A['fantasy-land/zero']()
// Given a value x, one can access its type representative via the constructor property:

// x.constructor['fantasy-land/zero']()
// fantasy-land/zero must return a value of the same Plus
// Alternative
// A value that implements the Alternative specification must also implement the Applicative and Plus specifications.

// x['fantasy-land/ap'](f['fantasy-land/alt'](g)) is equivalent to x['fantasy-land/ap'](f)['fantasy-land/alt'](x['fantasy-land/ap'](g)) (distributivity)
// x['fantasy-land/ap'](A['fantasy-land/zero']()) is equivalent to A['fantasy-land/zero']() (annihilation)
// Foldable
// u['fantasy-land/reduce'] is equivalent to u['fantasy-land/reduce']((acc, x) => acc.concat([x]), []).reduce

// fantasy-land/reduce method
// fantasy-land/reduce :: Foldable f => f a ~> ((b, a) -> b, b) -> b
// A value which has a Foldable must provide a fantasy-land/reduce method. The fantasy-land/reduce method takes two arguments:

// u['fantasy-land/reduce'](f, x)
// f must be a binary function

// if f is not a function, the behaviour of fantasy-land/reduce is unspecified.
// The first argument to f must be the same type as x.
// f must return a value of the same type as x.
// No parts of f's return value should be checked.
// x is the initial accumulator value for the reduction

// No parts of x should be checked.
// Traversable
// A value that implements the Traversable specification must also implement the Functor and Foldable specifications.

// t(u['fantasy-land/traverse'](F, x => x)) is equivalent to u['fantasy-land/traverse'](G, t) for any t such that t(a)['fantasy-land/map'](f) is equivalent to t(a['fantasy-land/map'](f)) (naturality)

// u['fantasy-land/traverse'](F, F['fantasy-land/of']) is equivalent to F['fantasy-land/of'](u) for any Applicative F (identity)

// u['fantasy-land/traverse'](Compose, x => new Compose(x)) is equivalent to new Compose(u['fantasy-land/traverse'](F, x => x)['fantasy-land/map'](x => x['fantasy-land/traverse'](G, x => x))) for Compose defined below and any Applicatives F and G (composition)

// function Compose(c) {
//   this.c = c;
// }

// Compose['fantasy-land/of'] = function(x) {
//   return new Compose(F['fantasy-land/of'](G['fantasy-land/of'](x)));
// };

// Compose.prototype['fantasy-land/ap'] = function(f) {
//   return new Compose(this.c['fantasy-land/ap'](f.c['fantasy-land/map'](u => y => y['fantasy-land/ap'](u))));
// };

// Compose.prototype['fantasy-land/map'] = function(f) {
//   return new Compose(this.c['fantasy-land/map'](y => y['fantasy-land/map'](f)));
// };

// fantasy-land/traverse method
// fantasy-land/traverse :: Applicative f, Traversable t => t a ~> (TypeRep f, a -> f b) -> f (t b)
// A value which has a Traversable must provide a fantasy-land/traverse method. The fantasy-land/traverse method takes two arguments:

// u['fantasy-land/traverse'](A, f)
// A must be the type representative of an Applicative.

// f must be a function which returns a value

// If f is not a function, the behaviour of fantasy-land/traverse is unspecified.
// f must return a value of the type represented by A.
// fantasy-land/traverse must return a value of the type represented by A.

// Chain
// A value that implements the Chain specification must also implement the Apply specification.

// m['fantasy-land/chain'](f)['fantasy-land/chain'](g) is equivalent to m['fantasy-land/chain'](x => f(x)['fantasy-land/chain'](g)) (associativity)

// fantasy-land/chain method
// fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b
// A value which has a Chain must provide a fantasy-land/chain method. The fantasy-land/chain method takes one argument:

// m['fantasy-land/chain'](f)
// f must be a function which returns a value

// If f is not a function, the behaviour of fantasy-land/chain is unspecified.
// f must return a value of the same Chain
// fantasy-land/chain must return a value of the same Chain

// ChainRec
// A value that implements the ChainRec specification must also implement the Chain specification.

// M['fantasy-land/chainRec']((next, done, v) => p(v) ? d(v)['fantasy-land/map'](done) : n(v)['fantasy-land/map'](next), i) is equivalent to (function step(v) { return p(v) ? d(v) : n(v)['fantasy-land/chain'](step); }(i)) (equivalence)
// Stack usage of M['fantasy-land/chainRec'](f, i) must be at most a constant multiple of the stack usage of f itself.

// fantasy-land/chainRec method
// fantasy-land/chainRec :: ChainRec m => ((a -> c, b -> c, a) -> m c, a) -> m b
// A Type which has a ChainRec must provide a fantasy-land/chainRec function on its type representative. The fantasy-land/chainRec function takes two arguments:

// M['fantasy-land/chainRec'](f, i)
// Given a value m, one can access its type representative via the constructor property:

// m.constructor['fantasy-land/chainRec'](f, i)
// f must be a function which returns a value
// If f is not a function, the behaviour of fantasy-land/chainRec is unspecified.
// f takes three arguments next, done, value
// next is a function which takes one argument of same type as i and can return any value
// done is a function which takes one argument and returns the same type as the return value of next
// value is some value of the same type as i
// f must return a value of the same ChainRec which contains a value returned from either done or next
// fantasy-land/chainRec must return a value of the same ChainRec which contains a value of same type as argument of done
// Monad
// A value that implements the Monad specification must also implement the Applicative and Chain specifications.

// M['fantasy-land/of'](a)['fantasy-land/chain'](f) is equivalent to f(a) (left identity)
// m['fantasy-land/chain'](M['fantasy-land/of']) is equivalent to m (right identity)
// Extend
// A value that implements the Extend specification must also implement the Functor specification.

// w['fantasy-land/extend'](g)['fantasy-land/extend'](f) is equivalent to w['fantasy-land/extend'](_w => f(_w['fantasy-land/extend'](g)))

// fantasy-land/extend method
// fantasy-land/extend :: Extend w => w a ~> (w a -> b) -> w b
// An Extend must provide a fantasy-land/extend method. The fantasy-land/extend method takes one argument:

//  w['fantasy-land/extend'](f)
// f must be a function which returns a value

// If f is not a function, the behaviour of fantasy-land/extend is unspecified.
// f must return a value of type v, for some variable v contained in w.
// No parts of f's return value should be checked.
// fantasy-land/extend must return a value of the same Extend.

// Comonad
// A value that implements the Comonad specification must also implement the Extend specification.

// w['fantasy-land/extend'](_w => _w['fantasy-land/extract']()) is equivalent to w (left identity)
// w['fantasy-land/extend'](f)['fantasy-land/extract']() is equivalent to f(w) (right identity)

// fantasy-land/extract method
// fantasy-land/extract :: Comonad w => w a ~> () -> a
// A value which has a Comonad must provide a fantasy-land/extract method on itself. The fantasy-land/extract method takes no arguments:

// w['fantasy-land/extract']()
// fantasy-land/extract must return a value of type v, for some variable v contained in w.
// v must have the same type that f returns in fantasy-land/extend.
// Bifunctor
// A value that implements the Bifunctor specification must also implement the Functor specification.

// p['fantasy-land/bimap'](a => a, b => b) is equivalent to p (identity)
// p['fantasy-land/bimap'](a => f(g(a)), b => h(i(b)) is equivalent to p['fantasy-land/bimap'](g, i)['fantasy-land/bimap'](f, h) (composition)

// fantasy-land/bimap method
// fantasy-land/bimap :: Bifunctor f => f a c ~> (a -> b, c -> d) -> f b d
// A value which has a Bifunctor must provide a fantasy-land/bimap method. The fantasy-land/bimap method takes two arguments:

// c['fantasy-land/bimap'](f, g)
// f must be a function which returns a value

// If f is not a function, the behaviour of fantasy-land/bimap is unspecified.
// f can return any value.
// No parts of f's return value should be checked.
// g must be a function which returns a value

// If g is not a function, the behaviour of fantasy-land/bimap is unspecified.
// g can return any value.
// No parts of g's return value should be checked.
// fantasy-land/bimap must return a value of the same Bifunctor.

// Profunctor
// A value that implements the Profunctor specification must also implement the Functor specification.

// p['fantasy-land/promap'](a => a, b => b) is equivalent to p (identity)
// p['fantasy-land/promap'](a => f(g(a)), b => h(i(b))) is equivalent to p['fantasy-land/promap'](f, i)['fantasy-land/promap'](g, h) (composition)

// fantasy-land/promap method
// fantasy-land/promap :: Profunctor p => p b c ~> (a -> b, c -> d) -> p a d
// A value which has a Profunctor must provide a fantasy-land/promap method.

// The fantasy-land/promap method takes two arguments:

// c['fantasy-land/promap'](f, g)
// f must be a function which returns a value

// If f is not a function, the behaviour of fantasy-land/promap is unspecified.
// f can return any value.
// No parts of f's return value should be checked.
// g must be a function which returns a value

// If g is not a function, the behaviour of fantasy-land/promap is unspecified.
// g can return any value.
// No parts of g's return value should be checked.
// fantasy-land/promap must return a value of the same Profunctor

// Derivations
// When creating data types which satisfy multiple algebras, authors may choose to implement certain methods then derive the remaining methods. Derivations:

// fantasy-land/equals may be derived from fantasy-land/lte:

// function equals(other) { return this['fantasy-land/lte'](other) && other['fantasy-land/lte'](this); }
// fantasy-land/map may be derived from fantasy-land/ap and fantasy-land/of:

// function map(f) { return this['fantasy-land/ap'](this.constructor['fantasy-land/of'](f)); }
// fantasy-land/map may be derived from fantasy-land/chain and fantasy-land/of:

// function map(f) { return this['fantasy-land/chain'](a => this.constructor['fantasy-land/of'](f(a))); }
// fantasy-land/map may be derived from fantasy-land/bimap:

// function map(f) { return this['fantasy-land/bimap'](a => a, f); }
// fantasy-land/map may be derived from fantasy-land/promap:

// function map(f) { return this['fantasy-land/promap'](a => a, f); }
// fantasy-land/ap may be derived from fantasy-land/chain:

// function ap(m) { return m['fantasy-land/chain'](f => this['fantasy-land/map'](f)); }
// fantasy-land/reduce may be derived as follows:

// function reduce(f, acc) {
//   function Const(value) {
//     this.value = value;
//   }
//   Const['fantasy-land/of'] = function(_) {
//     return new Const(acc);
//   };
//   Const.prototype['fantasy-land/map'] = function(_) {
//     return this;
//   };
//   Const.prototype['fantasy-land/ap'] = function(b) {
//     return new Const(f(b.value, this.value));
//   };
//   return this['fantasy-land/traverse'](x => new Const(x), Const['fantasy-land/of']).value;
// }
// fantasy-land/map may be derived as follows:

// function map(f) {
//   function Id(value) {
//     this.value = value;
//   }
//   Id['fantasy-land/of'] = function(x) {
//     return new Id(x);
//   };
//   Id.prototype['fantasy-land/map'] = function(f) {
//     return new Id(f(this.value));
//   };
//   Id.prototype['fantasy-land/ap'] = function(b) {
//     return new Id(this.value(b.value));
//   };
//   return this['fantasy-land/traverse'](x => Id['fantasy-land/of'](f(x)), Id['fantasy-land/of']).value;
// }
// fantasy-land/filter may be derived from fantasy-land/of, fantasy-land/chain, and fantasy-land/zero:

// function filter(pred) {
//   var F = this.constructor;
//   return this['fantasy-land/chain'](x => pred(x) ? F['fantasy-land/of'](x) : F['fantasy-land/zero']());
// }
// fantasy-land/filter may be derived from fantasy-land/concat, fantasy-land/of, fantasy-land/zero, and fantasy-land/reduce:

// function filter(pred) {
//   var F = this.constructor;
//   return this['fantasy-land/reduce']((f, x) => pred(x) ? f['fantasy-land/concat'](F['fantasy-land/of'](x)) : f, F['fantasy-land/zero']());
// }
// If a data type provides a method which could be derived, its behaviour must be equivalent to that of the derivation (or derivations).

// Notes
// If there's more than a single way to implement the methods and laws, the implementation should choose one and provide wrappers for other uses.
// It's discouraged to overload the specified methods. It can easily result in broken and buggy behaviour.
// It is recommended to throw an exception on unspecified behaviour.
// An Identity container which implements many of the methods is provided by sanctuary-identity.
// Alternatives
// There also exists Static Land Specification with exactly the same ideas as Fantasy Land but based on static methods instead of instance methods.

// describe('Fantasy Land Specification', () => {
//   it('should implment', () => {
//     expect(true).toBe(true);
//   });
// });

// export default null;
