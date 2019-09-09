// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver () {
  drivers.push("Ralph");
};

function destructivelyPrependDriver () {
  drivers.unshift("Bob");
};

function destructivelyRemoveLastDriver () {
  drivers.pop();
};

function destructivelyRemoveFirstDriver() {
  drivers.shift();
};

function appendDriver() {
  const allDrivers = [...drivers, "Broom"];
  return allDrivers;
};

function prependDriver () {
  const allDrivers = ["Arnold", ...drivers];
  return allDrivers;
};

function removeLastDriver () {
  const removeLast = drivers.slice(0, drivers.length - 1);
  return removeLast;
};

function removeFirstDriver() {
  const removeFirst = drivers.slice(1);
  return removeFirst;
};
