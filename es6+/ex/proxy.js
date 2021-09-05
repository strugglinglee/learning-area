const obj = {
  a: 1,
};

const pObj = new Proxy(obj, {
  get: function (target, propKey, receiver) {
    console.log(`getting ${propKey}!`);
    return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
    console.log(target, propKey, value);
    return Reflect.set(target, propKey, value, receiver);
  },
});

pObj.a = 2;
console.log(pObj.a, obj.a);
