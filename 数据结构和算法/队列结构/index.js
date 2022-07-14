class Queue {
  items = [];
  // 1.将元素添加到队列中
  enQueue(elm) {
    this.items.push(elm);
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
    return this.items.join(" ");
  }
}

const queue = new Queue();
// queue.enQueue("a");
// queue.enQueue("b");
// queue.enQueue("c");
// queue.enQueue("d");
// console.log(queue.front());
// queue.deQueue();
// queue.enQueue("e");
// console.log(queue.isEmpty());
// console.log(queue.toString());

function passGame(nameList, num) {
  const queue = new Queue();
  nameList.forEach((item) => queue.enQueue(item));

  while (queue.size() > 1) {
    for (let i = 0; i < num - 1; i++) {
      queue.enQueue(queue.deQueue());
    }
    queue.deQueue();
  }

  console.log(queue.size());
  const endName = queue.front();
  console.log(endName);
  return endName;
}

passGame(['ben', 'anna', 'duo', 'luck', 'tom', 'white'], 3)
