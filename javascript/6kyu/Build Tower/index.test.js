const Test = require('@codewars/test-compat')

const towerBuilder = require('.')

describe('Tests', () => {
  it('test', () => {
    Test.assertDeepEquals(towerBuilder(1), ['*'])
    Test.assertDeepEquals(towerBuilder(2), [' * ', '***'])
    Test.assertDeepEquals(towerBuilder(3), ['  *  ', ' *** ', '*****'])
  })
})
