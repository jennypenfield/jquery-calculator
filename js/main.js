/* global $ */

let inputCharArray = ['']
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
  // check for two operators in a row
  for (let i = 1; i < inputCharArray.length - 1; i++) {
    if (operators.indexOf(inputCharArray[i]) !== -1 && operators.indexOf(inputCharArray[i - 1]) !== -1) {
      return true
    }
  }
  // check for double decimal points
  for (let i = 1; i < inputCharArray.length - 1; i++) {
    if (inputCharArray[i] === '.' && inputCharArray[i - 1] === '.') {
      return true
    }
  }
  // check for an operator at the end of the equation
  if (operators.indexOf(inputCharArray[inputCharArray.length - 1]) !== -1) {
    return true
  }
  return false
}
