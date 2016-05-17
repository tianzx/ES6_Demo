/**
 * Created by tianzx on 2016/5/17.
 */

'use strict'

function  *fn(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    console.log('tianzx');
}

let it = fn();
console.log(it.next);
console.log(it.next);
console.log(it.next);
console.log(it.next);
let  result = it.next();
console.log(result);