class testClass {

    public constructor() {

        //这里调用学习的函数
        this.testFunc();
        this.testFunc1();
    }


    public testFunc() {
        //使用这条代码打印信息
        console.error("test msg 0");
        //两个参数可以使用逗号连接
        console.error("test msg 1", 1);
        //也可以使用 + 连接
        console.error("test msg 2" + 2);
    }

    public testFunc1() {

    }

}