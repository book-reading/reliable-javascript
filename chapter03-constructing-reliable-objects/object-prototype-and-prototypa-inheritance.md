# 对象原型及原型继承

JavaScript 中的每个对象，无论创建它使用的是哪种机制，都有一个关联的原型对象，可以从中继承属性。

## 默认对象原型

对象字面量将自动链接到内建的 `Object.prototype` 对象。

```javascript
const chimp = {
  hasThumbs: true,
  swing: function () {
    return 'swinging through the tree tops';
  }
};

chimp.toString(); // [object Object]
```

```javascript
const chimp = {
  hasThumbs: true,
  swing: function () {
    return 'swinging';
  },
  toString: function () {
    return 'I am the chaimpanzee';
  }
};

chimp.toString(); // I am the chaimpanzee
```

**提示**：更多信息，参见 [Object.prototype](https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/object/prototype)。

## 原型继承

尽管 `Object.prototype` 提供了一些有用的属性，但是 JavaScript 原型继承的强大之处就在于可以使用自定义的原型替换默认的原型。

```javascript
const ape = {
  hasThumbs: true,
  hasTail: false,
  swing: function () {
    return 'swinging';
  }
};

const chimp = Object.create(ape);
const bonobo = Object.create(ape);

// `bonobo` 将 `habitat` 属性直接添加到自身，该属性并未被 `ape` 和 `chimp` 所共享
bonobo.habitat = 'Central Africa';
console.log(bonobo.habitat); // Central Africa (from bonobo)
console.log(bonobo.hasTail); // false (from ape prototype)
console.log(chimp.swing()); // swinging (from ape prototype)

// 因为 `ape` 是一个共享原型，所以它的任何改动都将同时反映到 `chimp` 和 `bonobo` 中
ape.hasThumbs = false;
console.log(chimp.hasThumbs); // false
console.log(bonobo.hasThumbs); // false
```

## 原型链

原型链，用于创建多层继承。

```javascript
const primate = {
  stereoscopicVersion: true
};

const ape = Object.create(primate);
ape.hasThumbs = true;
ape.hasTail = false;
ape.swing = function () {
  return 'swinging';
};

const chimp = Object.create(ape);

console.log(chimp.hasTail); // false (from ape prototype)
console.log(chimp.stereoscopicVersion); // true (from primate prototype)
```

遍历深层次原型链可能会引起糟糕的性能，所以我们推荐保持原型链尽可能地浅。
