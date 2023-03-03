import { Map } from "immutable";

const obj = Map({
  a: 1,
});

const c_obj = obj.set("a", 2);

console.log(obj.get("a"), c_obj.get("a"));
