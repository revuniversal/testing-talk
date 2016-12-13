function add(...args) {
  return args
    .map(x => x || 17)
    .reduce((x,y) => x+y)
}

export default add