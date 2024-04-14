import React, { useState, useEffect } from 'react';

const IslandProblem = () => {
    // Initialize a sample 2D grid with '1's and '0's
    const initialGrid = [
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1']
    ];

    // Function to count the number of islands
    const numIslands = (grid) => {
        if (!grid || grid.length === 0) return 0;

        const rows = grid.length;
        const cols = grid[0].length;
        let islandCount = 0;

        // Function to perform DFS and mark the island as visited
        const dfs = (r, c) => {
            // Return if out of bounds or not land ('1')
            if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== '1') {
                return;
            }

            // Mark the current cell as visited by changing it to '0'
            grid[r][c] = '0';

            // Explore the four directions (up, down, left, right)
            dfs(r + 1, c); // Down
            dfs(r - 1, c); // Up
            dfs(r, c + 1); // Right
            dfs(r, c - 1); // Left
        };

        // Iterate through the grid
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                // If the cell is '1' (land), perform DFS and increment the island count
                if (grid[r][c] === '1') {
                    islandCount++;
                    dfs(r, c);
                }
            }
        }

        return islandCount;
    };

    // Calculate the number of islands using the numIslands function
    const [islandCount, setIslandCount] = useState(0);

    useEffect(() => {
        setIslandCount(numIslands(initialGrid));
    }, []);

    return (
        <div>
            <h1>This is Island Problems</h1>
            <p>Number of islands: {islandCount}</p>
        </div>
    );
};

export default IslandProblem;
