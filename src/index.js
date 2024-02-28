/* eslint-disable max-classes-per-file */
import "normalize.css";
import "./style.css";

import { LinkedList } from "./linkedlist";
import { HashMap } from "./hashmap";

const hashMap = new HashMap();
hashMap.set("Carlos", "123");
hashMap.set("Maria", "456");
hashMap.set("Carla", "789");
hashMap.set("Carlos", "123456");
console.log(hashMap);
console.log(hashMap.get("Carlos"));
console.log(hashMap.remove("Carlos"));
console.log(hashMap);
console.log(hashMap.length());

console.log(hashMap);
console.log(hashMap.keys());
console.log(hashMap.values());
console.log(hashMap.entires());
