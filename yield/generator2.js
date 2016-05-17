/**
 * Created by tianzx on 2016/5/17.
 */

'use strict'

function  *fn(_name) {
    let name =  yield _name;
    return name;
}

let it  = fn('tianzx');
console.log(it.next());
console.log(it.next('tian'));