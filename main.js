// 1. შექმენი კლასი Person, რომელსაც ექნება name და age ატრიბუტები. დაამატე მეთოდი introduce(), რომელიც დააბრუნებს ტექსტს:
// Hello, my name is [name] and I am [age] years old.

class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    introduce(){
        console.log(`Hallo, my name is ${this.name} and i am ${this.age} years old`); 
    }
    
}
let person1 =  new Person("lasha" ,  21)
person1.introduce()

// 2. დაამატე სტატიკური მეთოდი isAdult(age) კლასთან Person, რომელიც დააბრუნებს true თუ ასაკი მეტია ან ტოლია 18-ის და false - წინააღმდეგ შემთხვევაში.
// დავალება: შექმენი ახალი ობიექტი და შეამოწმე ეს სტატიკური მეთოდი.

class Persons {
    constructor(name, age) {
        this.name = name; 
        this.age = age;    
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    static isAdult(age) {
        return age >= 18;
    }
}


let person2 = new Persons("lasha", 21);
console.log(person2.introduce());  


console.log(Persons.isAdult(21));  
console.log(Persons.isAdult(17));  


// 3. კლასების მემკვიდრეობა (Inheritance)
// შექმენი კლასი Animal, რომელსაც ექნება name და მეთოდი speak(). შექმენი შვილობილი კლასი Dog, რომელსაც ექნება მეთოდი speak(), რომელიც დააბრუნებს: [name] says: Woof!
// მშობელი კლასი Animal
class Animal {
    constructor(name) {
        this.name = name;  
    }
    speak() {
        return (`${this.name} ხმას გამოსცემს.`);
    }
}

class Dog extends Animal {
    speak() {
        return (`${this.name} says: Woof!`);
    }
}


let animal = new Animal("ახალი ცხოველი");
console.log(animal.speak());  

let dog = new Dog("მაქსი");
console.log(dog.speak());  

// 4. DOM-ის გამოყენება
// შექმენი კლასი Button, რომელსაც ექნება label და color პარამეტრები კონსტრუქტორში. დაამატე მეთოდი render(containerId), რომელიც შეიქმნის ღილაკს შესაბამისი ფერით და ტექსტით და დაამატებს კონტეინერში.
// დავალება: შექმენი ორი ღილაკი და დაამატე div ელემენტში.
// Button კლასი
class Button {
    constructor(label, color) {
        this.label = label;  
        this.color = color;  
    }

    
    render(containerId) {
        
        let button = document.createElement("button");
        button.textContent = this.label;  
        button.style.backgroundColor = this.color;  

       
        let container = document.getElementById(containerId);
        container.appendChild(button);
    }
}


let button1 = new Button("Click ", "blue");
let button2 = new Button("Submit", "green");


let container = document.createElement("div");
container.id = "button-container";  
document.body.appendChild(container);  

button1.render("button-container");  
button2.render("button-container");  


// 5. შექმენი კლასი Vehicle, რომელსაც ექნება brand და speed ატრიბუტები და მეთოდი describe(). შემდეგ შექმენი Car კლასი, რომელიც მემკვიდრეობით მიიღებს Vehicle-ს და დაამატე თვისება model.
// დავალება: შექმენი რამდენიმე Car ობიექტი და დაიბეჭდე მათი მონაცემები.
// Vehicle კლასი
class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;  
        this.speed = speed;  
    }

    
    describe() {
        return (`${this.brand} მაქსიმალური სიჩქარე ${this.speed} კმ/სთ.`);
    }
}

class Car extends Vehicle {
    constructor(brand, speed, model) {
        super(brand, speed);  
        this.model = model;  
    }

    
    describe() {
        return (`${this.brand} ${this.model} მანქანის ბოლო სიჩქარე  ${this.speed} კმ/სთ.`);
    }
}


let car1 = new Car("Tesla", 500, "Model S");
let car2 = new Car("BMW", 320, "M3");
let car3 = new Car("Audi", 240, "A7");


console.log(car1.describe());  
console.log(car2.describe());  
console.log(car3.describe());  


// 6. შექმენი კლასი Product, რომელსაც ექნება name, price და category ატრიბუტები. დაამატე სტატიკური მეთოდი filterByCategory(products, category), რომელიც გამოიყვანს კონკრეტული კატეგორიის პროდუქტებს.
// დავალება: შექმენი რამდენიმე პროდუქტი და ფილტრაციით აჩვენე მხოლოდ electronics კატეგორიის პროდუქტები.
// Product კლასი
class Product {
    constructor(name, price, category) {
        this.name = name;      
        this.price = price;    
        this.category = category;  
    }

    
    static filterByCategory(products, category) {
        return products.filter(product => product.category === category);
    }
}


let product1 = new Product("Laptop", 1000, "electronics");
let product2 = new Product("phone", 800, "electronics");

let products = [product1, product2,];


let electronicsProducts = Product.filterByCategory(products,  "electronics");


console.log(electronicsProducts);


// 7. შექმენი კლასი Event, რომელსაც ექნება name და date ატრიბუტები. დაამატე მეთოდი isUpcoming(), რომელიც დაადგენს, ღონისძიება მომავალშია თუ არა.
// დავალება: დაამატე რამდენიმე ღონისძიება და შეამოწმე ისინი.
// Event კლასი
class Event {
    constructor(name, date) {
        this.name = name;   
        this.date = new Date(date); 
    }

    
    isUpcoming() {
        let currentDate = new Date();  
        return this.date > currentDate;  
    }
}

let event1 = new Event("techno party", "2024-12-15");
let event2 = new Event("valeris Party", "2023-12-25");


console.log(`${event1.name} is upcoming: ${event1.isUpcoming()}`);
console.log(`${event2.name} is upcoming: ${event2.isUpcoming()}`); 


// 8. შექმენი კლასი Character, რომელსაც ექნება name და health თვისებები. შექმენი შვილობილი კლასი Warrior, რომელსაც დაემატება attack() მეთოდი, რომელიც შეამცირებს health-ს 10-ით.
// დავალება: შექმენი ორი პერსონაჟი და გამოიყენე მათი attack() მეთოდი.
// Character კლასი
class Character {
    constructor(name, health) {
        this.name = name;    
        this.health = health; 
    }
}


class Warrior extends Character {
    constructor(name, health) {
        super(name, health); 
    }

    
    attack(SecondCharacter) {
        SecondCharacter.health -= 10; 
        console.log(`${this.name} აზარალებს ${SecondCharacter.name}! ${SecondCharacter.name}ს ჯანმრთელობა ახლა ${SecondCharacter.health}.`);
    }
}


let warrior1 = new Warrior("ლაშას", 100);
let warrior2 = new Warrior("გიო", 100);


warrior1.attack(warrior2);  
warrior2.attack(warrior1);  


// 10. შექმენი კლასი Appointment, რომელსაც ექნება title და date ატრიბუტები. დაამატე მეთოდი isToday(), რომელიც დააბრუნებს true, თუ ღონისძიება დღეს უნდა გაიმართოს და false, წინააღმდეგ შემთხვევაში.
// Appointment კლასი
class Appointment {
    constructor(title, date) {
        this.title = title;  
        this.date = new Date(date); 
    }

    
    isToday() {
        let today = new Date();
        return this.date.toDateString() === today.toDateString(); 
    }
}


let appointment1 = new Appointment("lashastan shexvedra", "2024-11-26");
let appointment2 = new Appointment("giostan shexvedra", "2025-11-25");


console.log(`${appointment1.title} aris dges: ${appointment1.isToday()}`);  
console.log(`${appointment2.title} aris dges: ${appointment2.isToday()}`);  
