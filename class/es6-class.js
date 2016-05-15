/**
 * Created by tianzx on 2016/5/15.
 */

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
}

class Manager extends User{
    constructor(name,age,password){
        super(name,age);
        this.password = password;
    }
}