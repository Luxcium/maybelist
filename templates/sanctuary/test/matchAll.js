'use strict';

const S = require ('..');

const eq = require ('./internal/eq');


test ('matchAll', () => {

  eq (S.show (S.matchAll)) ('matchAll :: GlobalRegExp -> String -> Array (Array (Maybe String))');

  const pattern = S.regex ('g') ('<(h[1-6])(?: id="([^"]*)")?>([^<]*)</\\1>');

  eq (S.matchAll (pattern) ('')) ([]);

  eq (S.matchAll (pattern) ('<h1>Foo</h1>\n<h2 id="bar">Bar</h2>\n<h2 id="baz">Baz</h2>\n'))
     ([[S.Just ('h1'), S.Nothing, S.Just ('Foo')],
       [S.Just ('h2'), S.Just ('bar'), S.Just ('Bar')],
       [S.Just ('h2'), S.Just ('baz'), S.Just ('Baz')]]);

  eq (pattern.lastIndex) (0);

});
