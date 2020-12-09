const getVillainName = require('./index.js')
const { assert } = require('chai')


it("should ...", () => {
  assert.equal(getVillainName(new Date("May 3")), "The Despicable Raisin")
  assert.equal(getVillainName(new Date("April 21")), "The Trashy Pickle")
  assert.equal(getVillainName(new Date("December 17")), "The Awkward House Cat")
})

