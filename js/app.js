/*---------------------------- Constants ----------------------------*/
const wordLength = 5;
const numOfAttempts = 6;
/*---------------------------- Variables (state) ----------------------------*/
let currentUserGuess = "";
let attempts = 0;
let currentSelectedWord =
  valid5LetterWords[Math.floor(Math.random() * valid5LetterWords.length)];
let keysUsed = {};

/*---------------------------- Cached Elements ----------------------------*/
const keyBoardEl = document.querySelector("#on-screen-keyboard");
const gameBoardEl = document.querySelector("#wordle-game-board");
const startNewGameBtn = document.querySelector("#start-new-game-btn");
const darkModeToggle = document.getElementById("dark-mode-toggle");

/*---------------------------- Functions ----------------------------*/
function init() {
  renderOnScreenkeyboard();
  renderOnScreenBoard();
  initializeDarkMode();
}

function renderOnScreenkeyboard() {
  keyBoardEl.innerHTML = "";
  const keyRows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

  keyRows.forEach((keyRow) => {
    const keyRowEl = document.createElement("div");
    keyRowEl.className = "keyboard-row";

    keyRow.split("").forEach((letter) => {
      const keyboardKey = document.createElement("div");
      keyboardKey.className = "key";
      keyboardKey.textContent = letter;
      keyboardKey.dataset.key = letter;
      keyboardKey.addEventListener("click", () => handleKeyClick(letter));
      keyRowEl.appendChild(keyboardKey);
    });
    keyBoardEl.appendChild(keyRowEl);
  });

  const specialKeysRow = document.createElement("div");
  specialKeysRow.className = "keyboard-row";
  const enterKey = document.createElement("div");
  enterKey.className = "key special-keys";
  enterKey.textContent = "Enter";
  enterKey.dataset.key = "ENTER";
  enterKey.addEventListener("click", () => handleKeyClick("ENTER"));
  specialKeysRow.appendChild(enterKey);

  const backKey = document.createElement("div");
  backKey.className = "key special-keys";
  backKey.textContent = "Back";
  backKey.dataset.key = "BACKSPACE";
  backKey.addEventListener("click", () => handleKeyClick("BACKSPACE"));
  specialKeysRow.appendChild(backKey);

  keyBoardEl.appendChild(specialKeysRow);
}

function renderOnScreenBoard() {
  gameBoardEl.innerHTML = "";
  for (let i = 0; i < numOfAttempts; i++) {
    const boardRow = document.createElement("div");
    boardRow.className = "guess-row";
    for (let l = 0; l < wordLength; l++) {
      const cell = document.createElement("div");
      cell.className = "guess-cell";
      boardRow.appendChild(cell);
    }
    gameBoardEl.appendChild(boardRow);
  }
}

function handleKeyClick(letter) {
  if (letter === "ENTER") {
    if (currentUserGuess.length === wordLength) {
      checkUserGuess();
    } else {
      displayOnScreenMessage("Please complete your guess.");
    }
  } else if (letter === "BACKSPACE") {
    currentUserGuess = currentUserGuess.slice(0, -1);
    updateBoard();
  } else if (currentUserGuess.length < wordLength) {
    currentUserGuess += letter;
    updateBoard();
  }

  const keyElement = document.querySelector(`[data-key="${letter}"]`);
  if (keyElement) {
    keyElement.classList.add("pressed");
    setTimeout(() => {
      keyElement.classList.remove("pressed");
    }, 100);
  }
}

function updateBoard() {
  const guessBoardRows = document.querySelectorAll(".guess-row");
  const currentRow = guessBoardRows[attempts];
  if (currentRow) {
    const guessCells = currentRow.querySelectorAll(".guess-cell");
    for (let i = 0; i < wordLength; i++) {
      guessCells[i].textContent = currentUserGuess[i] || "";
    }
  }
}

function displayOnScreenMessage(message, isError = false) {
  const messageContainer = document.querySelector(
    "#on-screen-message-container"
  );
  messageContainer.textContent = message;
  messageContainer.className = isError ? "message-error" : "message-success";

  setTimeout(() => {
    messageContainer.textContent = "";
    messageContainer.className = "";
  }, 3000);
}

