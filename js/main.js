/* global $ */

let inputCharArray = []
let totalString = ''
let operators = ['+', '-', '*', '/']

$('.btn').click(function buttonInputToArray () {
  if (this.id === 'C') {
    inputCharArray = []
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
    inputCharArray = []
    $('#display').html('ERROR')
  } else {
    totalString = inputCharArray.join('')
    $('#display').html(eval(totalString).toFixed(10))
  }
}

function hasError (inputCharArray) {
  // check error conditions
  if (hasTwoOperatorsInARow(inputCharArray)) {
    return true
  }
  if (hasDoubleDecimalPoints(inputCharArray)) {
    return true
  }
  if (hasOperatorBegOrEnd(inputCharArray)) {
    return true
  }
  if (hasRogueDecimalPoints(inputCharArray)) {
    return true
  }
  return false
}

function hasTwoOperatorsInARow (inputCharArray) {
  for (let i = 1; i < inputCharArray.length; i++) {
    if (operators.indexOf(inputCharArray[i]) !== -1 && operators.indexOf(inputCharArray[i - 1]) !== -1) {
      return true
    }
  }
}

function hasDoubleDecimalPoints (inputCharArray) {
  for (let i = 1; i < inputCharArray.length; i++) {
    if (inputCharArray[i] === '.' && inputCharArray[i - 1] === '.') {
      return true
    }
  }
}

function hasOperatorBegOrEnd (inputCharArray) {
  if (operators.indexOf(inputCharArray[0]) !== -1 ||
    operators.indexOf(inputCharArray[inputCharArray.length - 1]) !== -1) {
    return true
  }
}

function hasRogueDecimalPoints (inputCharArray) {
  if (inputCharArray[inputCharArray.length - 1] === '.' && operators.indexOf(inputCharArray[inputCharArray.length - 1]) !== -1 ||
    inputCharArray[0] === '.' && operators.indexOf(inputCharArray[1]) !== -1) {
    return true
  }
}
