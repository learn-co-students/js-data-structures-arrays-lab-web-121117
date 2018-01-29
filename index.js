// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
};

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
};

function destructivelyRemoveLastDriver() {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver() {
  drivers.shift(name);
}

function appendDriver(name) {
  newDrivers = [...drivers, name]
  return newDrivers;
}

function prependDriver(name) {
  newDrivers = [name, ...drivers]
  return newDrivers;
}

function removeLastDriver() {
  newDr = drivers.slice(0, drivers.length - 1);
  return newDr;
};

function removeFirstDriver() {
  newDr = drivers.slice(1);
  return newDr;
}
