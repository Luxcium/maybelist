'use strict';

const S = require ('..');

const eq = require ('./internal/eq');


test ('foldMap', () => {

  eq (S.show (S.foldMap)) ('foldMap :: (Monoid b, Foldable f) => TypeRep b -> (a -> b) -> f a -> b');

  const repeat = n => (new Array (n + 1)).join (String (n));
  eq (S.foldMap (String) (repeat) ([])) ('');
  eq (S.foldMap (String) (repeat) ([1])) ('1');
  eq (S.foldMap (String) (repeat) ([1, 2])) ('122');
  eq (S.foldMap (String) (repeat) ([1, 2, 3])) ('122333');

});
