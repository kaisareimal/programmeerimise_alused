//class - puhtam ja struktureeritud viis objekte üles ehitada

//saab luua klassi, mille sees toimuvad tegevused antud parameetritega, millele saad anda väärtused mujal
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: €${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const salesTax = 0.05;

//lood uue eseme antud klassiga ja annad parameetrid
const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Jeans", 25.5);
const product3 = new Product("Bra", 100);

//teed tegevusi klassis antud funktsioonidega (nt. annad eraldi hinna ja eseme ja arvutad hinna koos maksuga)
product1.displayProduct();
const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): ${total.toFixed(2)}`);

product2.displayProduct();
const total2 = product2.calculateTotal(salesTax);
console.log(`Total price (with tax): ${total2.toFixed(2)}`);

product3.displayProduct();
const total3 = product3.calculateTotal(salesTax);
console.log(`Total price (with tax): ${total3.toFixed(2)}`);

//static - keyword, defineerib propertid ja methodid, mis on klassi omad, mitte selle klasssi poolt loodud objektide omad

class MathUtil {
  static PI = 3.14159;

  static GetDiameter(radius) {
    return radius * 2;
  }
  static getCirc(radius) {
    return 2 * this.PI * radius;
  }

  static getArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.GetDiameter(10));
console.log(MathUtil.getCirc(10));
console.log(MathUtil.getArea(10));
console.log(MathUtil.PI);

class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }
  //staatiline funktsioon, mille väljakutsumine käib klassi kaudu
  static getUserCount() {
    console.log(`There are ${User.userCount} users online`);
  }
  //mitte staatiline funktsioon, läheb kaasa objektiga
  sayHello() {
    console.log(`Hello, my username is ${this.username}`);
  }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");
console.log(user1.username);
console.log(user2.username);
console.log(user3.username);

//mitte staatiline funktsioon
user1.sayHello();
user2.sayHello();
user3.sayHello();

//staatilised funktsioonid
console.log(User.userCount);
User.getUserCount();

//Inheritance (class ChildName extends ParentName) - pärimine, child klassid pärivad enda parent klasside omadused

//PARENT
class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

//CHILD
class Rabbit extends Animal {
  name = "rabbit";
  run() {
    console.log(`This ${this.name} is running`);
  }
}
class Fish extends Animal {
  name = "fish";
  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}

class Hawk extends Animal {
  name = "hawk";
  fly() {
    console.log(`This ${this.name} is flying`);
  }
}
class Dog extends Animal {
  name = "dog";
  play() {
    console.log(`This ${this.name} is playing`);
  }
}

//OBJEKTID
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();
const dog = new Dog();

//HAWK sõi REBBITI ÄRA
rabbit.alive = false;

//kontroll
console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
fish.eat();
hawk.sleep();

//erinevused child klasside vahel
rabbit.run();
fish.swim();
hawk.fly();
dog.play();

//super - keyword klassides, et kutsuda välja konstruktor (this = see objekt, super = parent sellele objektile)

class Animal2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  move(speed) {
    console.log(`${this.name} moves at a speed of ${speed}km/h`);
  }
}

//Child klassidesse saad superiga anda väärtused juba sisse superiga, ja ta võtab need ise parent klassist
class Rabbit2 extends Animal2 {
  constructor(runSpeed) {
    super("Bugs", 1);
    this.runSpeed = runSpeed;
  }
  run() {
    console.log(`${this.name} can run`);
    super.move(this.runSpeed);
  }
}
class Fish2 extends Animal2 {
  constructor(swimSpeed) {
    super("Fishy", 2);
    this.swimSpeed = swimSpeed;
  }
  swim() {
    console.log(`${this.name} can swim`);
    super.move(this.swimSpeed);
  }
}

const rabbit2 = new Rabbit2(10);
const fish2 = new Fish2(4);

//kontroll omaduste ülekandumisele
console.log(rabbit2.name);
console.log(rabbit2.age);
console.log(rabbit2.runSpeed);
console.log(fish2.name);
console.log(fish2.age);
console.log(fish2.swimSpeed);

//parent klassi funktsioonide ülekandumine
rabbit2.run();
fish2.swim();

//GETTERS JA SETTERS

//kontrollid get ja set'iga, et väärtused on positiivsed numbrid
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  //set kontrollib, et on õige kõik
  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error("Width must be a postitive number!");
    }
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error("Height must be a postitive number!");
    }
  }
  //get annab väärtused tagasi neile vajaminevatesse kohtadesse
  get width() {
    return `${this._width} cm`;
  }

  get height() {
    return `${this._height} cm`;
  }

  get area() {
    return this._width * this._height;
  }
}

const rectangle = new Rectangle(2, 5);

//kontroll
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

//kuidas kontrollida, et on nimi string ja vanus number
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  //kontrollid set'iga, et antud uus nimi on nii string kui ka pikem kui 0 karakterit
  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error("First name has to be a real name!");
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("Last name has to be a real name!");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error("Age must be a not negative number");
    }
  }

  //get'iga saad väärtused tagasi algsesse objekti
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get fullName() {
    return this._firstName + " " + this._lastName;
  }
  get age() {
    return this._age;
  }
}

const person = new Person("Sponge", "von Swaure", 3);

//kontroll
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);
