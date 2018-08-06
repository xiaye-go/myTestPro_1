var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var testClass = (function () {
    function testClass() {
        //这里调用学习的函数
        this.testFunc();
    }
    testClass.prototype.testFunc = function () {
        //使用这条代码打印信息
        console.error("test msg 0");
        //两个参数可以使用逗号连接
        console.error("test msg 1", 1);
        //也可以使用 + 连接
        console.error("test msg 2" + 2);
    };
    return testClass;
}());
__reflect(testClass.prototype, "testClass");
//# sourceMappingURL=testClass.js.map