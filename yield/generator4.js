/**
 * Created by tianzx on 2016/5/17.
 */

'use strict'

function  asyncF(name){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('my name is :' +name);
        });
    });
}

function  *fn() {
    console.log(yield asyncF('tianzx'));
}

let gr = fn();
function exec(gr){
    let result = gr.next(value);
    if(!result.done){
        if(result.value instanceof Promise){
            result.value.then(function(){
                exec(gr,v);
            })
        }else{
            exec(gr,result.value);
        }
    }
}