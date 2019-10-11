// LISTING 3-6: 直接添加函数到新的对象

function Marsupial(name, nocturnal) {
  if (!(this instanceof Marsupial)) {
    throw new Error('This object must be created with new');
  }

  this.name = name;
  this.isNocturnal = nocturnal;

  // Each object instance gets its own copy of isAwake
  this.isAwake = function (isNight) {
    return isNight === this.isNocturnal;
  }
}

const maverick = new Marsupial('Maverick', true);
const slider = new Marsupial('Slider', false);

const isNightTime = true;

console.log(maverick.isAwake(isNightTime)); // true
console.log(slider.isAwake(isNightTime)); // false

// each object has its own isAwake function
console.log(maverick.isAwake === slider.isAwake); // false
