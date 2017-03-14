// 简单模拟 Object.create
if (!Object.create) {
    Object.create = function (o) {
        var F = function () {};

        F.prototype = o;

        return new F();
    };
}

/**
 * 继承
 *     具体查看 README 中的例子
 */
export function extend(Child, Parent) {
    // 防止 Parent 的一些副作用
    // Child 构造器中如果这样写 Parent.apply(this, arguments); 也会影响到子类
    // 最好在子类中 不要这样 Parent.apply(this, arguments); 来继承父类中的属性
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;

    // 保存父类的引用
    Child.super = Parent.prototype;
}