// es5
function unique(arr) {
  var res = arr.filter(function(item, index, array) {
      return array.indexOf(item) === index
  })
  return res
}

// es6 
// const unique = arr => [...new Set(arr)]