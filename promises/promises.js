/**
 * Created by tianzx on 2016/5/16.
 */

function asyncFun(a,b,cb){
    setTimeout(function(){
        cb(a+b);
    },200);
}

asyncFun(1,2,function(result){
    console.log(result);
})

console.log(2);

function asyncFun2(a,b){
    return new Promise(function(resolve,reject){

        if(typeof a!=='number' || typeof  b!=='number') {
            reject(new Error("no number"));
        }
        setTimeout(function(){
            resolve(a+b);
        },200);
    });
}
asyncFun2(1,'a').then(function(result){
    if(result>2){
        return asyncFun2(result,2)
    }
},function(error){
    console.log('first -',error)
}).then(function(result){
    if(result>4){
        console.log('ok');
    }
}).catch(function(error){
    console.log(error);
})