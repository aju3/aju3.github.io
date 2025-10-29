// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Get the button and game container elements
    const resetButton = document.getElementById('reset-button');
    const gameContainer = document.getElementById('game-container');

    // Add a click event listener to the reset button
    resetButton.addEventListener('click', () => {
        console.log('New puzzle requested!');
        
        // Call the function to create our game board
        createGrid(5); // This will create a 5x5 grid. You can change the number.
    });

    /**
     * Creates a game grid of a specified size.
     * @param {number} size - The number of rows and columns (e.g., 5 for 5x5).
     */
    function createGrid(size) {
        // Clear the old placeholder text or previous grid
        gameContainer.innerHTML = ''; 
        
        // Set up the grid layout using CSS Grid
        // This tells the container how many columns to have
        gameContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

        // Loop to create all the cells
        for (let i = 0; i < size * size; i++) {
            // Create a new <div> element for each cell
            const cell = document.createElement('div');
            
            // Add a CSS class to it for styling
            cell.classList.add('grid-cell');
            
            // Add it to the game container
            gameContainer.appendChild(cell);
        }
    }

});
