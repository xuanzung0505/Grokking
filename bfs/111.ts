class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function minDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  let result = 0;
  let currLvl = 1;
  let q = [];
  q.push(root);

  while (q.length > 0) {
    //count nodes in current depth
    let lvlSize = q.length;
    //pop old nodes and push new ones
    while (lvlSize > 0) {
      let head = q.shift() as TreeNode;
      if (head.left || head.right) {
        if (head.left) q.push(head.left);
        if (head.right) q.push(head.right);
      } else {
        result = currLvl;
        return result;
      }
      lvlSize--;
    }
    currLvl++;
  }
  return result;
}
