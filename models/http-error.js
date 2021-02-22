// we can create a JS class
// A class is a blueprint of a JS object

class HttpError extends Error {
  // we can add the constructor method to any class which allow us to run some logic whenever we instansite this class and create a new object based on it.
  constructor(message, errorCode) {
    super(message); // we call it to call the constructor of the base class so of the Error class and forward the message to it. Add a message property to the instances we create based on the class
    this.code = errorCode; // Adds a "code" property to the instances based on this class
  }
}

module.exports = HttpError;
