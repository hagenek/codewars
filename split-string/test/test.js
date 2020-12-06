const solution = require('../index');
const { assert } = require('chai');

describe('validating', () => {
  it('exported functions', () => {
    assert.strictEqual(typeof solution, 'function', 'solution is not exported');
  });
});

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("Split Strings", () => {
  it.only("Basic tests", () => {
    assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
    assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
    assert.deepEqual(solution(""), []);
  });
});

describe('solution function', ()  => {
  it('test that solution function handles strings of equal length', () => {
    assert.deepEqual(solution("abcdef"), ["ab","cd", "ef"]);
})
})

/*   it('Test that input is a number', () => {<
    assert.equal(typeof age, 'number');
  });
});

describe('isManInSweden function', () => {
  it('a test for isManInSweden', () => {
    assert.equal(app.isManInSweden('7210090697'), true);
  });
});

describe('firstTwoDigitInteger function', () => {
  it('a test for firstTwoDigitInteger', () => {
    assert.equal(app.firstTwoDigitInteger([1, 10, 5]), 10);
  });
}); */
