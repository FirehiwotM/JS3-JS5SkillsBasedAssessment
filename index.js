class Person {
    constructor(firstName, lastName, age ){
        this._firstName=firstName;
        this._lastName=lastName;
        this._age=age;
    }
    get firstName(){
        return 	this._firstName;
        
    }
    set firstName(newFirstname){
        this.firstName=newFirstname;
    }
    get lastName(){
        return 	this._lastName;
        
    }
    set lastName(newLastname){
        this.lastName=newLastname;
    }
   
   
    get age(){
        return 	this._age;
        
    }
     set age(newAge){
         this.age=newAge;
     }

    
}



function logSubmit(event) {
const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const age = document.getElementById("age").value;
let information = new Person(firstName, lastName, age);
 console.log(document.getElementById('log').innerHTML="Hello, " + firstName + " " + lastName + "! You are" + " " + age + " years old. " ) ; 


    event.preventDefault();
  }
  
  const form = document.getElementById('form');

  form.addEventListener('submit', logSubmit);
