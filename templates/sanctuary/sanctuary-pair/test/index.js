'use strict';

const assert        = require ('assert');

const laws          = require ('fantasy-laws');
const jsc           = require ('jsverify');
const Identity      = require ('sanctuary-identity');
const show          = require ('sanctuary-show');
const Z             = require ('sanctuary-type-classes');
const type          = require ('sanctuary-type-identifiers');
const Useless       = require ('sanctuary-useless');

const Pair          = require ('..');


//    IdentityArb :: Arbitrary a -> Arbitrary (Identity a)
const IdentityArb = arb => arb.smap (Identity, Z.extract, show);

//    PairArb :: Arbitrary a -> Arbitrary b -> Arbitrary (Pair a b)
const PairArb = arbL => arbR => (jsc.pair (arbL, arbR)).smap (
  ([fst, snd]) => Pair (fst) (snd),
  p => [p.fst, p.snd],
  show
);

//    testLaws :: Object -> Object -> Undefined
const testLaws = laws => arbs => {
  (Object.keys (laws)).forEach (name => {
    eq (laws[name].length) (arbs[name].length);
    test (name.replace (/[A-Z]/g, c => ' ' + c.toLowerCase ()),
          laws[name] (...arbs[name]));
  });
};

//    eq :: a -> b -> Undefined !
function eq(actual) {
  assert.strictEqual (arguments.length, eq.length);
  return function eq$1(expected) {
    assert.strictEqual (arguments.length, eq$1.length);
    assert.strictEqual (show (actual), show (expected));
    assert.strictEqual (Z.equals (actual, expected), true);
  };
}


suite ('Pair', () => {

  test ('metadata', () => {
    eq (typeof Pair) ('function');
    eq (Pair.name) ('Pair');
    eq (Pair.length) (1);
  });

  test ('@@type', () => {
    eq (type (Pair (0) (0))) ('sanctuary-pair/Pair@1');
    eq (type.parse (type (Pair (0) (0))))
       ({namespace: 'sanctuary-pair', name: 'Pair', version: 1});
  });

  test ('@@show', () => {
    eq (show (Pair (['foo', 'bar', 'baz']) (-0)))
       ('Pair (["foo", "bar", "baz"]) (-0)');
  });

  test ('@@iterator', () => {
    const pair = Pair ('foo') ('bar');
    const iterator = pair[Symbol.iterator] ();
    eq (iterator.next ()) ({value: 'foo', done: false});
    eq (iterator.next ()) ({value: 'bar', done: false});
    eq (iterator.next ()) ({value: undefined, done: true});
  });

  test ('Pair.fst', () => {
    eq (Pair.fst (Pair ('foo') (42))) ('foo');
  });

  test ('Pair.snd', () => {
    eq (Pair.snd (Pair ('foo') (42))) (42);
  });

  test ('Pair.swap', () => {
    eq (Pair.swap (Pair ('foo') (42))) (Pair (42) ('foo'));
  });

});

suite ('type-class predicates', () => {

  test ('Setoid', () => {
    eq (Z.Setoid.test (Pair (Useless) (Useless))) (false);
    eq (Z.Setoid.test (Pair (Useless) ('world'))) (false);
    eq (Z.Setoid.test (Pair ('hello') (Useless))) (false);
    eq (Z.Setoid.test (Pair ('hello') ('world'))) (true);
  });

  test ('Ord', () => {
    eq (Z.Ord.test (Pair (Useless) (Useless))) (false);
    eq (Z.Ord.test (Pair (Useless) ('world'))) (false);
    eq (Z.Ord.test (Pair ('hello') (Useless))) (false);
    eq (Z.Ord.test (Pair ('hello') ('world'))) (true);
  });

  test ('Semigroupoid', () => {
    eq (Z.Semigroupoid.test (Pair (Useless) (Useless))) (true);
  });

  test ('Category', () => {
    eq (Z.Category.test (Pair (Math.sqrt) (Math.sqrt))) (false);
  });

  test ('Semigroup', () => {
    eq (Z.Semigroup.test (Pair (Useless) (Useless))) (false);
    eq (Z.Semigroup.test (Pair (Useless) ('world'))) (false);
    eq (Z.Semigroup.test (Pair ('hello') (Useless))) (false);
    eq (Z.Semigroup.test (Pair ('hello') ('world'))) (true);
  });

  test ('Monoid', () => {
    eq (Z.Monoid.test (Pair ('hello') ('world'))) (false);
  });

  test ('Functor', () => {
    eq (Z.Functor.test (Pair (Useless) (Useless))) (true);
  });

  test ('Bifunctor', () => {
    eq (Z.Bifunctor.test (Pair (Useless) (Useless))) (true);
  });

  test ('Profunctor', () => {
    eq (Z.Profunctor.test (Pair (Math.sqrt) (Math.sqrt))) (false);
  });

  test ('Apply', () => {
    eq (Z.Apply.test (Pair (Useless) (Useless))) (false);
    eq (Z.Apply.test (Pair (Useless) ('world'))) (false);
    eq (Z.Apply.test (Pair ('hello') (Useless))) (true);
    eq (Z.Apply.test (Pair ('hello') ('world'))) (true);
  });

  test ('Applicative', () => {
    eq (Z.Applicative.test (Pair ([]) ([]))) (false);
  });

  test ('Chain', () => {
    eq (Z.Chain.test (Pair (Useless) (Useless))) (false);
    eq (Z.Chain.test (Pair (Useless) ('world'))) (false);
    eq (Z.Chain.test (Pair ('hello') (Useless))) (true);
    eq (Z.Chain.test (Pair ('hello') ('world'))) (true);
  });

  test ('ChainRec', () => {
    eq (Z.ChainRec.test (Pair (Useless) (Useless))) (false);
    eq (Z.ChainRec.test (Pair (Useless) ('world'))) (false);
    eq (Z.ChainRec.test (Pair ('hello') (Useless))) (false);
    eq (Z.ChainRec.test (Pair ('hello') ('world'))) (false);
  });

  test ('Monad', () => {
    eq (Z.Monad.test (Pair ([]) ([]))) (false);
  });

  test ('Alt', () => {
    eq (Z.Alt.test (Pair ([]) ([]))) (false);
  });

  test ('Plus', () => {
    eq (Z.Plus.test (Pair ([]) ([]))) (false);
  });

  test ('Alternative', () => {
    eq (Z.Alternative.test (Pair ([]) ([]))) (false);
  });

  test ('Foldable', () => {
    eq (Z.Foldable.test (Pair (Useless) (Useless))) (true);
  });

  test ('Traversable', () => {
    eq (Z.Traversable.test (Pair (Useless) (Useless))) (true);
  });

  test ('Extend', () => {
    eq (Z.Extend.test (Pair (Useless) (Useless))) (true);
  });

  test ('Comonad', () => {
    eq (Z.Comonad.test (Pair (Useless) (Useless))) (true);
  });

  test ('Contravariant', () => {
    eq (Z.Contravariant.test (Pair (Math.sqrt) (Math.sqrt))) (false);
  });

});

suite ('Setoid laws', () => {
  testLaws (laws.Setoid) ({
    reflexivity: [
      PairArb (jsc.string) (jsc.falsy),
    ],
    symmetry: [
      PairArb (jsc.bool) (jsc.bool),
      PairArb (jsc.bool) (jsc.bool),
    ],
    transitivity: [
      PairArb (jsc.bool) (jsc.bool),
      PairArb (jsc.bool) (jsc.bool),
      PairArb (jsc.bool) (jsc.bool),
    ],
  });
});

