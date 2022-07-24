class Person {
  // * Private Instances properties - always declare at the top, and will be initialize on the constructor function
  #dni_number;

  constructor(firstName, birthYear, weight, dni) {
    // * Instance properties *
    this.#dni_number = dni;
    this.firstName = firstName;
    this.birthYear = birthYear;
    this._weight = weight; // underscore properties are the ones to be modify with a setter, and because of that we have to specify a getter to it....otherwise will throw an error because we are try to call itself...fall into an infinity loop.
  }
  // * getter and setters - accessor properties */
  // getters and setters make properties on the objects

  // this.age
  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  // this.weight
  get weight() {
    return this._weight;
  }
  // this.weight = newWeight
  set weight(newWeight) {
    this._weight = newWeight;
  }

  // * Instance methods */
  // This methods will be added to Class.prototype
  sayHi() {
    if (this.#whatIsMyDNI()) console.log(`${this.firstName}: Hi! 🙋‍♂️`);
  }
  // * Private Instance Method - this methods can only be called inside the class
  #whatIsMyDNI() {
    return this.#dni_number;
  }

  // * Static methods and properties */
  // This methods and properties will only be attach to the Class itself
  static walk() {
    console.log("Persona is walking");
  }
  static specie = "Human";
  // * Private Static Methods and properties - this ones can only be accesible by the Class itself and inside the class
  static #goPoop() {
    return "I'm pooping in silent";
  }
  static #reproductiveEcosystem = "Penis/Vagina";
}

const jorge = new Person("Jorge", 1992, 105);

/*---------- Child class ----------*/
class Student extends Person {
  constructor(firstName, birthYear, course) {
    // * instance properties */
    // Same public/private properties as class parent
    super(firstName, birthYear); // This function will be always at the top of the constructor function
    // new child properties
    this.course = course;
  }

  /* getters and setters */

  // * Instance methods */
  // This methods will add to Class.prototype
  introduce() {
    console.log(
      `I'm ${this.firstName} and I'm ${this.age}, I'm study ${this.course}`
    );
  }

  /* Static methods and properties */
}
