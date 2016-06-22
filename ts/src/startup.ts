import {List} from './list';

let list = new List<number>();
list.add(1);
list.add(2);
list.add(3);
console.log(list.exportString());

