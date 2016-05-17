/**
 * Created by tianzx on 2016/5/17.
 */

'use strict'

function sum(a,b){
    return a+b;
}

function  *fn() {
    let result = sum(yield 1,yield 3);

    console.log(result);
    console.log('my qq' + (yield qq));

    return result;
}
let result = fn().next();
console.log(result);

let result2 = fn().next();
console.log(result2);