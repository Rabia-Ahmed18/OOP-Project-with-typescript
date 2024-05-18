// ========================= OOP -Project ================
// creating a OOP -object oriented program with class and costructor
var Person = /** @class */ (function () {
    function Person(name, city, contact, hobbies) {
        this.name = name, //this. keyword is used to address the similarities of class keywords for parameters
            this.city = city,
            this.contact = contact,
            this.hobbies = hobbies;
    }
    return Person;
}());
var person1 = new Person("Rabia", "Karachi", 12334533, ["Reading", "Writing", "Coding"]);
var person2 = new Person("Saba", "Hyderabad", 93928778, ["Baking", "Cooking", "Reading"]);
var person3 = new Person("Iqra", "Karachi", 5656565, ["Drawing", "Painting", "Writing"]);
// consoling the output of class persons
console.log(person1);
console.log(person2);
console.log(person3);
