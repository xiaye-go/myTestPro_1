class BaseClass {

    public constructor(...args: any[]) {

    }

    public static getInstance(...args: any[]) {
        let Class: any = this;
        if (!Class._instance) {
            let len = args.length;
            if (len == 0) {
                Class._instance = new Class();
            } else if (len == 1) {
                Class._instance = new Class(args[0]);
            } else if (len == 2) {
                Class._instance = new Class(args[0], args[1]);
            } else if (len == 3) {
                Class._instance = new Class(args[0], args[1], args[2]);
            } else if (len == 4) {
                Class._instance = new Class(args[0], args[1], args[2], args[3]);
            } else if (len == 5) {
                Class._instance = new Class(args[0], args[1], args[2], args[3], args[4]);
            }
            return Class._instance;
        } else {
            return Class._instance;
        }
    }
}