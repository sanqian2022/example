class PriorityQueue {
  queueElement = class {
    constructor(element, priority) {
      this.element = element;
      this.priority = priority;
    }
  };

  items = [];

  enQueue(element, priority) {
    const queueElement = new this.queueElement(element, priority);
    this.items.push(queueElement);
    this.items = this.items.sort(
      (first, second) => first.priority - second.priority
    );
  }

  // 2. 从队列中删除前端元素
  deQueue() {
    return this.items.shift();
  }

  // 3.查看前端元素
  front() {
    return this.items[0];
  }

  // 4.查看队列是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 5.查看队列中元素的个数
  size() {
    return this.items.length;
  }

  // 6.toString
  toString() {
    return this.items
      .map((item) => `${item.element}-${item.priority}`)
      .join(" ");
  }
}

const queue = new PriorityQueue();
queue.enQueue("anna", 18);
queue.enQueue("emma", 19);
queue.enQueue("ben", 16);
queue.enQueue("duo", 17);
console.log(queue.toString());
