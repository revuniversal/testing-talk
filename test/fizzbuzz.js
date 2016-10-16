import { describe, it } from 'mocha'
import { expect } from 'chai'
import fizzbuzz from '../src/fizzbuzz'

describe('fizzbuzz', () => {
  describe('when applied to a number divisible by 3', () => {
    it('it returns "fizz"', () => {
      expect(fizzbuzz(3)).to.equal('fizz')
      expect(fizzbuzz(6)).to.equal('fizz')
      expect(fizzbuzz(9)).to.equal('fizz')
    })
  })
  
  describe('when applied to a number divisible by 5', () => {
    it('it returns buzz', () => {
      expect(fizzbuzz(5)).to.equal('buzz')
      expect(fizzbuzz(10)).to.equal('buzz')
    })
  })
  
  describe('when applied to a number divisble by 3 and 5', () => {
    it('it returns fizzbuzz', () => {
      expect(fizzbuzz(15)).to.equal('fizzbuzz')
      expect(fizzbuzz(30)).to.equal('fizzbuzz')
    })
  })
  
  describe('when applied to a number that is not divisible by 3 or 5', () => {
    it('it returns the number it was passed', () => {
      expect(fizzbuzz(1)).to.equal(1)
      expect(fizzbuzz(2)).to.equal(2)
      expect(fizzbuzz(4)).to.equal(4)
    })
  })
})