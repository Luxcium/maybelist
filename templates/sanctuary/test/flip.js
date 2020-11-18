'use strict';

const S = require ('./internal/sanctuary');

const {Nil, Cons} = require ('./internal/List');
const eq = require ('./internal/eq');
const map = require ('./internal/map');


test ('flip', () => {

  eq (S.show (S.flip)) ('flip :: Functor f => f (a -> b) -> a -> f b');

  eq (S.flip (S.concat) ('foo') ('bar')) ('barfoo');
  eq (map (S.flip (S.concat) ('!')) (['BAM', 'POW', 'KA-POW'])) (['BAM!', 'POW!', 'KA-POW!']);
  eq (S.flip ([Math.floor, Math.ceil]) (1.5)) ([1, 2]);
  eq (S.flip ({floor: Math.floor, ceil: Math.ceil}) (1.5)) ({floor: 1, ceil: 2});
  eq (S.flip (Cons (Math.floor) (Cons (Math.ceil) (Nil))) (1.5)) (Cons (1) (Cons (2) (Nil)));

});
