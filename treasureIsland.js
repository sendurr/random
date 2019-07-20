// You have a map that marks the location of a treasure island. Some of the map area has jagged rocks and dangerous reefs. Other areas are safe to sail in.
// There are other explorers trying to find the treasure. So you must figure out a shortest route to the treasure island.
//     Assume the map area is a two dimensional grid, represented by a matrix of characters.
//     You must start from the top-left corner of the map and can move one block up, down, left or right at a time.
//     The treasure island is marked as ‘X’ in a block of the matrix. ‘X’ will not be at the top-left corner.
//     Any block with dangerous rocks or reefs will be marked as ‘D’. You must not enter dangerous blocks. You cannot leave the map area.
//     Other areas ‘O’ are safe to sail in. The top-left corner is always safe.
//     Output the minimum number of steps to get to the treasure.
//     from aonecode.com
//
// e.g.
//     Input
//     [
//     [‘O’, ‘O’, ‘O’, ‘O’],
// [‘D’, ‘O’, ‘D’, ‘O’],
// [‘O’, ‘O’, ‘O’, ‘O’],
// [‘X’, ‘D’, ‘D’, ‘O’],
// ]
//
// Output from aonecode.com
// Route is (0, 0), (0, 1), (1, 1), (2, 1), (2, 0), (3, 0) The minimum route takes 5 steps.

 const input = [
     ["O", "O", "O", "O"],
     ["D", "O", "D", "O"],
     ["O", "O", "O", "O"],
     ["X", "O", "O", "O"]
 ];
// const input = [
//     ["O", "O"],
//     ["X", "O"]
// ];
// const input = [
//     ["O", "O", "O"],
//     ["D", "O", "D"],
//     ["O", "O", "O"],
//     ["X", "O", "O"]
// ];

let minPath = 16;
const visitedNode = {};

function currentNode(a, row, col, dist) {
    // console.log(`${row},${col} is upper Node - ${upperNode (a, row, col)}`);
    // console.log(`${row},${col} is lower Node - ${lowerNode (a, row, col)}`);
    // console.log(`${row},${col} is right Node - ${rightNode (a, row, col)}`);
    // console.log(`${row},${col} is left Node - ${leftNode (a, row, col)}`);
    // console.log(`${row},${col} is left upper Node - ${leftUpperNode (a, row, col)}`);
    // console.log(`${row},${col} is right upper Node - ${rightUpperNode (a, row, col)}`);
    // console.log(`${row},${col} is left lower Node - ${leftLowerNode (a, row, col)}`);
    // console.log(`${row},${col} is right lower Node - ${rightLowerNode (a, row, col)}`);

    if (!rightNode (a, row, col) ) {
        if (a[row][col + 1] === "X") {
            if (minPath > dist + 1) {
                console.log(`Found X with distance ${minPath} at ${row},${col}`);
                minPath = dist + 1;
            }
        } else if (a[row][col + 1] !== "D" && !isVistedNode(row, col, row, col +1)) {
            setCurrenNodeToVisited(row, col, row, col +1);
            currentNode(a, row, col + 1, dist + 1);
        }
    }

    if (!lowerNode (a, row, col)) {
        if (a[row + 1][col] === "X") {
            if (minPath > dist + 1) {
                console.log(`Found X with distance ${minPath} at ${row},${col}`);
                minPath = dist + 1;
            }
        } else if (a[row + 1][col] !== "D" && !isVistedNode(row, col, row + 1, col)) {
            setCurrenNodeToVisited(row, col, row + 1, col);
            currentNode(a, row + 1, col, dist + 1);
        }
    }

    if (!leftNode (a, row, col)) {
        if (a[row][col - 1] === "X") {
            if (minPath > dist + 1) {
                console.log(`Found X with distance ${minPath} at ${row},${col}`);
                minPath = dist + 1;
            }
        } else if (a[row][col - 1]  !== "D" && !isVistedNode(row, col, row, col - 1)) {
            setCurrenNodeToVisited(row, col, row, col - 1);
            currentNode(a, row, col -1 , dist + 1);
        }
    }

    if (!upperNode (a, row, col)) {
        if (a[row - 1][col] === "X") {
            if (minPath > dist + 1) {
                console.log(`Found X with distance ${minPath} at ${row},${col}`);
                minPath = dist + 1;
            }
        } else if (a[row - 1][col]  !== "D" && !isVistedNode(row, col, row - 1, col)) {
            setCurrenNodeToVisited(row, col, row - 1, col);
            currentNode(a, row - 1, col , dist + 1);
        }
    }

    setCurrenNodeToUnVisited(row, col);
}

function upperNode (a, row, col) {
    if (row === 0) {
        return true;
    }
    return false;
}

function lowerNode (a, row, col) {
    if (row === a.length - 1) {
        return true;
    }
    return false;
}

function rightNode (a, row, col) {
    if (col === a[0].length - 1) {
        return true;
    }
    return false;
}

function leftNode (a, row, col) {
    if (col === 0) {
        return true;
    }
    return false;
}

function isVistedNode (currentRow, currentCol, nextRow, nextCol) {
    try {
        if (visitedNode[`${nextRow}${nextCol}`]) {
            if (visitedNode[`${nextRow}${nextCol}`].indexOf(`${currentRow}${currentCol}`) !== -1) {
                return true;
            }
        }
        if (visitedNode[`${currentRow}${currentCol}`]) {
            if (visitedNode[`${currentRow}${currentCol}`].indexOf(`${nextRow}${nextCol}`) !== -1) {
                return true;
            }
        }
        return false;
    } catch(error) {
        console.log(error);
    }
}

function setCurrenNodeToVisited(currentRow, currentCol, nextRow, nextCol) {
    try {
        if (visitedNode[`${currentRow}${currentCol}`]) {
            visitedNode[`${currentRow}${currentCol}`].push(`${nextRow}${nextCol}`);
        } else {
            visitedNode[`${currentRow}${currentCol}`] = [];
            visitedNode[`${currentRow}${currentCol}`].push(`${nextRow}${nextCol}`);
        }
    } catch(error) {
        console.log(error);
    }
}

function setCurrenNodeToUnVisited(currentRow, currentCol) {
    try {
        if (visitedNode[`${currentRow}${currentCol}`]) {
            delete visitedNode[`${currentRow}${currentCol}`];
        }
    } catch(error) {
        console.log(error);
    }
}

currentNode(input, 0, 0, 0);
console.log(minPath);