function changeKeyboardColors() {
  Object.keys(keysUsed).forEach((key) => {
    const keyElement = document.querySelector(`[data-key="${key}"]`);
    if (keyElement) {
      const color = keysUsed[key];
      keyElement.style.backgroundColor = color;
    }
  });
}

function feedbackOutput() {
  const guessBoardRows = document.querySelectorAll(".guess-row");
  const currentRowIdx = attempts;
  if (currentRowIdx < 0 || currentRowIdx >= guessBoardRows.length) {
    return;
  }
  const currentRow = guessBoardRows[currentRowIdx];
  const gameBoardtiles = currentRow.querySelectorAll(".guess-cell");
  let winnerFound = true;

  gameBoardtiles.forEach((tile, index) => {
    const letter = currentUserGuess[index];
    if (letter === currentSelectedWord[index]) {
      tile.style.backgroundColor = "green";
      keysUsed[letter] = "green";
    } else if (currentSelectedWord.includes(letter)) {
      tile.style.backgroundColor = "#ffc40c";
      keysUsed[letter] = "#ffc40c";
    } else {
      tile.style.backgroundColor = "gray";
      if (!keysUsed[letter]) {
        keysUsed[letter] = "gray";
      }
      winnerFound = false;
    }
  });

  changeKeyboardColors();

  if (winnerFound) {
    displayOnScreenMessage("Great Job you got it right!", false);
  }
}

function checkUserGuess() {
  if (currentUserGuess.length !== wordLength) {
    displayOnScreenMessage("Please enter a complete guess.", true);
    return;
  }
  if (!valid5LetterWords.includes(currentUserGuess.toUpperCase())) {
    displayOnScreenMessage(
      `That word is not part of this dictionary, try again! HINT: ${currentSelectedWord[0]}`,
      true
    );
    currentUserGuess = "";
    updateBoard();
    return;
  }
  feedbackOutput();
  const guessBoardRows = document.querySelectorAll(".guess-row");
  const currentRow = guessBoardRows[attempts];
  const gameBoardtiles = currentRow.querySelectorAll(".guess-cell");
  let winnerFound = true;
  gameBoardtiles.forEach((tile, index) => {
    if (currentUserGuess[index] !== currentSelectedWord[index]) {
      winnerFound = false;
    }
  });
  if (winnerFound) {
    displayOnScreenMessage(
      "You have guessed the correct word! Congratulations!",
      false
    );
    return;
  }
  attempts++;
  currentUserGuess = "";
  if (attempts >= numOfAttempts) {
    displayOnScreenMessage(
      `Game Over! The correct word was ${currentSelectedWord}`,
      true
    );
    return;
  }
  updateBoard();
}

function startNewGame() {
  currentUserGuess = "";
  attempts = 0;
  currentSelectedWord =
    valid5LetterWords[Math.floor(Math.random() * valid5LetterWords.length)];
  keysUsed = {};
  renderOnScreenBoard();
  renderOnScreenkeyboard();
  displayOnScreenMessage("");
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

document.addEventListener("keydown", (event) => {
  const keyPressed = event.key.toUpperCase();
  if (
    /^[A-Z]$/.test(keyPressed) ||
    keyPressed === "ENTER" ||
    keyPressed === "BACKSPACE"
  ) {
    event.preventDefault();
    handleKeyClick(keyPressed);

    const keyElement = document.querySelector(`[data-key="${keyPressed}"]`);
    if (keyElement) {
      keyElement.classList.add("active");
    }
  }
});

document.addEventListener("keyup", (event) => {
  const keyReleased = event.key.toUpperCase();
  if (
    /^[A-Z]$/.test(keyReleased) ||
    keyReleased === "ENTER" ||
    keyReleased === "BACKSPACE"
  ) {
    const keyElement = document.querySelector(`[data-key="${keyReleased}"]`);
    if (keyElement) {
      keyElement.classList.remove("active");
    }
  }
});

init();
