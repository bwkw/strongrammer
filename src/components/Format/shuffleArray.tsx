const shuffleArray = (array: any[]) => {
  for (var i = array.length - 1; 0 < i; i--) {
    var r = Math.floor(Math.random() * (i + 1))
    var tmp = array[i]
    array[i] = array[r]
    array[r] = tmp
  }
  return array
}

export default shuffleArray
