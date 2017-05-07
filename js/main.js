/* global $ */

let inputCharArray = []
let totalString = ''
let operators = ['+', '-', '*', '/']

$('.btn').click(function () {
  if (this.id === 'C') {
    inputCharArray = ['']
    updateTextField()
  } else if (this.id === 'CE') {
    inputCharArray.pop()
    updateTextField()
  } else if (this.id === '=') {
    getTotal()
  } else {
    inputCharArray.push(this.id)
    console.log(inputCharArray)
    updateTextField()
  }
})

function updateTextField () {
  totalString = inputCharArray.join('')
  $('#display').html(totalString)
}

function getTotal () {
  if (hasError(inputCharArray)) {
    $('#display').html('ERROR')
  } else {
    totalString = inputCharArray.join('')
    $('#display').html(eval(totalString))
  }
}

function hasError (inputCharArray) {
  let lastIndex = inputCharArray.length - 1
  // check for two operators in a row
  for (let i = 1; i < lastIndex; i++) {
    if (operators.indexOf(inputCharArray[i]) !== -1 && operators.indexOf(inputCharArray[i - 1]) !== -1) {
      return true
    }
  }
  // check for double decimal points
  for (let i = 1; i < lastIndex; i++) {
    if (inputCharArray[i] === '.' && inputCharArray[i - 1] === '.') {
      return true
    }
  }
  // check for an operator at the beginning and/or end of array
  if (operators.indexOf(inputCharArray[0]) !== -1 ||
    operators.indexOf(inputCharArray[lastIndex]) !== -1) {
    return true
  }
  // check for decimal point by itself at beginning or end of array
  if (inputCharArray[lastIndex] === '.' && operators.indexOf(inputCharArray[lastIndex - 1]) !== -1 ||
    inputCharArray[0] === '.' && operators.indexOf(inputCharArray[1]) !== -1) {
    return true
  }
  return false
}
