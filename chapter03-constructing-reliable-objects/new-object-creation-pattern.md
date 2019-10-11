# `new` 对象创建模式

```javascript
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
```

## 潜在问题

JavaScript 并未提供任何信息表示 `Marsupial` 函数应该被用作构造函数（与 `new` 关键字一起使用的函数）。如果构造函数并未使用 `new` 关键字执行，那么 JavaScript 也不提供内建的保护。出于这个原因，大多数开发者都通过使用帕斯卡 (PascalCase) 区分构造函数。

## 增强 `new` 的使用

尽管 `JavaScript` 并未做任何事情来增强构造函数 `new` 关键字的使用，但是使用 `instanceof` 操作符添加这样的增强是一件简单的事情。

```javascript
// LISTING 3-4: 使用 instanceof 增强 new 的使用

function Marsupial(name, nocturnal) {
  if (!(this instanceof Marsupial)) {
    throw new Error('This object must be created with new');
  }

  this.name = name;
  this.isNocturnal = nocturnal;
}

const slider = Marsupial('Slider', true); // throw error
```

> 当使用 `new` 关键字执行构造函数时，JavaScript 将创建一个新的空白对象，把新对象的原型链接到构造函数的 `prototype` 属性，并使用 `this` （新的对象）执行构造函数。

```javascript
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
```

一致性将产生可靠性，因此我们偏向于使用代码清单 3-4 展示的保护机制。在 `new` 关键字被忽略时抛出异常将保证所有 `Marsupial` 对象都以相同的方式实例化，从而产生更加一致和可靠的代码。另外，与测试驱动开发一起使用时，任何因为缺少 `new` 关键字所生成的异常会立即被识别出来。

`new` 对象创建模式也允许创建定义一次并对所有实例可用的函数属性。

```javascript
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
```

函数属性也可以被添加到构造函数的 `prototype` 中。在构造函数的 `prototype` 上定义函数的优点是：在创建大量对象实例时将函数的副本数量限制为 1 个、减少内存占用以及提高性能。

```javascript
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
```

关于使用构造函数的原型可以获得的性能增益，可以访问 http://jsperf.com/performance-prototype-vs-non-prototype。
