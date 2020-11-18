'use strict';

const S = require ('./internal/sanctuary');

const {Nil, Cons} = require ('./internal/List');
const eq = require ('./internal/eq');


test ('reject', () => {

  eq (S.show (S.reject)) ('reject :: Filterable f => (a -> Boolean) -> f a -> f a');

  eq (S.reject (S.odd) ([])) ([]);
  eq (S.reject (S.odd) ([0, 2, 4, 6, 8])) ([0, 2, 4, 6, 8]);
  eq (S.reject (S.odd) ([1, 3, 5, 7, 9])) ([]);
  eq (S.reject (S.odd) ([1, 2, 3, 4, 5])) ([2, 4]);

  eq (S.reject (S.odd) ({})) ({});
  eq (S.reject (S.odd) ({x: 1})) ({});
  eq (S.reject (S.odd) ({x: 1, y: 2})) ({y: 2});
  eq (S.reject (S.odd) ({x: 1, y: 2, z: 3})) ({y: 2});

  eq (S.reject (S.odd) (S.Nothing)) (S.Nothing);
  eq (S.reject (S.odd) (S.Just (0))) (S.Just (0));
  eq (S.reject (S.odd) (S.Just (1))) (S.Nothing);

  eq (S.reject (S.odd) (Nil)) (Nil);
  eq (S.reject (S.odd) (Cons (1) (Nil))) (Nil);
  eq (S.reject (S.odd) (Cons (1) (Cons (2) (Nil)))) (Cons (2) (Nil));
  eq (S.reject (S.odd) (Cons (1) (Cons (2) (Cons (3) (Nil))))) (Cons (2) (Nil));

});
