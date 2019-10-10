// LISTING 3-1: 任意模块模式

// 将一个全局对象作为一个命名空间，用于收集应用中的所有对象和模块
var MyApp = MyApp || {};

// 模块放置在应用命名空间之下
MyApp.wildlifePreserveSimulator = function (animalMaker) {
  const animals = [];

  return {
    addAnimal: function (species, sex) {
      animals.push(animalMaker.make(species, sex));
    },
    getAnimalCount: function () {
      return animals.length;
    }
  };
};

// const preserve = MyApp.wildlifePreserveSimulator(realAnimalMaker);
// preserve.addAnimal(gorilla, female);
