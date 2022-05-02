const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    this.rootTree = addNewNode(this.rootTree, data);

    function addNewNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addNewNode(node.left, data);
      } else {
        node.right = addNewNode(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    let CurrentNode = this.rootTree;

    while (CurrentNode) {
      if (CurrentNode.data === data) {
        return true;
      }

      if (data < CurrentNode.data) {
        CurrentNode = CurrentNode.left;
      } else {
        CurrentNode = CurrentNode.right;
      }
    }

    return false;
  }

  find(data) {
    let CurrentNode = this.rootTree;

    while (CurrentNode) {
      if (CurrentNode.data === data) {
        return CurrentNode;
      }

      if (data < CurrentNode.data) {
        CurrentNode = CurrentNode.left;
      } else {
        CurrentNode = CurrentNode.right;
      }
    }
    return null;
  }

  remove(data) {
    this.rootTree = removeNode(this.rootTree, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRightData = node.right;

        while (minRightData.left) {
          minRightData = minRightData.left;
        }

        node.data = minRightData.data;
        node.right = removeNode(node.right, minRightData.data);
        return node;
      }
    }
  }

  min() {
    let CurrentNode = this.rootTree;
    while (CurrentNode.left) {
      CurrentNode = CurrentNode.left;
    }
    if (CurrentNode) return CurrentNode.data;
    return null;
  }

  max() {
    let CurrentNode = this.rootTree;
    while (CurrentNode.right) {
      CurrentNode = CurrentNode.right;
    }
    if (CurrentNode) return CurrentNode.data;
    return null;
  }
}

module.exports = {
  BinarySearchTree
};