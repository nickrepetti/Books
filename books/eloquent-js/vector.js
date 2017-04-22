function Vector(x, y) {
  this.x = x;
  this.y = y;
}

const vector1 = new Vector(3, 6);
const vector2 = new Vector(6, 12);

Vector.prototype.length = function() {
  return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
}

Object.defineProperty(Vector, "length", {
  get: function() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
});

Vector.prototype.plus = function(v) {
  return new Vector(this.x + v.x, this.y + v.y);
}

Vector.prototype.minus = function(v) {
  return new Vector(this.x - v.x, this.y - v.y);
}

console.log(vector1.length());
console.log(vector2.length());

console.log(vector1.plus(vector2).length());
console.log(vector1.minus(vector2).length());

