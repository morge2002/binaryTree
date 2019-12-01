// Created by Morgan Lewis - 01/12/2019
//
// This is ths visualisation and implimentation of a binary search tree.
// The starting node is always the first node however this can be chaged,
// and the tree will automatically fit the screen size. This is done recursively
// and takes full advantage of the translate() function when visualising the tree.

//Improvements - This could be improved by getting a better starting node.


let array = [50, 41, 30, 45, 47, 77, 80, 40, 66, 48, 46, 49, 65, 64, 44, 43, 42, 20, 18, 21, 67, 68, 76, 79, 78];
let nodes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  translate(width / 2, 50);

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

function showTree(rootNode = nodes[0], space = 1) {
  space = space + space;
  ellipse(0, 0, 40);
  textAlign(CENTER, CENTER);
  text(rootNode.value, 0, 0);

  if (rootNode.left != 0 || rootNode.right != 0) {
    if (rootNode.left != 0) {
      push();
      stroke(225);
      line(0, 0, (-(width / 2) / space) + 5, windowHeight / 8);
      translate((-(width / 2) / space) + 5, windowHeight / 8);
      showTree(rootNode.left, space);
      pop();
    }
    if (rootNode.right != 0) {
      push();
      stroke(225);
      line(0, 0, ((width / 2) / space) - 5, windowHeight / 8);
      translate(((width / 2) / space) - 5, windowHeight / 8);
      showTree(rootNode.right, space);
      pop();
    }
  }
}
