'use strict';

const S = require ('..');

const eq = require ('./internal/eq');


test ('gt', () => {

  eq (S.show (S.gt)) ('gt :: Ord a => a -> a -> Boolean');

  eq (S.filter (S.gt (3)) ([1, 2, 3, 4, 5])) ([4, 5]);

});
