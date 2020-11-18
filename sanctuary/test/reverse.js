'use strict';

const S = require ('./internal/sanctuary');

const {Nil, Cons} = require ('./internal/List');
const eq = require ('./internal/eq');


test ('reverse', () => {

  eq (S.show (S.reverse)) ('reverse :: (Applicative f, Foldable f, Monoid f) => f a -> f a');

  eq (S.reverse ([])) ([]);
  eq (S.reverse ([1])) ([1]);
  eq (S.reverse ([1, 2])) ([2, 1]);
  eq (S.reverse ([1, 2, 3])) ([3, 2, 1]);

  eq (S.reverse (Nil)) (Nil);
  eq (S.reverse (Cons (1) (Nil))) (Cons (1) (Nil));
  eq (S.reverse (Cons (1) (Cons (2) (Nil)))) (Cons (2) (Cons (1) (Nil)));
  eq (S.reverse (Cons (1) (Cons (2) (Cons (3) (Nil))))) (Cons (3) (Cons (2) (Cons (1) (Nil))));

});
