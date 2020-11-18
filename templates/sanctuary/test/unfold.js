'use strict';

const S = require ('..');

const eq = require ('./internal/eq');


test ('unfold', () => {

  eq (S.show (S.unfold)) ('unfold :: (b -> Maybe (Pair a b)) -> b -> Array a');

  const f = n => n >= 5 ? S.Nothing : S.Just (S.Pair (n) (n + 1));
  eq (S.unfold (f) (5)) ([]);
  eq (S.unfold (f) (4)) ([4]);
  eq (S.unfold (f) (1)) ([1, 2, 3, 4]);

});
