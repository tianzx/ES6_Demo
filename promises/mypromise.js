/**
 * Created by tianzx on 2016/5/21.
 */

function  asyncFunction(a,b) {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(a-b);
        },100);
    });
}

asyncFunction(2,1).then(function(result){
    if(result>0) {
        return asyncFunction(result,2);
    }
}).then(function(result){
    //if(result>1)
})