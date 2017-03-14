## 继承 函数 extend

继承时，最好不要，在子类中使用 call 和 apply 继承属性，这样一会有一些副作用。例：

```js
function Parent(name) {
    this.name = name;
    this.test = 12;
}

function Child(name, sex) {
    this.name = sex;
    this.sex = sex;
}
// Child 的实例会具有 test 属性
Child.prototype = new Parent();
Child.prototype.constructor = Child;

function Child2(name, sex) {
    // Child2 的实例会具有 test 属性
    Parent.call(this, name);
    this.sex = sex;
}
extend(Child2, Parent);

function Child3(name, sex) {
    this.name = sex;
    this.sex = sex;
}
extend(Child3, Parent);

var c = new Child('11111', 'm'); // c.test === 12
var c2 = new Child2('22222', 'f'); // c2.test === 12
var c3 = new Child3('33333', 'f'); // c3.test === undefined
```