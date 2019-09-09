// Write your solution here
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  return drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift();
}

function appendDriver(name) {
  let h = drivers.slice(0, drivers.length);
  h.push(name);
  return h;
}

function prependDriver(name) {
  let h = drivers.slice(0, drivers.length);
  h.unshift(name);
  return h;
}

function removeLastDriver() {
  let h = drivers.slice(0, drivers.length);
  h.pop();
  return h;
}

function removeFirstDriver() {
  let h = drivers.slice(0, drivers.length);
  h.shift();
  return h;
}
