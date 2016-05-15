/**
 * Created by tianzx on 2016/5/15.
 */

function User(name,age) {

    this.name = name;
    this.age = age;
}

//static function
User.getClassName = function() {
    return 'User';
};

User.prototype.changeName = function(name){
    this.name = name;
};

User.prototype.changeAge  = function(name){
    this.age = age;
};


