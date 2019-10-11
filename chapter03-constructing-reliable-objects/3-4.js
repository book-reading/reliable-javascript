// LISTING 3-4: 使用 instanceof 增强 new 的使用

function Marsupial(name, nocturnal) {
  if (!(this instanceof Marsupial)) {
    throw new Error('This object must be created with new');
  }

  this.name = name;
  this.isNocturnal = nocturnal;
}

const slider = Marsupial('Slider', true); // throw error
