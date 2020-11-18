'use strict';

const S = require ('..');

const eq = require ('./internal/eq');


test ('sort', () => {

  eq (S.show (S.sort)) ('sort :: (Ord a, Applicative m, Foldable m, Monoid m) => m a -> m a');

  eq (S.sort ([])) ([]);
  eq (S.sort (['foo', 'bar', 'baz'])) (['bar', 'baz', 'foo']);
  eq (S.sort ([S.Left (4), S.Right (3), S.Left (2), S.Right (1)])) ([S.Left (2), S.Left (4), S.Right (1), S.Right (3)]);

  eq (S.sort (S.range (0) (100))) (S.range (0) (100));
  eq (S.sort (S.reverse (S.range (0) (100)))) (S.range (0) (100));

});
