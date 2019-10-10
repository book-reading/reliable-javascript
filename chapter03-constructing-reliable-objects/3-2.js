// LISTING 3-2: 单例模块

var MyApp = MyApp || {};

MyApp.wildlifePreserveSimulator = (function () {
  const animals = [];

  return {
    addAnimal: function (animalMaker, species, sex) {
      animals.push(animalMaker.make(species, sex));
    },
    getAnimalCount: function () {
      return animals.length;
    }
  };
})(); // <- 立即执行

// MyApp.wildlifePreserveSimulator.addAnimal(realAnimalMaker, gorilla, female);
