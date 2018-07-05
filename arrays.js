var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (array, element) {
<<<<<<< HEAD
  array = [element,...array]
  return array
=======
  console.log(array = [element,...array])
>>>>>>> 4df280919e291d6a46fe186504ded8482d5197c7
}


function destructivelyAddElementToBeginningOfArray(array, element) {

<<<<<<< HEAD
  array.unshift(element)
  return array
=======
  console.log(array.unshift(element))
>>>>>>> 4df280919e291d6a46fe186504ded8482d5197c7
}


function addElementToEndOfArray(array, element){
<<<<<<< HEAD
  array = [...array, element]
  return array
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return array
}


function accessElementInArray (array, index) {
  return array[index]
}


function destructivelyRemoveElementFromBeginningOfArray (array){
  array.shift()
  return array
}


function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}


function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length-1)
=======
  console.log (array.push(element))
}

function destructivelyAddElementToEndOfArray (array, element) {
  console.log (array.push(element))
>>>>>>> 4df280919e291d6a46fe186504ded8482d5197c7
}