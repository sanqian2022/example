class Stack {
  items = [];

  // 1. 将元素压入栈
  push(element) {
    this.items.push(element);
  }

  // 2. 从栈中取出元素
  pop() {
    return this.items.pop();
  }

  // 3. 查看下栈顶元素
  peek() {
    return this.items[this.items.length - 1];
  }

  // 4. 判断栈是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 5. 获取栈中元素的个数
  size() {
    return this.items.length;
  }

  // 6. toString方法
  toString() {
    return this.items.reduce((acc, item) => acc + item + " ", "");
  }
}

function showStack(s) {
  console.log(s.size());
  console.log(s.peek());
  console.log(s.isEmpty());
  console.log(s.toString());
}

// const s = new Stack();

// s.push(1);
// s.push(2);
// s.push(3);
// s.push(4);
// s.push(5);
// showStack(s);
// s.pop();
// s.pop();
// s.pop();
// s.pop();
// s.pop();
// showStack(s);

// 将十进制转换为二进制
function dec2bin(decNumber) {
  const stack = new Stack();

  while (decNumber > 0) {
    stack.push(decNumber % 2);
    decNumber = Math.floor(decNumber / 2);
  }

  let binaryString = "";
  while (!stack.isEmpty()) {
    binaryString += stack.pop();
  }
  return binaryString;
}

console.log(dec2bin(100));
console.log(dec2bin(10));
console.log(dec2bin(101));
