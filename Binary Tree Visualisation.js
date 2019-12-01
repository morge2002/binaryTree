let array = [10, 3, 76, 2, 1, 34, 100];
let nodes = [];

function setup() {

  createCanvas(600, 600);
  background(0);

  for (var i = 0; i < array.length; i++) {
    nodes[i] = new Node(array[i]);
  }
  nodes[0].root = true;

  for (var i = 0; i < nodes.length; i++) {
    console.log('node ' + i + ': ' + nodes[i].value);
  }

  for (var i = 1; i < nodes.length; i++) {
    createTree(nodes[0], nodes[i]);
  }

  showTree();
}

function draw() {

}

class Node {
  constructor(value, root = false) {
    this.value = value;
    this.right = 0;
    this.left = 0;
    this.root = root;
  }
}

function createTree(rootNode, newNode) {
  console.log('createTree');
  if (newNode.value < rootNode.value) {
    if (rootNode.left != 0) {
      console.log('left root');
      createTree(rootNode.left, newNode);
    } else {
      console.log('left added');
      rootNode.left = newNode;
    }
  } else if (newNode.value >= rootNode.value) {
    if (rootNode.right != 0) {
      console.log('right root');
      createTree(rootNode.right, newNode);
    } else {
      rootNode.right = newNode;
      console.log('right added');
    }
  } else {
    console.log('none');
  }
}

function showTree(rootNode = nodes[0]) {
  if (rootNode.root == true) {
    translate(width / 2, 50);
    ellipse(0, 0, 40);
    textAlign(CENTER, CENTER);
    text(rootNode.value, 0, 0);
  } else {
    
  }

}
