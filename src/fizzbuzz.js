function fizzbuzz(x) {
  let result = ''
  
  if (x%3 === 0) {
    result += 'fizz'
  }
  if (x%5 === 0) {
    result += 'buzz'
  }
  
  return result || x
}

export default fizzbuzz