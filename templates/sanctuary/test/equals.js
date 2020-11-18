'use strict';

const S = require ('..');

const eq = require ('./internal/eq');


test ('equals', () => {

  eq (S.show (S.equals)) ('equals :: Setoid a => a -> a -> Boolean');

  eq (S.equals (S.Nothing) (S.Nothing)) (true);
  eq (S.equals (S.Just (NaN)) (S.Just (NaN))) (true);
  eq (S.equals (S.Just (0)) (S.Just (-0))) (true);
  eq (S.equals (S.Nothing) (S.Just (0))) (false);
  eq (S.equals (S.Just (0)) (S.Just (1))) (false);

  eq (S.equals (S.Left (NaN)) (S.Left (NaN))) (true);
  eq (S.equals (S.Left (0)) (S.Left (-0))) (true);
  eq (S.equals (S.Right (NaN)) (S.Right (NaN))) (true);
  eq (S.equals (S.Right (0)) (S.Right (-0))) (true);
  eq (S.equals (S.Left (10)) (S.Left (20))) (false);
  eq (S.equals (S.Left (10)) (S.Right (0))) (false);
  eq (S.equals (S.Right (0)) (S.Right (1))) (false);

});
