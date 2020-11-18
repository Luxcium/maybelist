'use strict';

const S = require ('..');

const eq = require ('./internal/eq');


test ('unwords', () => {

  eq (S.show (S.unwords)) ('unwords :: Array String -> String');

  eq (S.unwords ([])) ('');
  eq (S.unwords ([''])) ('');
  eq (S.unwords (['', ''])) (' ');
  eq (S.unwords ([' '])) (' ');
  eq (S.unwords ([' ', ' '])) ('   ');
  eq (S.unwords (['foo', 'bar', 'baz'])) ('foo bar baz');
  eq (S.unwords ([' foo ', ' bar ', ' baz '])) (' foo   bar   baz ');

});
