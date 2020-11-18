'use strict';

const S = require ('./internal/sanctuary');

const {Nil, Cons} = require ('./internal/List');
const eq = require ('./internal/eq');


test ('size', () => {

  eq (S.show (S.size)) ('size :: Foldable f => f a -> NonNegativeInteger');

  eq (S.size ([])) (0);
  eq (S.size (['foo'])) (1);
  eq (S.size (['foo', 'bar'])) (2);
  eq (S.size (['foo', 'bar', 'baz'])) (3);

  eq (S.size (Nil)) (0);
  eq (S.size (Cons ('foo') (Nil))) (1);
  eq (S.size (Cons ('foo') (Cons ('bar') (Nil)))) (2);
  eq (S.size (Cons ('foo') (Cons ('bar') (Cons ('baz') (Nil))))) (3);

  eq (S.size (S.Nothing)) (0);
  eq (S.size (S.Just (0))) (1);

});
