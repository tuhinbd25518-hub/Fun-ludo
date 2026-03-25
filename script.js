// Ludo Game Logic

// Player class to represent each player in the game
class Player {
    constructor(name) {
        this.name = name;
        this.position = 0;
        this.finished = false;
    }

    // Move the player by a number of spaces
    move(spaces) {
        this.position += spaces;
        // Check if the player has finished the game
        if (this.position >= 56) {
            this.finished = true;
        }
    }
}

// Game class to manage the game state
class LudoGame {
    constructor(players) {
        this.players = players.map(name => new Player(name));
        this.currentPlayerIndex = 0;
    }

    // Start the game
    start() {
        console.log('Game started with players:', this.players.map(p => p.name).join(', '));
    }

    // Play a turn for the current player
    playTurn() {
        const currentPlayer = this.players[this.currentPlayerIndex];
        const diceRoll = this.rollDice();
        console.log(`It's ${currentPlayer.name}'s turn. Rolled: ${diceRoll}`);
        currentPlayer.move(diceRoll);
        console.log(`${currentPlayer.name} is now at position ${currentPlayer.position}.`);

        // Check if current player has finished
        if (currentPlayer.finished) {
            console.log(`${currentPlayer.name} has finished the game!`);
            return;
        }

        // Move to the next player
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    }

    // Roll a dice function
    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }
}

// Example usage
const game = new LudoGame(['Alice', 'Bob', 'Charlie', 'Diana']);
game.start();

// Simulate turns
for (let i = 0; i < 20; i++) {
    game.playTurn();
}