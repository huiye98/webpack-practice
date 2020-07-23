import _ from 'lodash';
// import Print from './print'
import './style.css'

function component(){
    const element = document.createElement('div');
    const button = document.createElement('button');
    
    button.innerHTML = 'Click me and look at the console!';

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // button.onclick = Print.bind(null, 'Hello webpack!');
    element.appendChild(button)

    return element;
}

document.body.appendChild(component());