# 模块模式

模块模式是 JavaScript 中最古老的模式之一。它采用一个 **函数**，该函数主要的目的是 **数据隐藏**，而该函数将返回一个包含了模块 API 的 **对象**。模块分为两类：通过调用函数构造的模块和基于函数（在声明时立即执行）的模块。

## 任意模块

通过调用模块的函数，从而得到 API。

尽管模块返回的是一个对象字面量，但是依赖可以被注入到外层函数中，并找到它们进入字面量的方式。

因为模块可以被注入到其他模块中，所以它们易于扩展，将旧版本模块注入到新版本中，这样新版本就可以按需要封装、暴露和扩展它。

## 立即执行模块

外部函数将在声明时立即执行，正如任意模块一样返回 API。返回的 API 将被赋给一个命名空间的全局变量，然后它将成为该模块的一个单例。

外部函数将在声明时立即执行，而不是在应用程序的启动代码调用它时执行。出于这个原因，它的依赖不能被注入到外部函数，除非它们碰巧在函数（立即）执行时是可用的。

## 创建可靠的模块

- 单一职责原则：每个模块只应该有一个任务。这将使 API 短小、内聚并且可管理。
- 如果模块将为自己创建对象，那么请问这些对象是否应该由依赖注入提供——直接或者注入工厂的方式。
- 如果模块扩展了另一个对象的行为，那么请确保不要改变该行为的语义。这就是里氏替换原则。
