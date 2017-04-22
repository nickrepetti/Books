function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(v) {
  return new Vector(this.x + v.x, this.y + v.y);
};

function Grid(width, height) {
  this.space = new Array(width * height);
  this.width = width;
  this.height = height;
}

Grid.prototype.isInside = function(vector) {
  return vector.x >= 0 && vector.x < this.width &&
         vector.y >= 0 && vector.y < this.height;
};

Grid.prototype.get = function(vector) {
  return this.space[vector.x + (this.width * vector.y)];
};

Grid.prototype.set = function(vector, value) {
  this.space[vector.x + (this.width * vector.y)] = value;
};

const grid = new Grid(5, 5);
const v_1_1 = new Vector(1, 1);
console.log(grid.get(v_1_1));
grid.set(v_1_1, "X");
console.log(grid.get(v_1_1));

const directions = {
  "n":  new Vector( 0, -1),
  "ne": new Vector( 1, -1),
  "e":  new Vector( 1,  0),
  "se": new Vector( 1,  1),
  "s":  new Vector( 0,  1),
  "sw": new Vector(-1,  1),
  "w":  new Vector(-1,  0),
  "nw": new Vector(-1, -1)
};

