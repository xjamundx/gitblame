var gitblame = require('../lib/gitblame.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.test = {
  setUp: function(done) {
    done();
  },
  'no args': function(test) {
    test.expect(2);
    gitblame("README.md", function(err, lines) {   
      test.ifError(err, 'should not have an error');
      test.ok(Array.isArray(lines), 'lines should be an array');
      test.done();
    });
  }
};
