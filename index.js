// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name)
}

function appendDriver(name) {
  const result = [...drivers, name]
  return result
}

function prependDriver(name) {
  const result = [name, ...drivers]
  return result
}

function removeLastDriver() {
  const result = drivers.slice(0, drivers.length - 1)
  return result
}

function removeFirstDriver() {
  const result = drivers.slice(1)
  return result
}