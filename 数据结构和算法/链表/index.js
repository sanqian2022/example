class LinkedList {
  head = null;
  length = 0;

  Node = class {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  };

  append(data) {
    const newNode = new this.Node(data);
    // 判断是否是第一个节点
    if (this.length === 0) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length += 1;
  }

  toString() {
    let current = this.head;
    let listString = "";
    while (current) {
      listString += current.data + " ";
      current = current.next;
    }
    return listString;
  }

  insert(position, data) {
    if (position < 0 || position > this.length) return false;
    const newNode = new this.Node(data);
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let index = 0;
      let current = this.head;
      let previous = null;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      newNode.next = current;
      previous.next = newNode;
    }
  }

  get(position) {
    if (position < 0 || position >= this.length) return false;

    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next;
    }
    return current.data;
  }

  indexOf(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) {
        return index;
      }
      index += 1;
      current = current.next;
    }

    return -1;
  }

  update(position, data) {
    if (position < 0 || position >= this.length) return false;
    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next;
    }
    current.data = data;
    return true;
  }

  removeAt(position) {
    if (position < 0 || position >= this.length) return false;
    let current = this.head;
    if (position === 0) {
      this.head = this.head.next;
    } else {
      let index = 0;
      let previous = null;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.length -= 1;
    return current.data;
  }

  remove(data) {
    const position = this.indexOf(data);
    return this.removeAt(position);
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }
}

const list = new LinkedList();
list.append("a");
list.append("b");
list.append("c");
list.append("d");
// list.insert(1, "aa");
// console.log(list.toString());
// console.log(list.get(1));
// console.log(list.indexOf("b"));
// console.log(list.indexOf("e"));
// list.update(0, "aaa");
// console.log(list.toString());
// list.removeAt(2);
list.remove("c");
console.log(list.toString());
console.log(list.isEmpty());
console.log(list.size());
