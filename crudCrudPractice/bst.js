// Node class
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Binary Search tree class
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        var newNode = new Node(data);
        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            // if left is null insert node here
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }
        else {
            // if right is null insert node here
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }
    // getRootNode()
    getRootNode() {
        return this.root;
    }
    // inorder(node)
    // Performs inorder traversal of a tree
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log("InOrder traversal", node.data);
            this.inorder(node.right);
        }
    }
    // search for a node with given data
    search(node, data) {
        if (node === null)
            return null;
        else if (data < node.data)
            return this.search(node.left, data);
        else if (data > node.data)
            return this.search(node.right, data);
        else
            return node;
    }

    //preOrder traversal of the tree
    preOrder(node) {
        if (node !== null) {
            console.log("preorder traversal", node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
    preorderIterative(node) {
        // Base Case
        var res=[];
        if (node == null) {
            return;
        }
        // Create an empty stack and push root to it
        var nodeStack = [];
        nodeStack.push(root);

        /* Pop all items one by one. Do following
        for every popped item
        a) print it
        b) push its right child
        c) push its left child
        Note that right child is pushed first so
        that left is processed first */
        while (nodeStack.length > 0) {

            // Pop the top item from stack and print it
            var mynode = nodeStack[nodeStack.length - 1];
            console.log("preOrder Iterative",mynode.data);
            res.push(mynode.data)
            nodeStack.pop();

            // Push right and left children of
            // the popped node to stack
            if (mynode.right != null) {
                nodeStack.push(mynode.right);
            }
            if (mynode.left != null) {
                nodeStack.push(mynode.left);
            }
        }
        return res;
    };
}

// create an object for the BinarySearchTree
var BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
var root = BST.getRootNode();
BST.inorder(root);
console.log(BST.search(root, 17));
console.log(BST.search(root, 18));

BST.preOrder(root);
BST.preorderIterative(root)
// console.log("iterative",BST.preorderIterative(root));