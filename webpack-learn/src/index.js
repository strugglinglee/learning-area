import _ from 'lodash';
import './style.css';
import Img from './1.jpg';
import Data from './data.xml';

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.classList.add('hello');

  let myImg = new Image();
  myImg.src = Img;
  element.appendChild(myImg);
  console.log(Data);
  return element;
}

document.body.appendChild(component());
