/**
 * Created by tianzx on 2016/5/15.
 */
"use strict";
class User {

    constructor(name,age) {
        this.name =name;
        this.age = age;
    }

    static getClassName() {
        return "hehe";
    }

    changeName(name) {
        this.name = name;
    }
    changeAge(age) {
        this.age = age;
    }
    get info() {
        return 'name:' + this.name +' | age:' +this.age;
    }
};

class Manager extends User{
    constructor(name,age,password){
        super(name,age);
        this.password = password;
    };

    changePassword(password) {
        this.password = password;
    }
};

console.log(typeof User,typeof Manager);
var manager = new Manager('tianzx',22,'123');
manager.changeName('tianzx2');
console.log(manager.info);