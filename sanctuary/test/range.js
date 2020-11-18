'use strict';

const S = require ('..');

const eq = require ('./internal/eq');


test ('range', () => {

  eq (S.show (S.range)) ('range :: Integer -> Integer -> Array Integer');

  eq (S.range (0) (0)) ([]);
  eq (S.range (0) (10)) ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  eq (S.range (0) (-10)) ([]);
  eq (S.range (-2) (-1)) ([-2]);
  eq (S.range (-2) (3)) ([-2, -1, 0, 1, 2]);

});
