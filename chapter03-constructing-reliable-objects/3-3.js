// LISTING 3-3: Marsupial 函数以及它作为构造函数的用法

// 有袋类动物
function Marsupial(name, nocturnal) {
  this.name = name;
  this.isNocturnal = nocturnal;
}

const maverick = new Marsupial('Maverick', true);
const slider = new Marsupial('Slider', false);

console.log(maverick.isNocturnal); // true
console.log(maverick.name); // Maverick

console.log(slider.isNocturnal); // false
console.log(slider.name); // Slider
