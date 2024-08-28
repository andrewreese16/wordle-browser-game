# User Stories

1. **Game Setup**
As a user, I want to see a clear game board and on-screen keyboard when I start the game, so I know where to make guesses and see my progress.
2. **On-Screen Keyboard**
As a user, I want to be able to click on letters in the on-screen keyboard to make a guess, so I don't have to use the physical keyboard.
3. **Entering Guesses**
As a user, I want to see the letters I click appear on the game board in the correct position, so I know what I'm guessing.
4. **Checking Validity**
As a user, I want the game to check if the guessed word is valid (i.e., from a predefined list), so I only submit meaningful guesses.
5. **Receiving Feedback**
As a user, I want to receive immediate visual feedback on my guess:
Green Tile: Letter is correct and in the right position.
Yellow Tile: Letter is correct but in the wrong position.
Gray Tile: Letter is not in the word.
6. **Animated Tiles**
As a user, I want to see animated tiles when letters are revealed, so the feedback is visually engaging.
7. **Winning and Losing**
As a user, I want to know if I have guessed the word correctly or if the game is over, so I can understand the outcome of my guesses.
8. **Error Messages**
As a user, I want to see error messages if I try to submit an invalid word, so I know what went wrong and can try again.
9. **Starting a New Game**
As a user, I want to be able to start a new game after finishing one, so I can play again without refreshing the page manually.


# Pseudocode

1. **Game Setup**
Initialize the game environment:
Create the game board with a grid for guesses.
Display the on-screen keyboard.
2. **On-Screen Keyboard**
Create a grid of clickable keys representing letters from A to Z.
Assign an event handler to each key to handle letter clicks.
3. **Entering Guesses**
When a key is clicked:
Add the letter to the current guess.
Update the game board to display the current guess.
4. **Checking Validity**
When the user completes a guess:
Check if the guessed word is in the predefined list of valid words.
If valid, proceed with feedback. If invalid, show an error message.
5. **Receiving Feedback**
For each letter in the guess:
Compare it with the corresponding letter in the selected word.
Update the tile color based on the comparison:
Green for correct letter and position.
Yellow for correct letter but wrong position.
Gray for incorrect letter.
6. **Animated Tiles**
Apply CSS animations to tiles when updating their colors, enhancing visual feedback.
7. **Winning and Losing**
If the guessed word matches the selected word:
Display a winning message.
If the user has used all attempts without guessing correctly:
Display a losing message with the correct word.
8. **Error Messages**
If an invalid word is entered:
Show an error message indicating that the word is not in the list.
Allow the user to try again.
9. **Starting a New Game**
After a game ends:
Provide an option to start a new game.
Reset game state, including the board, attempts, and selected word.