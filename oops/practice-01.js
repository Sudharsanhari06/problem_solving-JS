let user1={
    name:'Sudharsan',
    age:19,
    login(){
        console.log("login successful",this.name);
    },
    logout(){
        console.log("logout successful");
        
    }
}
user1.login();
console.log(user1.age);


//ES 6 to implement the class.
//class is a template of properties and methods.
class User{
    static numbaerOfUser=0;


    constructor(name, age){
       this.name=name;
       this.age=age;
       User.numbaerOfUser++;
    }

    login(){
        console.log("login successful",this.name);
    }
    logout(){
        console.log("logout successful");
        
    }
    static display(){
            console.log("Total Number of users:",User.numbaerOfUser);       
    }

}


let userOne=new User('sanjai',22);
userOne.login()
console.log("userOne",userOne)
console.log("User.numbaerOfUser",User.numbaerOfUser);
User.display();
// let movie='chd';
// console.log("movie length: ",movie.length)


// Math.sqrt(8)


//Inheritance.
//derived class or sub class  child class
class PaidUser extends User{
    constructor(name,age){
        super(name,age);
        this.storage=100
    }
     message(){
        console.log("You have 100GB free storage");
     }
    //overrideing  -> parent class method overide the child class.
     login(){
      console.log("Thak for your Login...");
      return this;
     }
}

const paidUser1=new PaidUser('hari',14);
paidUser1.message()
console.log(paidUser1);


//method chaining:
paidUser1.login().message();






// prototye:
