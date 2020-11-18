'use strict';

const S = require ('./internal/sanctuary');

const {Nil, Cons} = require ('./internal/List');
const eq = require ('./internal/eq');


test ('justs', () => {

  eq (S.show (S.justs)) ('justs :: (Filterable f, Functor f) => f (Maybe a) -> f a');

  eq (S.justs ([])) ([]);
  eq (S.justs ([S.Nothing, S.Nothing])) ([]);
  eq (S.justs ([S.Nothing, S.Just ('b')])) (['b']);
  eq (S.justs ([S.Just ('a'), S.Nothing])) (['a']);
  eq (S.justs ([S.Just ('a'), S.Just ('b')])) (['a', 'b']);

  eq (S.justs ({})) ({});
  eq (S.justs ({x: S.Nothing, y: S.Nothing})) ({});
  eq (S.justs ({x: S.Nothing, y: S.Just (2)})) ({y: 2});
  eq (S.justs ({x: S.Just (1), y: S.Nothing})) ({x: 1});
  eq (S.justs ({x: S.Just (1), y: S.Just (2)})) ({x: 1, y: 2});

  eq (S.justs (S.Nothing)) (S.Nothing);
  eq (S.justs (S.Just (S.Nothing))) (S.Nothing);
  eq (S.justs (S.Just (S.Just (1)))) (S.Just (1));

  eq (S.justs (Nil)) (Nil);
  eq (S.justs (Cons (S.Nothing) (Cons (S.Nothing) (Nil)))) (Nil);
  eq (S.justs (Cons (S.Nothing) (Cons (S.Just (2)) (Nil)))) (Cons (2) (Nil));
  eq (S.justs (Cons (S.Just (1)) (Cons (S.Nothing) (Nil)))) (Cons (1) (Nil));
  eq (S.justs (Cons (S.Just (1)) (Cons (S.Just (2)) (Nil)))) (Cons (1) (Cons (2) (Nil)));

});
