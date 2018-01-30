// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(name) {
  drivers.push(name);
}
function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}
function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const drivers_new = [...drivers, name];
  return drivers_new
}

function prependDriver(name) {
  const drivers_new = [name, ...drivers];
  return drivers_new
}

function removeLastDriver() {
  return drivers.slice(0,2);
}

function removeFirstDriver() {
  return drivers.slice(1);
}
