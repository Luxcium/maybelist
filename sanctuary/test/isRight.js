'use strict';

const S = require ('..');

const eq = require ('./internal/eq');


test ('isRight', () => {

  eq (S.show (S.isRight)) ('isRight :: Either a b -> Boolean');

  eq (S.isRight (S.Left (42))) (false);
  eq (S.isRight (S.Right (42))) (true);

});
