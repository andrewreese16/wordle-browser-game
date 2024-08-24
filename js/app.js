const wordLength = 5;
const maxAttempts = 6;
const validWords = [
  "ABOVE",
  "ALIKE",
  "ARISE",
  "ABUSE",
  "ALIVE",
  "ARRAY",
  "ACTOR",
  "ALLOW",
  "ASIDE",
  "ACUTE",
  "ADMIT",
  "ALONG",
  "ADOPT",
  "ADULT",
  "AFTER",
  "AGAIN",
  "AGENT",
  "AGREE",
  "AHEAD",
  "ALARM",
  "BOOTH",
  "BREAD",
  "BRAND",
  "BREAK",
  "BOUND",
  "BREED",
  "BRIEF",
  "BRING",
  "BROAD",
  "BROKE",
  "BRAKE",
  "BROWN",
  "BUILD",
  "BUILT",
  "DELAY",
  "DOZEN",
  "BEGIN",
  "BEGAN",
  "BEGUN",
  "DOING",
  "DRAFT",
  "DRAMA",
  "DRAWN",
  "DREAM",
  "DRESS",
  "DRILL",
  "DRINK",
  "DRIVE",
  "DYING",
  "EAGER",
  "EARLY",
  "EARTH",
  "EIGHT",
  "ELITE",
  "ENJOY",
  "ENTER",
  "JUDGE",
  "LABEL",
  "LARGE",
  "LASER",
  "LATER",
  "LAYER",
  "LEARN",
  "LEASE",
  "LEAVE",
  "LEVEL",
  "LIMIT",
  "LIGHT",
  "PEACE",
  "PANEL",
  "PHASE",
  "PHONE",
  "PHONY",
  "PILOT",
  "PITCH",
  "PLACE",
  "PLANE",
  "POINT",
  "POUND",
  "SHELF",
  "SHEET",
  "SHIRT",
  "SHIFT",
  "SHACK",
  "SHOOT",
  "SHOCK",
  "SHORT",
  "SHOWN",
  "SIGHT",
  "SINCE",
  "SIXTY",
  "SKILL",
  "SLEEP",
  "SLIDE",
  "SMALL",
  "SMART",
  "SMILE",
  "SMITH",
  "SMOKE",
  "SOLID",
  "SOLVE",
  "SORRY",
  "SOUND",
  "SOUTH",
  "SPACE",
  "UPSET",
  "URBAN",
  "USUAL",
  "VALID",
  "VALUE",
  "VIDEO",
  "VIRUS",
  "VISIT",
  "VOICE",
  "WORTH",
  "WHITE",
  "WORST",
  "WORSE",
  "WHILE",
  "YOUTH",
  "YIELD",
  "WHICH",
  "WORRY",
  "WORLD",
  "WHERE",
  "WROTE",
  "WRITE",
  "WHEEL",
  "WATER",
  "TRAIN",
  "WRONG",
  "WOMAN",
  "WOMEN",
  "WHOSE",
  "WATCH",
  "WOUND",
  "WASTE",
  "WHOLE",
  "STUFF",
  "TIGHT",
  "UPPER",
  "THROW",
  "STUDY",
  "STUCK",
  "STICK",
  "STACK",
  "UNITY",
  "UNION",
  "THREE",
  "STRIP",
  "UNDUE",
  "THOSE",
  "THESE",
  "STORY",
  "STORM",
  "THIRD",
  "UNDER",
  "TWICE",
  "THINK",
  "STORE",
  "STATE",
  "STOOD",
  "THING",
  "TRUTH",
  "TRUST",
  "THICK",
  "STONE",
  "STOCK",
  "STEEL",
  "THEIR",
  "THERE",
  "STILL",
  "TRUCK",
  "TRIES",
  "THEME",
  "TRIED",
  "TRIAL",
  "THEFT",
  "STEAM",
  "TRADE",
  "TRACK",
  "TOWER",
  "STAFF",
  "SPORT",
  "TASTE",
  "TAKEN",
  "SPOKE",
  "SPIKE",
  "TOTAL",
  "TABLE",
  "SPLIT",
  "SPENT",
  "SWEET",
  "TOPIC",
  "TODAY",
  "SUPER",
  "SPEND",
  "SPEAK",
  "TIMED",
  "TIMES",
  "TIMER",
  "STYLE",
  "SPARE",
  "SHARP",
  "ROUGH",
  "QUITE",
  "QUOTE",
  "QUEEN",
  "QUICK",
  "SHALL",
  "STAND",
  "SHAPE",
  "SERVE",
  "PROUD",
  "RIGHT",
  "PROOF",
  "REFER",
  "SCORE",
  "SCOPE",
  "READY",
  "REACH",
  "PRIOR",
  "PRIME",
  "RAPID",
  "RURAL",
  "ROYAL",
  "ROOMY",
  "PRIDE",
  "PRICE",
  "PRESS",
  "ROUND",
  "RADIO",
  "PARTY",
  "NEVER",
  "MEANT",
  "PAPER",
  "NEEDS",
  "MAYOR",
  "MATCH",
  "OUGHT",
  "MOUTH",
  "MARCH",
  "MOUSE",
  "OTHER",
  "ORDER",
  "OUTER",
  "MAKER",
  "MAGIC",
  "MONTH",
  "MONEY",
  "OCCUR",
  "NURSE",
  "LUNCH",
  "MODEL",
  "LUCKY",
  "LOWER",
  "LOCAL",
  "MIGHT",
  "NOISE",
  "NEWLY",
  "METAL",
  "FORCE",
  "GROSS",
  "ISSUE",
  "INPUT",
  "GRANT",
  "FLEET",
  "FRUIT",
  "INNER",
  "GRAND",
  "FLASH",
  "GRADE",
  "IMAGE",
  "GRACE",
  "FIRST",
  "FINAL",
  "GOING",
  "IDEAL",
  "GLOBE",
  "FIGHT",
  "FIFTY",
  "GLASS",
  "HOUSE",
  "HOTEL",
  "GIVEN",
  "FIFTH",
  "FIELD",
  "FIBER",
  "FIBRE",
  "FAULT",
  "FULLY",
  "HENCE",
  "HEAVY",
  "FALSE",
  "FAITH",
  "FRONT",
  "HEART",
  "HARRY",
  "HAIRY",
  "FRESH",
  "EXTRA",
  "EXIST",
  "FRAUD",
  "HAPPY",
  "GUIDE",
  "FRANK",
  "EXACT",
  "EVERY",
  "FRAME",
  "GUEST",
  "GUESS",
  "FOUND",
  "EVENT",
  "ERROR",
  "FORUM",
  "GUARD",
  "GROWN",
  "FORTY",
  "EQUAL",
  "ENTRY",
  "FORTH",
  "GROUP",
  "DEATH",
  "COURT",
  "CHEST",
  "COULD",
  "DATED",
  "CHECK",
  "COAST",
  "DANCE",
  "DAILY",
  "COACH",
  "CHEAP",
  "CHASE",
  "CHOSE",
  "CLOSE",
  "CLICK",
  "CHART",
  "CHAIR",
  "CLOCK",
  "CROWN",
  "CROWD",
  "CLEAR",
  "CHAIN",
  "CAUSE",
  "CLEAN",
  "CREAM",
  "CROSS",
  "CRIME",
  "CLAIM",
  "CARRY",
  "CRASH",
  "CABLE",
  "CRAFT",
  "COVER",
  "CHINA",
  "ARENA",
  "BLOOD",
  "BLOCK",
  "BASES",
  "BASED",
  "BLING",
  "BLIND",
  "BLINK",
  "BENCH",
  "ALTER",
  "BELOW",
  "ALONE",
  "ASSET",
  "BEING",
  "KNACK",
  "KNOCK",
  "KOALA",
  "KNEES",
  "KIOSK",
  "KNEEL",
  "KNOLL",
  "KHAKI",
  "KNELT",
  "KOOKY",
  "KNEAD",
  "KICKS",
  "KNOBS",
  "KUDOS",
  "KIDDY",
  "HABIT",
  "HELLO",
  "HAIKU",
  "HASTE",
  "HANDY",
  "HANDS",
  "HAZEL",
  "HOARD",
  "HAZED",
  "HACKS",
  "HARDY",
  "HASTY",
  "HAVEN",
  "HAVOC",
  "HAUNT",
  "HARSH",
  "HATCH",
  "HAILS",
  "HEELS",
  "HEFTY",
  "HERON",
  "HEDGE",
  "HEAPS",
  "HEIST",
  "HERBS",
  "HELIX",
  "HIVES",
  "HINGE",
  "HIPPO",
  "HEAVE",
  "HITCH",
  "HOBBY",
  "HOLLY",
  "HOUND",
  "HOLES",
  "HOLED",
  "HOIST",
  "HOCUS",
  "HYMNS",
  "HYENA",
  "HUMUS",
  "CANAL",
  "CHARM",
  "COMBO",
  "CURRY",
  "CEASE",
  "CANDY",
  "COMMA",
  "COMIC",
  "CURSE",
  "CELLO",
  "CHURN",
  "CAKES",
  "CUTIE",
  "CEDAR",
  "CRUST",
  "CLUCK",
  "CRUMB",
  "CENSE",
  "CRUDE",
  "CRUMP",
  "CHIME",
  "CABAL",
  "CAJON",
  "CRATE",
  "CACTI",
  "CASTE",
  "CHEER",
  "CHALK",
  "CADDY",
  "CADET",
  "CHAMP",
  "CRACK",
  "CHASM",
  "CRAZY",
  "CHESS",
  "CHAOS",
  "CANON",
  "CIVIC",
  "CLACK",
  "CLING",
  "CLOVE",
  "CLEAT",
  "CLAMP",
  "CLEFT",
  "CLONE",
  "CLOAK",
  "CLOUD",
  "CLANK",
  "CLICK",
  "CREAK",
  "CRUEL",
  "CROAK",
  "CRAMP",
  "CRANK",
  "CRANE",
  "CLASS",
  "CRISP",
  "CRUST",
  "CRUSH",
  "CROCK",
  "CRAWL",
  "CUPID",
  "CREST",
  "CRAVE",
  "CURRY",
  "CUBIC",
  "CUMIN",
  "CYCLE",
  "CYBER",
  "CYTON",
  "CYNIC",
  "CLASH",
  "CLOTH",
  "COUGH",
  "CONCH",
  "COUNT",
  "CORAL",
  "COBBY",
  "COUPE",
  "COVET",
  "CREEK",
  "CREEP",
  "CRIMP",
  "CREPE",
  "INDEX",
  "INLET",
  "ICONS",
  "IDEAS",
  "IGLOO",
  "IDIOM",
  "IDYLL",
  "ICING",
  "IDIOT",
  "IDOLS",
  "IMPLY",
  "IMPEL",
  "IMBUE",
  "INFRA",
  "INCUR",
  "INSET",
  "INFER",
  "INFIX",
  "DADDY",
  "DANDY",
  "DAUNT",
  "DAIRY",
  "DIARY",
  "DAISY",
  "DEBIT",
  "DELV",
  "REMIT",
  "DELTA",
  "DEMON",
  "DEBUG",
  "DECAY",
  "DEBUT",
  "DENIM",
  "DECOR",
  "DENSE",
  "DEPOT",
  "DETER",
  "DEPTH",
  "DETOX",
  "DEFER",
  "DIZZY",
  "DISCO",
  "DIGIT",
  "DIRTY",
  "DITCH",
  "DIMLY",
  "DINER",
  "DINGO",
  "DINGY",
  "DODGE",
  "DOGMA",
  "DOUBT",
  "DOUGH",
  "DAILY",
  "DREAD",
  "DRAFT",
  "DROWN",
  "DROID",
  "DRAPE",
  "DROOP",
  "DRESS",
  "DRIFT",
  "DUSTY",
  "DUMMY",
  "DWELL",
  "DYING",
  "DRYER",
];
/*---------------------------- Variables (state) ----------------------------*/
let currentGuess = "";
let attempts = 0;
let selectedWord = validWords[Math.floor(Math.random() * validWords.length)];

