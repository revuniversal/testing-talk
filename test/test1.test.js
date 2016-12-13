import add from '../src/add'
import {expect} from 'chai'
import Chance from 'chance'

var chance = new Chance();

describe('add', () => {
  describe('when adding null to a number', () => {
    var x
    beforeEach(() => x = choosePositiveInteger())
    
    it('the result will be the non-null number plus 17', () => {
      var result = add(...chance.shuffle([x, null]))
      expect(result).to.equal(x + 17)
    })
  })
  describe('given 2 positive integers', () => {
    var first, second
    beforeEach(() => {
      first = choosePositiveInteger()
      second = choosePositiveInteger()
    })

    describe('when they are passed to add', () => {
      var result
      beforeEach(() => result = add(first, second))
      
      it('their sum will be returned', () => {
        expect(result).to.equal(first + second)
      })
    })
  })
})

function choosePositiveInteger() {
  return  5
}