suite ('Ord laws', () => {
  testLaws (laws.Ord) ({
    totality: [
      PairArb (jsc.string) (jsc.number),
      PairArb (jsc.string) (jsc.number),
    ],
    antisymmetry: [
      PairArb (jsc.string) (jsc.number),
      PairArb (jsc.string) (jsc.number),
    ],
    transitivity: [
      PairArb (jsc.string) (jsc.number),
      PairArb (jsc.string) (jsc.number),
      PairArb (jsc.string) (jsc.number),
    ],
  });
});

suite ('Semigroup laws', () => {
  testLaws (laws.Semigroup (Z.equals)) ({
    associativity: [
      PairArb (jsc.string) (jsc.string),
      PairArb (jsc.string) (jsc.string),
      PairArb (jsc.string) (jsc.string),
    ],
  });
});

suite ('Semigroupoid laws', () => {
  testLaws (laws.Semigroupoid (Z.equals)) ({
    associativity: [
      PairArb (jsc.string) (jsc.string),
      PairArb (jsc.string) (jsc.string),
      PairArb (jsc.string) (jsc.string),
    ],
  });
});

suite ('Functor laws', () => {
  testLaws (laws.Functor (Z.equals)) ({
    identity: [
      PairArb (jsc.string) (jsc.number),
    ],
    composition: [
      PairArb (jsc.string) (jsc.number),
      jsc.constant (Math.sqrt),
      jsc.constant (Math.abs),
    ],
  });
});

suite ('Bifunctor laws', () => {
  testLaws (laws.Bifunctor (Z.equals)) ({
    identity: [
      PairArb (jsc.string) (jsc.number),
    ],
    composition: [
      PairArb (jsc.string) (jsc.number),
      jsc.constant (Math.sqrt),
      jsc.constant (s => s.length),
      jsc.constant (Math.sqrt),
      jsc.constant (Math.abs),
    ],
  });
});

suite ('Apply laws', () => {
  testLaws (laws.Apply (Z.equals)) ({
    composition: [
      PairArb (jsc.string) (jsc.constant (Math.sqrt)),
      PairArb (jsc.string) (jsc.constant (Math.abs)),
      PairArb (jsc.string) (jsc.number),
    ],
  });
});

suite ('Chain laws', () => {
  testLaws (laws.Chain (Z.equals)) ({
    associativity: [
      PairArb (jsc.string) (jsc.number),
      jsc.constant (n => Pair (show (n)) (n + 1)),
      jsc.constant (n => Pair (show (n)) (n * n)),
    ],
  });
});

suite ('Foldable laws', () => {
  testLaws (laws.Foldable (Z.equals)) ({
    associativity: [
      jsc.constant (Z.concat),
      jsc.string,
      PairArb (jsc.number) (jsc.string),
    ],
  });
});

suite ('Traversable laws', () => {
  testLaws (laws.Traversable (Z.equals)) ({
    naturality: [
      jsc.constant (Identity),
      jsc.constant (Array),
      jsc.constant (identity => [Z.extract (identity)]),
      PairArb (jsc.string) (IdentityArb (jsc.number)),
    ],
    identity: [
      jsc.constant (Identity),
      PairArb (jsc.string) (jsc.number),
    ],
    composition: [
      jsc.constant (Identity),
      jsc.constant (Pair),
      PairArb (jsc.string) (IdentityArb (PairArb (jsc.string) (jsc.number))),
    ],
  });
});

suite ('Extend laws', () => {
  testLaws (laws.Extend (Z.equals)) ({
    associativity: [
      PairArb (jsc.string) (jsc.integer),
      jsc.constant (pair => Z.extract (pair) + 1),
      jsc.constant (pair => Math.pow (Z.extract (pair), 2)),
    ],
  });
});

suite ('Comonad laws', () => {
  testLaws (laws.Comonad (Z.equals)) ({
    leftIdentity: [
      PairArb (jsc.string) (jsc.integer),
    ],
    rightIdentity: [
      PairArb (jsc.string) (jsc.integer),
      jsc.constant (pair => Math.pow (Z.extract (pair), 2)),
    ],
  });
});
