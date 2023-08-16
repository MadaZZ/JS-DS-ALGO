class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++
        return this.length;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    unshift(item) {
        if (this.length === 0) {
            this.push(item);
            return this.length;
        }
        
        for (let i = this.length - 1; i >= 0; i--) {
            this.data[i + 1] = this.data[i];
        }
        this.data[0] = item;
        this.length++;
        return this.length;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }
        const firstItem = this.data[0];
        for (let i = 0; i <= this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.pop()
        return firstItem;
    }

}

const arr = new MyArray();

// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push(4);

// arr.shift();
// arr.shift();
// arr.shift();
// arr.shift();

// arr.unshift(123);
// arr.unshift(123);