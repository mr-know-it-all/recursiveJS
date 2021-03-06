const find = require('../find/find.js');
const objectEntries = require('../object-entries/object-entries.js');

// omit :: ([String], {String: *}) -> {String: *}
function omit(xs, xo) {
  return objectEntries(xo).reduce(
    (acc, v) => find(x => x === v[0], xs) && acc || (acc[v[0]] = v[1], acc), {}
  );
}

module.exports = omit;