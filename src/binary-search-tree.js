const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.data = null
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.data
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let newNode = new Node(data)
    let curNode = this.data

    const addData = (curNode, newNode) => {
      if (curNode.data < newNode.data) {
        if (curNode.right) {
          addData(curNode.right, newNode)
        } else {
          curNode.right = newNode
        }
      } else if (curNode.data > newNode.data) {
        if (curNode.left) {
          addData(curNode.left, newNode)
        } else {
          curNode.left = newNode
        }
      }
    }

    if (this.data === null) {
      this.data = newNode
    } else {
      addData(curNode, newNode)
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let result = false
    const findData = (curNode, value) => {
      if (curNode) {
        if (curNode.data < value) {
          if (curNode.right) {
            findData(curNode.right, value)
          }
        } else if (curNode.data > value) {
          if (curNode.left) {
            findData(curNode.left, value)
          }
        } else {
          result = true
        }
      }
    }
    findData(this.data, data)

    return result
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let result = null
    const findData = (curNode, value) => {
      if (curNode.data < value) {
        if (curNode.right) {
          findData(curNode.right, value)
        }
      } else if (curNode.data > value) {
        if (curNode.left) {
          findData(curNode.left, value)
        }
      } else {
        result = curNode
      }
    }
    findData(this.data, data)

    return result
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    const removeData = (curNode, value) => {
      if (!curNode) return null
      if (curNode.data < value) {
        if (curNode.right) {
          curNode.right = removeData(curNode.right, value)
        }
      } else if (curNode.data > value) {
        if (curNode.left) {
          curNode.left = removeData(curNode.left, value)
        }
      } else {
        if (curNode.left === null && curNode.right === null) return null
        if (curNode.left === null) {
          curNode = curNode.right
          return curNode
        } else if (curNode.right === null) {
          curNode = curNode.left
          return curNode
        } else {
          let minRight = findMinRight(curNode.right)
          curNode.data = minRight.data
          curNode.right = removeData(curNode.right, minRight.data)
        }
      }
      return curNode
    }
    const findMinRight = (node) => {
      if (node.left) {
        return findMinRight(node.left)
      } else return node
    }

    this.data = removeData(this.data, data)
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this.data) return this.data

    let curNode = this.data;

    while (true) {
      if (curNode.left) {
        curNode = curNode.left;
      } else {
        return curNode.data;
      }
    }
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.data) return this.data

    let curNode = this.data;

    while (true) {
      if (curNode.right) {
        curNode = curNode.right;
      } else {
        return curNode.data;
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};