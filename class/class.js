/**
 * Created by tianzx on 2016/5/15.
 */

function User(name,age) {

    this.name = name;
    this.age = age;
}

//static function
User.getClassName = function() {
    return 'User,tianzx';
};

User.prototype.changeName = function(name){
    this.name = name;
};

User.prototype.changeAge  = function(name){
    this.age = age;
};

Object.defineProperty(User.prototype,'info',{
    get(){
        return 'name:' + this.name +' | age:' +this.age;
    }
});

var user = new User('tianzx',22);
console.log(user);
console.log(User.getClassName());

//child class
function Manager(name,age,password) {
    User.call(this.name,age);
    this.password = password;
};

//extends static function
Manage.__proto__= User;

//extends prototype function
Manager.prototype = User.prototype;

Manager.prototype.changePassword= function(pwd) {
    this.password = pwd;
};

var manager = new Manager('leo',22,'123');




