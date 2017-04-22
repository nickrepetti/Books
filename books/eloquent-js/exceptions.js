function InputError(message) {
  this.message = message;
  this.stack = (new Error()).stack;
}

InputError.prototype = Object.create(Error.prototype);
InputError.prototype.name = "InputError";

function promptDirection(question) {
  const result = "taco";
  const str = result.toLowerCase();
  if (str == "left") {
    return "L";
  } else if (str == "right") {
    return "R";
  }
  throw new InputError("Invalid direction: " + result);
}

for (;;) {
  try {
    const dir = promptDirection("Where?");
    console.log("You chose ", dir);
    break;
  } catch (e) {
    console.log(e);
  }
}

