// LISTING 3-7: 添加函数到构造函数的原型

function Marsupial(name, nocturnal) {
  if (!(this instanceof Marsupial)) {
    throw new Error('This object must be created with new');
  }

  this.name = name;
  this.isNocturnal = nocturnal;
}

// Each object instance shares one copy of isAwake
Marsupial.prototype.isAwake = function (isNight) {
  return isNight === this.isNocturnal;
}

const maverick = new Marsupial('Maverick', true);
const slider = new Marsupial('Slider', false);

const isNightTime = true;

console.log(maverick.isAwake(isNightTime)); // true
console.log(slider.isAwake(isNightTime)); // false

// the objects share a single instance of isAwake
console.log(maverick.isAwake === slider.isAwake); // true
