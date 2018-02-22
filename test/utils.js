const assert = require('assert');
const { classNames, uniq, date } = require('../src/utils');

describe('uniq', function() {
  it('should return unique values', function() {
    assert.deepEqual(
      uniq(['a', 'a', 'a', 'b', 'c', 'a', 'd']),
      ['a', 'b', 'c', 'd']
    );
  })
});

describe('classNames', function () {
  it('should handle a single string', function () {
    assert.equal(classNames('foo'), 'foo');
  });

  it('should handle a multiple strings', function () {
    assert.equal(classNames('foo', 'bar', 'baz'), 'foo bar baz');
  });

  it('should handle a single array of strings', function () {
    assert.equal(classNames(['foo', 'bar', 'baz']), 'foo bar baz');
  });

  it('should handle multiple arrays of strings', function () {
    assert.equal(classNames(['foo', 'bar', 'baz']), 'foo bar baz');
  });

  it('should handle a single map', function () {
    assert.equal(
      classNames({
        foo: true,
        bar: true,
        baz: false
      }),
      'foo bar'
    );
  });

  it('should handle multiple maps', function () {
    assert.equal(
      classNames({
        foo: true,
        bar: true,
        baz: false
      }, {
        qux: true,
        quux: false,
        quuz: true
      }),
      'foo bar qux quuz'
    );
  });

  it('should handle a mix of arg types', function () {
    assert.equal(
      classNames('foo', ['bar', 'baz'], ['foo', 'qux', 'quux'], {
        quuz: true,
        corge: true,
        grault: false
      }),
      'foo bar baz qux quux quuz corge'
    );
  });
});

describe('date', function () {
  const { getLastDayOfMonth } = date;
  describe('getLastDayOfMonth', function() {
    it('should return 31 for some months', function() {
      assert.equal(getLastDayOfMonth(0), 31);
      assert.equal(getLastDayOfMonth(2), 31);
      assert.equal(getLastDayOfMonth(4), 31);
      assert.equal(getLastDayOfMonth(6), 31);
      assert.equal(getLastDayOfMonth(7), 31);
      assert.equal(getLastDayOfMonth(9), 31);
      assert.equal(getLastDayOfMonth(11), 31);
    });
    it('should return 30 for some months', function() {
      assert.equal(getLastDayOfMonth(3), 30);
      assert.equal(getLastDayOfMonth(5), 30);
      assert.equal(getLastDayOfMonth(8), 30);
      assert.equal(getLastDayOfMonth(10), 30);
    });
    it('should return correctly for February', function() {
      assert.equal(getLastDayOfMonth(1, 2001), 28);
      assert.equal(getLastDayOfMonth(1, 2000), 29);
      assert.equal(getLastDayOfMonth(1, 2018), 28);
    });
  })
});