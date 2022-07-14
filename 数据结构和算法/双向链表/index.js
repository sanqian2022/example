class DoublyLinkedList {
  // 属性
  head = null
  tail = null
  length = 0

  // 内部类
  Node = class {
    constructor(data) {
      this.data = data
      this.prev = null
      this.next = null
    }
  }

  // 追加方法
  append (data) {
    const newNode = new this.Node(data)
    // 判断是否是第一个节点
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
    // length加一
    this.length += 1
  }

  toString () {
    return this.backwardString()
  }

  forwardString () {
    let current = this.tail
    let resultString = ''
    while (current) {
      resultString += current.data + ' '
      current = current.prev
    }
    return resultString
  }

  backwardString () {
    let current = this.head
    let resultString = ''
    while (current) {
      resultString += current.data + ' '
      current = current.next
    }
    return resultString
  }

  insert (position, data) {
    if (position < 0 || position > this.length) return false
    let newNode = new this.Node(data)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      if (position === 0) {
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
      } else if (position === this.length) {
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
      } else {
        let current = this.head
        let index = 0
        while (index++ < position) {
          current = current.next
        }
        newNode.next = current
        newNode.prev = current.prev
        current.prev.next = newNode
        current.prev = newNode
      }
    }

    this.length += 1
  }

  get (position) {
    if (position < 0 || position >= this.length) return null
    let current = null
    if (this.length / 2 > position) {
      current = this.head
      let index = 0
      while (index++ < position) {
        current = current.next
      }

    } else {
      current = this.tail
      let index = this.length - 1
      while (index-- > position) {
        current = current.prev
      }
    }
    return current.data
  }

  indexOf (data) {
    let current = this.head
    let index = 0
    while (current) {
      if (current.data === data) {
        return index
      }
      current = current.next
      index++
    }
  }

  update (position, data) {
    if (position < 0 || position >= this.length) return false
    let current = null
    if (this.length / 2 > position) {
      current = this.head
      let index = 0
      while (index++ < position) {
        current = current.next
      }

    } else {
      current = this.tail
      let index = this.length - 1
      while (index-- > position) {
        current = current.prev
      }
    }
    current.data = data
  }

  removeAt (position) {
    if (position < 0 || position >= this.length) return null
    let current = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      if (position === 0) {
        this.head.next.prev = null
        this.head = this.head.next
      } else if (position === this.length - 1) {
        this.tail.prev.next = null
        this.tail = this.tail.prev
        current = this.tail
      } else {
        let index = 0
        while (index++ < position) {
          current = current.next
        }
        current.prev.next = current.next
        current.next.prev = current.prev
      }
    }
    this.length -= 1
    return current.data
  }

  remove (data) {
    let index = this.indexOf(data)
    return this.removeAt(index)
  }

  isEmpty () {
    return this.length === 0
  }

  size () {
    return this.length
  }

  firstNode () {
    return this.head.data
  }

  lastNode () {
    return this.tail.data
  }
}

const list = new DoublyLinkedList()
list.append('aaa')
list.append('bbb')
list.append('ccc')
list.append('ddd')

console.log(list.remove('ddd'))
console.log(list.size())
console.log(list.isEmpty())
console.log(list.firstNode())
console.log(list.lastNode())
// console.log(list.toString())
// list.insert(0, 'a')
// list.insert(5, 'd')
// list.insert(2, 'c')
// list.update(0, 'AAAAA')
// list.update(5, 'SSS')
// console.log(list.removeAt(3))
// console.log(list.toString())
// console.log(list.get(0))
// console.log(list.indexOf('aaa'))
// console.log(list.get(1))
// console.log(list.indexOf('bbb'))

// console.log(list.get(2))
// console.log(list.get(3))
// console.log(list.get(4))
// console.log(list.get(5))
// console.log(list.get(6))
// console.log(list.get(7))
