// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
  return drivers;
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
  return drivers;
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
  return drivers;
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
  return drivers; 
}

function appendDriver(name){
  let new_arry = [];
  return new_arry = [...drivers, name];
}


function prependDriver(name){
  let new_arry = [];
  return new_arry = [name, ...drivers];
}

function removeLastDriver(){
  return drivers.slice(0, (drivers.length -1));
}

function removeFirstDriver(){
  return drivers.slice(1);
}
