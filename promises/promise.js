/**
 * Created by tianzx on 2016/5/21.
 */

var Promise = function() {
    /*
        initialize promise
     */
    
};

Promise.prototype.then = function (onResolved,onRejcted) {
    /**
     * invoke handlers based upon state transition
     */
}

Promise.prototype.resolve = function(value) {
    /**
     * change status from unfulfiled to resolved
     */
}

Promise.prototype.reject =function(error) {
    /**
     * change status from unfulfiled to rejected
     */
}

function searchTwitter(term) {
    var url,xhr,results,promise;
    url = 'http://'
}