class Set {
  // 属性
  items = {}

  // 方法
  add (value) {
    // 判断当前集合中是否已经包含了该元素
    if (this.has(value)) {
      return false
    }
    // 将元素添加到集合中
    this.items[value] = value
    return true
  }

  has (value) {
    return this.items.hasOwnProperty(value)
  }

  remove (value) {
    // 判断该集合中是否包含改元素
    if (!this.has(value)) {
      return false
    }
    delete this.items[value]
    return true
  }

  clear () {
    this.items = {}
  }

  size () {
    return Object.keys(this.items).length
  }

  values () {
    return Object.keys(this.items)
  }

  // 集合见操作
  // 并集
  union (otherSet) {
    let unionSet = new Set()
    let values = this.values()
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }
    values = otherSet.values()
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }
    return unionSet.values()
  }

  // 交集
  intersection (otherSet) {
    let intersectionSet = new Set()

    let values = this.values()
    for (let i = 0; i < values.length; i++) {
      let item = values[i]
      if (otherSet.has(item)) {
        intersectionSet.add(item)
      }
    }
    return intersectionSet.values()
  }

  difference (otherSet) {
    let differenceSet = new Set()
    let values = this.values()
    for (let i = 0; i < values.length; i++) {
      let item = values[i]
      if (!otherSet.has(item)) {
        differenceSet.add(item)
      }
    }
    return differenceSet.values()
  }

  // 子集
  subSet (otherSet) {
    let values = this.values()
    let otherSetValus = otherSet.values()
    return values.every(item => otherSetValus.includes(item))
  }
}

// const set = new Set()
// console.log(set.add('aaa'))
// console.log(set.add('aaa'))
// console.log(set.add('bbb'))
// console.log(set.add('ccc'))
// console.log(set.values())

// // 删除元素
// console.log(set.remove('bbb'))
// console.log(set.values())

// console.log(set.size())
// console.log(set.clear())
// console.log(set.size())

// 并集
let set1 = new Set()
set1.add('aaa')
set1.add('bbb')
set1.add('ccc')
set1.add('ddd')

let set2 = new Set()
set2.add('aaa')
set2.add('bbb')
set2.add('ccc')
set2.add('ddd')
set2.add('eee')

console.log('并集：', set1.union(set2))
console.log('交集：', set1.intersection(set2))
console.log('差集：', set1.difference(set2))
console.log('子集：', set1.subSet(set2))
