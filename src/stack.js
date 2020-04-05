class Stack {
    constructor(...items) {
        this.items = [items];
    }

    pop() {
        return this.items[items.length];
    }


}

let stack = new Stack();

stack.push('abel');

console.log(stack.pop());