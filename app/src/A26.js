


// find the path sum in binar tree


const Pathsum=()=>{

   // Define the TreeNode class
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Define the pathSum function
const pathSum = (root, targetSum) => {
    let count = 0;

    // Helper function to find paths starting from a given node
    const findPathsFromNode = (node, currentSum) => {
        if (!node) {
            return;
        }
        
        // Update the current sum with the value of the current node
        currentSum += node.val;
        
        // Check if the current sum matches the target sum
        if (currentSum === targetSum) {
            count += 1;
        }
        
        // Recur for left and right children
        findPathsFromNode(node.left, currentSum);
        findPathsFromNode(node.right, currentSum);
    };
    
    // Helper function to traverse the tree and start a path from each node
    const traverseTree = (node) => {
        if (!node) {
            return;
        }
        
        // Find paths starting from the current node
        findPathsFromNode(node, 0);
        
        // Recur for left and right children
        traverseTree(node.left);
        traverseTree(node.right);
    };
    
    // Start traversing the tree from the root node
    traverseTree(root);
    
    // Return the total count of paths with the target sum
    return count;
};

// Example usage
const root = new TreeNode(10, 
    new TreeNode(5, 
        new TreeNode(3, new TreeNode(3), new TreeNode(-2)),
        new TreeNode(2, null, new TreeNode(1))
    ),
    new TreeNode(-3, null, new TreeNode(11))
);

const targetSum = 8;
console.log(pathSum(root, targetSum)); // Output: The number of paths with the given target sum



    

    return(
        <div>
          <h1>this is path sum</h1>
        </div>
    )
}



export default Pathsum;