/*------------------------ Cached Element References ------------------------*/
const keyboardEl = document.querySelector("#keyboard");
const gameBoardEl = document.querySelector("#game-board");
const startNewGameBtn = document.querySelector("#startNewGameBtn");
/*-------------------------------- Functions --------------------------------*/
function initGame() {
  renderKeyboard();
  renderBoard();
}

function renderKeyboard() {
  keyboardEl.innerHTML = "";
  const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

  rows.forEach((row) => {
    const rowEl = document.createElement("div");
    rowEl.className = "key-row";

    row.split("").forEach((letter) => {
      const key = document.createElement("div");
      key.className = "key";
      key.textContent = letter;
      key.addEventListener("click", () => handleKeyClick(letter));
      rowEl.appendChild(key);
    });

    keyboardEl.appendChild(rowEl);
  });

  const specialKeysRow = document.createElement("div");
  specialKeysRow.className = "key-row";

  const enterKey = document.createElement("div");
  enterKey.className = "key key-small-text";
  enterKey.textContent = "Enter";
  enterKey.addEventListener("click", () => handleKeyClick("Enter"));
  specialKeysRow.appendChild(enterKey);

  const backspaceKey = document.createElement("div");
  backspaceKey.className = "key key-small-text";
  backspaceKey.textContent = "Back";
  backspaceKey.addEventListener("click", () => handleKeyClick("Back"));
  specialKeysRow.appendChild(backspaceKey);

  keyboardEl.appendChild(specialKeysRow);
}

