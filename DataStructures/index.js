/** Class representing a node.*/
class Node {
    /**
     * Create a node.
     * @param {*} value - List value
     * @param {Node} next - reference to next Node
     */
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

/** Class representing a list*/

class List {
    /**
     * create a list
     */
    constructor(...args){
        this.head = null;
        this._size = 0;
        for(let i = 0; i != args.length; ++i) {
            this.push(args[i]);
        }
    };

    printElements = () => {
      for(let i = this.head; i != null; i = i.next) {
          console.log(i.value);
      }
    };

    findEnd = () => {
        let i = this.head;
        for(; i.next != null; i = i.next);
        return i;
    };

    find = (position) => {
        let current = this.head;
        for (let i = 0; i !== position; ++i) {
            current = current.next;
        }
        return current;
    };

    insert = (value, position) => {
        let current = this.find(position);
        let temp = current.next;
        current.next = new Node(value, temp);
    };

    delete = (position) => {
        let current = this.find(position);
        let temp = current.next;
        current.next = temp.next;
        --this._size;
    };

    push = (value) => {
        if(this.head === null) {
            this.head = new Node(value);
        }
        else {
            let last = this.findEnd();
            last.next = new Node(value);
        }
        ++this._size;
    };

    get size() {
        return this._size;
    }
}
let f = () => {
    let list = new List(1, 2, 5, 6, 7);
    list.push(4);
    list.push(10);
    list.delete(2);
    list.printElements();
    return list.size;
};

console.log("size = " + f());