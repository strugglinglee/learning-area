let text = "this has been a short summer"; 
let pattern = /(..)or(.....)m(.)/g; 
if (pattern.test(text)) { 
 console.log(RegExp.$1); // sh 
 console.log(RegExp.$2); // t sum
 console.log(RegExp.$3); // e
}