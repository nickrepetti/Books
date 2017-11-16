"use strict"

const dataSet = ["Stack", "Queue", "Tree", "Binary Tree", "Binary Search Tree",
                 "Linked List", "AVL Tree", "Red Black Tree", "Hash Table", "Heap",
                 "Graph", "Trie", "Quick Sort", "Merge Sort", "Insertion Sort",
                 "Selection Sort", "Heap Sort", "Breadth First Search", 
                 "Depth First Search", "Binary Search", "Dijkstra's Algorithm"];

document.getElementById("generate-btn").addEventListener("click", (event) => {
  const rows = document.getElementById("rows").value;
  const cols = document.getElementById("cols").value;
  startGame(dataSet, rows, cols);
});

let selectedIndex;
let selectedItem;
let gameData;
let gameBoard;

function startGame(dataSet, rows, cols) {
  let gameContainer = document.getElementById("game");

  while (gameContainer.firstChild) {
    gameContainer.removeChild(gameContainer.firstChild);
  }

  selectedIndex = -1;
  selectedItem = {};

  gameData = initData(dataSet, rows, cols);
  gameBoard = initGameBoard();
  drawGameBoard(cols);
};

// Picks n random items from the data set.
function initData(dataSet, rows, cols) {
  const numItems = rows * cols / 2;
  return shuffle(dataSet).slice(0, numItems);
};

function initGameBoard() {
  let gameBoard = [];

  gameData.forEach((data, i) => {
    gameBoard.push(i);
    gameBoard.push(i);
  });

  return shuffle(gameBoard);
}

function drawGameBoard(cols) {
  let table = document.createElement("table");
  let tr = document.createElement("tr");
  
  for (let i = 0; i < gameBoard.length; i++) {
    if (i !== 0 && i % cols === 0) {
      table.appendChild(tr);
      tr = document.createElement("tr"); 
    }

    let td = document.createElement("td");
    td.innerText = "?";
    td.style = "border: 1px solid #000000; padding: 30px; width: 150px; text-align: center;";
    td.dataset.key = gameBoard[i];
    td.addEventListener("click", handleClick);
    tr.appendChild(td);
  }

  table.appendChild(tr);
  document.getElementById("game").appendChild(table);
};

async function handleClick(event) {
  let item = event.target;
  const key = item.dataset.key;
  const gameItem = gameBoard[key];
  item.innerText = gameData[gameItem];

  // Check if this is the second turn
  if (selectedIndex > -1) {
    // Check if there's a match
    if (gameItem === gameBoard[selectedIndex]) {
      // Remove click listener for these items
      item.removeEventListener("click", handleClick);
      selectedItem.removeEventListener("click", handleClick);
    } else {
      await sleep(2000);
      item.innerText = "?";
      selectedItem.innerText = "?";
    }
    selectedIndex = -1;
  } else {
    selectedIndex = key;
    selectedItem = item;
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// https://bost.ocks.org/mike/shuffle
function shuffle(array) {
  let m = array.length, t, i;

  // While there remain elements to shuffle
  while (m) {

    // Pick a remaining element
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

