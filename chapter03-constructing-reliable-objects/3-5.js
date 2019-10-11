// LISTING 3-5: 使用 new 关键字自动创建一个实例

function Marsupial(name, nocturnal) {
  if (!(this instanceof Marsupial)) {
    return new Marsupial(name, nocturnal);
  }

  this.name = name;
  this.isNocturnal = this.nocturnal;
}

const slider = Marsupial('Slider', true);
console.log(slider.name); // Slider
