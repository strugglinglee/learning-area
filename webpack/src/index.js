import _ from 'lodash';
// import printMe from './print';
import './style.css';
// import { cube } from './math';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  var element = document.createElement('div');
  // const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
  // console.log(_.default.join)

  var button = document.createElement('button');
  var br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';


  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = (e) =>
    import(/* webpackChunkName: "print" */ './print').then((module) => {
      var print = module.default;

      print();
    });

  return element;
}

// let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
// document.body.appendChild(element);

// getComponent().then((component) => {
document.body.appendChild(component());
// });

// if (module.hot) {
//   module.hot.accept('./print.js', function () {
//     console.log('Accepting the updated printMe module!');
//     document.body.removeChild(element);
//     element = component(); // 重新渲染页面后，component 更新 click 事件处理
//     document.body.appendChild(element);
//   });
// }
