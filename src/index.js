import _ from 'lodash';
import printMe from './print.js';

function greeter() {
  let greet = document.createElement('div');

  greet.innerHTML = _.join(['Hello', 'webpack'], ' ');
  const btn = document.createElement("button");
  btn.innerHTML='click to alert!'
  btn.onclick = printMe; 

  greet.appendChild(btn);

  return greet;
};

document.querySelector("#root").appendChild(greeter());
