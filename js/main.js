/* global $ */

$('.btn').click(function () {
  if (this.id === 'C') {
    input = ['']
    updateTextField()
  } else if (this.id === 'CE') {
    input.pop()
    updateTextField()
  } else if (this.id === '=') {
    getTotal()
  } else {
    input.push(this.id)
    updateTextField()
  }
})

let input = ['']
let totalString = ''

function updateTextField () {
  totalString = input.join('')
  $('#display').html(totalString)
}

function getTotal () {
  totalString = input.join('')
  $('#display').html(eval(totalString))
}
