'use strict';

const S = require ('..');

const eq = require ('./internal/eq');


test ('boolean', () => {

  eq (S.show (S.boolean)) ('boolean :: a -> a -> Boolean -> a');

  eq (S.boolean ('no') ('yes') (false)) ('no');
  eq (S.boolean ('no') ('yes') (true)) ('yes');

});
