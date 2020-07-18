import _ from 'lodash';

function greeter() {
  let greet = document.createElement('div');

  greet.innerHTML = _.join(['Hello', 'webpack'], ' ');


  return greet;
};

document.querySelector("#root").appendChild(greeter());
