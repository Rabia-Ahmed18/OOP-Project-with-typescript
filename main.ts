// ========================= OOP -Project ================

// creating a OOP -object oriented program with class and costructor

class Person {
    name:string;
    city:string;
    contact:number;
    hobbies:string[];

    constructor(name:string ,city:string , contact:number,hobbies:string[]){
        this.name=name ,   //this. keyword is used to address the similarities of class keywords for parameters
        this.city=city,
        this.contact=contact,
        this.hobbies=hobbies
    }
}

let person1 :Person =new Person("Rabia" , "Karachi" , 12334533 , ["Reading" , "Writing" , "Coding"]);

let person2 :Person =new Person("Saba" , "Hyderabad" , 93928778 , ["Baking" , "Cooking" , "Reading"]);

let person3:Person=new Person("Iqra" , "Karachi" , 5656565 , ["Drawing" , "Painting" , "Writing"]);

// consoling the output of class persons

console.log(person1);
console.log(person2);
console.log(person3);





