function renderBoard() {
  gameBoardEl.innerHTML = "";
  for (let i = 0; i < maxAttempts; i++) {
    const row = document.createElement("div");
    row.className = "guess-row";
    for (let j = 0; j < wordLength; j++) {
      const tile = document.createElement("div");
      tile.className = "guess-tile";
      row.appendChild(tile);
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
    const tiles = currentRow.querySelectorAll(".guess-tile");
    for (let i = 0; i < wordLength; i++) {
      tiles[i].textContent = currentGuess[i] || "";
    }
  }
}

function displayMessage(message, isError = false) {
  const messageContainer = document.querySelector("#message-container");
  messageContainer.textContent = message;
  messageContainer.className = isError ? "message-error" : "message-success";
}

function provideFeedback() {
  const guessRows = document.querySelectorAll(".guess-row");

  const currentRowIndex = attempts;
  if (currentRowIndex < 0 || currentRowIndex >= guessRows.length) {
    return;
  }

  const currentRow = guessRows[currentRowIndex];
  const tiles = currentRow.querySelectorAll(".guess-tile");
  let isWin = true;

  tiles.forEach((tile, index) => {
    if (currentGuess[index] === selectedWord[index]) {
      tile.style.backgroundColor = "green";
    } else if (selectedWord.includes(currentGuess[index])) {
      tile.style.backgroundColor = "yellow";
      isWin = false;
    } else {
      tile.style.backgroundColor = "gray";
      isWin = false;
    }
  });

  if (isWin) {
    displayMessage("Congratulations! You've guessed the word!", false);
  }
}

function checkGuess() {
  if (currentGuess.length !== wordLength) {
    displayMessage("Please enter a complete guess.", true);
    return;
  }

  if (!validWords.includes(currentGuess.toUpperCase())) {
    displayMessage("Invalid word. Try again.", true);
    currentGuess = "";
    updateBoard();
    return;
  }

  provideFeedback();

  const guessRows = document.querySelectorAll(".guess-row");
  const currentRow = guessRows[attempts];
  const tiles = currentRow.querySelectorAll(".guess-tile");
  let isWin = true;

  tiles.forEach((tile, index) => {
    if (currentGuess[index] !== selectedWord[index]) {
      isWin = false;
    }
  });

  if (isWin) {
    displayMessage("Congratulations! You've guessed the word!", false);
    return;
  }

  attempts++;
  currentGuess = "";

  if (attempts >= maxAttempts) {
    displayMessage(`Game Over! The correct word was ${selectedWord}`, true);
    return;
  }

  updateBoard();
}

function startNewGame() {
  currentGuess = "";
  attempts = 0;
  selectedWord = validWords[Math.floor(Math.random() * validWords.length)];
  renderBoard();
  renderKeyboard();
  displayMessage("");
}

startNewGameBtn.addEventListener("click", startNewGame);

initGame();
