class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

var size = 0;
var linkedlist = null;
var head = new Node(null);

function getSize() {
    console.log(`Linkedlist size = ${size}`);
}


function addNode(element) {
    var node = new Node(element);
    linkedlist.next = node;
    linkedlist = node;
    size++;
}



function deleteNode(position) {
    if (head.next == null) {
        console.log("Linkedlist is empty!");
    } else if (position > size) {
        console.log(`${position} outside linkedlist size`);
    } else {
        var previousNode = head;
        var currentNode = head.next;
        var index = 1;
        while(index < position) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            index++;
        }
        size--;
        previousNode.next =  currentNode.next;
        console.log(`delete node ${currentNode.element}`);
        if (position === size - 1) {
            linkedlist = previousNode;
        }
    }
}

function init(){
    linkedlist = head;
    console.log("Linkedlist initialised.")
}

function printLinkedList() {
    if (head.next == null) {
        console.log("Linkedlist is empty!");
    } else {
        var currentNode = head;
        while(currentNode.next != null) {
            currentNode = currentNode.next;
            console.log(`node -> ${currentNode.element}`);
        }
    }
}


init();
getSize();
printLinkedList();
addNode(12);
addNode(2);
addNode(10);
addNode(54);
getSize();
printLinkedList();
deleteNode(1);
deleteNode(2);
deleteNode(1);
deleteNode(1);
printLinkedList();
addNode(99);
printLinkedList();

