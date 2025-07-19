let {Car,fillGas,repair}=require('./car');

//car file:

let car1=new Car();

car1.drive();


function User(name,age) {
    this.name=name;
    this.age=age;
    // this is not inside the prototype.
    login=function(){
        console.log("login successfull...")
    }
}
User.prototype.login=function(){
    console.log('hi',this.name);
    console.log("you are logging")
}


let user1=new User('sudhar',12);
user1.login()


// get and set 

class Temperature{
    constructor(temp){
        this._temp=temp;  //-> underscore means private varibale
    }
    
    get temp(){
        return this._temp;
    }
    set temp(temp){
        if(temp>100)
            temp=100;
        this._temp=temp;
    }
}


const temp1=new Temperature(25);
temp1.temp=55;
console.log("temp value: ",temp1.temp);




