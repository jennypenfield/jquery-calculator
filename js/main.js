/* global $ */

let numOperArray = []
let inputNum = ''
const OPERATORS = ['+', '-', '*', '/']

$('.btn').click(function buttonInputCalculator () {
  if (this.id === 'C') {
    numOperArray = []
    displayTotal()
  } else if (this.id === 'CE') {
    backspaceOneField()
  } else if (this.id === '=') {
    numOperArray.push(inputNum)
    displayTotal()
    inputNum = ''
  } else if (OPERATORS.includes(this.id)) {
    numOperArray.push(inputNum)
    numOperArray.push(this.id)
    inputNum = ''
  } else {
    inputNum += this.id
    updateTextField(inputNum)
  }
})

function updateTextField (inputNum) {
  $('#display').html(inputNum)
}

function backspaceOneField () {
  numOperArray.pop()
  $('#display').html(numOperArray)
}

function displayTotal () {
  $('#display').html(getTotal())
}

function getTotal () {
  let total = numOperArray.reduce(function (accum, currentVal, index) {
    let nextNum = parseFloat(numOperArray[index + 1])
    if (currentVal === '+') {
      accum += nextNum
    } else if (currentVal === '-') {
      accum -= nextNum
    } else if (currentVal === '*') {
      accum *= nextNum
    } else if (currentVal === '/') {
      accum /= nextNum
    }
    return accum
  }, parseFloat(numOperArray[0]))
  return total
}
