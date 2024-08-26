/*---------------------------- Constants ----------------------------*/
const wordLength = 5;
const numOfAttempts = 6;
/*---------------------------- Variables (state) ----------------------------*/
let currentGuess = "";
let attempts = 0;
let currentSelectedWord =
  validWords[Math.floor(Math.random() * validWords.length)];
/*---------------------------- Cached Elements ----------------------------*/
const keyBoardEl = document.querySelector("#on-screen-keyboard");
const gameBoardEl = document.querySelector("#wordle-game-board");
const startNewGameBtn = document.querySelector("#start-new-game-btn");
const darkModeToggle = document.getElementById("dark-mode-toggle");

/*---------------------------- Functions ----------------------------*/
function init() {
  renderkeyboard();
  renderBoard();
  initializeDarkMode();
}

function renderkeyboard() {
  keyBoardEl.innerHTML = "";
  const keyRows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

  keyRows.forEach((keyRow) => {
    const keyRowEl = document.createElement("div");
    keyRowEl.className = "keyboard-row";

    keyRow.split("").forEach((letter) => {
      const key = document.createElement("div");
      key.className = "key";
      key.textContent = letter;
      key.addEventListener("click", () => handleKeyClick(letter));
      keyRowEl.appendChild(key);
    });
    keyBoardEl.appendChild(keyRowEl);
  });

  const specialKeysRow = document.createElement("div");
  specialKeysRow.className = "keyboard-row";
  const enterKey = document.createElement("div");
  enterKey.className = "key special-keys";
  enterKey.textContent = "Enter";
  enterKey.addEventListener("click", () => handleKeyClick("Enter"));
  specialKeysRow.appendChild(enterKey);

  const backspaceKey = document.createElement("div");
  backspaceKey.className = "key special-keys";
  backspaceKey.textContent = "Back";
  backspaceKey.addEventListener("click", () => handleKeyClick("Back"));
  specialKeysRow.appendChild(backspaceKey);

  keyBoardEl.appendChild(specialKeysRow);
}

function renderBoard() {
  gameBoardEl.innerHTML = "";
  for (let i = 0; i < numOfAttempts; i++) {
    const row = document.createElement("div");
    row.className = "guess-row";
    for (let j = 0; j < wordLength; j++) {
      const cell = document.createElement("div");
      cell.className = "guess-cell";
      row.appendChild(cell);
    }
    gameBoardEl.appendChild(row);
  }
}

function handleKeyClick(letter) {
  if (letter === "Enter") {
    if (currentGuess.length === wordLength) {
      checkGuess();
    } else {
      displayMessage("Please enter a complete guess.");
    }
  } else if (letter === "Back") {
    currentGuess = currentGuess.slice(0, -1);
    updateBoard();
  } else if (currentGuess.length < wordLength) {
    currentGuess += letter;
    updateBoard();
  }
}

function updateBoard() {
  const guessRows = document.querySelectorAll(".guess-row");
  const currentRow = guessRows[attempts];
  if (currentRow) {
    const guessCells = currentRow.querySelectorAll(".guess-cell");
    for (let i = 0; i < wordLength; i++) {
      guessCells[i].textContent = currentGuess[i] || "";
    }
  }
}

function displayMessage(message, isError = false) {
  const messageContainer = document.querySelector(
    "#on-screen-message-container"
  );
  messageContainer.textContent = message;
  messageContainer.className = isError ? "message-error" : "message-success";
}

function feedbackOutput() {
  const guessRows = document.querySelectorAll(".guess-row");
  const currentRowIdx = attempts;
  if (currentRowIdx < 0 || currentRowIdx >= guessRows.length) {
    return;
  }
  const currentRow = guessRows[currentRowIdx];
  const tiles = currentRow.querySelectorAll(".guess-cell");
  let isWin = true;
  tiles.forEach((tile, index) => {
    if (currentGuess[index] === currentSelectedWord[index]) {
      tile.style.backgroundColor = "green";
    } else if (currentSelectedWord.includes(currentGuess[index])) {
      tile.style.backgroundColor = "yellow";
    } else {
      tile.style.backgroundColor = "gray";
      isWin = false;
    }
  });
  if (isWin) {
    displayMessage(
      "You have guessed the correct word! Congratulations!",
      false
    );
  }
}

function checkGuess() {
  if (currentGuess.length !== wordLength) {
    displayMessage("Please enter a complete guess.", true);
    return;
  }
  if (!validWords.includes(currentGuess.toUpperCase())) {
    displayMessage("Invalid word guess. Try again.", true);
    currentGuess = "";
    updateBoard();
    return;
  }
  feedbackOutput();
  const guessRows = document.querySelectorAll(".guess-row");
  const currentRow = guessRows[attempts];
  const tiles = currentRow.querySelectorAll(".guess-cell");
  let isWin = true;
  tiles.forEach((tile, index) => {
    if (currentGuess[index] !== currentSelectedWord[index]) {
      isWin = false;
    }
  });
  if (isWin) {
    displayMessage(
      "You have guessed the correct word! Congratulations!",
      false
    );
    return;
  }
  attempts++;
  currentGuess = "";
  if (attempts >= numOfAttempts) {
    displayMessage(
      `Game Over! The correct word was ${currentSelectedWord}`,
      true
    );
    return;
  }
  updateBoard();
}

function startNewGame() {
  currentGuess = "";
  attempts = 0;
  currentSelectedWord =
    validWords[Math.floor(Math.random() * validWords.length)];
  renderBoard();
  renderkeyboard();
  displayMessage("");
}

function initializeDarkMode() {
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  }

  darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("dark-mode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("dark-mode", "disabled");
    }
  });
}

startNewGameBtn.addEventListener("click", startNewGame);

init();
