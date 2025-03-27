

function inorderTraversal(root) {
    let result = []; //holds all the values in our root

    function dfs(node) { // helper function to traverse down the tree
        if (node === null) return;
    
        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    }

    dfs(root);
    return result;
}

function preorderTraversal(root) {
    let result = [];

    function dfs(node) {
        if (node === null) return;

        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return result;
}

function postorderTraversal(root) {
    let result = [];

    function dfs(node) {
        if (node === null) return;

        dfs(node.left);
        dfs(node.right);
        result.push(node.val);
    }

    dfs(root);
    return result;
}

