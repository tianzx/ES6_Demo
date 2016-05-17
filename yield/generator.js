/**
 * Created by tianzx on 2016/5/17.
 */

'use strict'

function  *fn(){
    console.log('tianzx');
}

let it = fn();
let  result = it.next();
console.log(result);