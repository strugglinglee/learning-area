// const arr = new Array(7).fill([]);
// console.log(arr);
// arr[0][0] = 1;
// console.log(arr);
// for(let i=0;i< arr.length;i++){
//     console.log(arr[i])
// }

//链表
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const node = new ListNode(1);
node.next = new ListNode(2);
// console.log(node);

//二叉树
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const tree = new TreeNode('A');
tree.left = new TreeNode('B');
tree.left.left = new TreeNode('D');
tree.left.right = new TreeNode('E');
tree.right = new TreeNode('C');
tree.right.left = new TreeNode('F');
tree.right.right = new TreeNode('G');
// console.log(tree)

//先序遍历
function preorder(root) {
  if (!root) return;
  console.log('当前遍历的节点是', root.val);
  preorder(root.left);
  preorder(root.right);
}
// preorder(tree)
//中序遍历
function subordermidorder(root) {
  if (!root) return;
  midorder(root.left);
  console.log('当前遍历的节点是', root.val);
  midorder(root.right);
}
// midorder(tree)
//中序遍历
function suborder(root) {
  if (!root) return;
  suborder(root.left);
  suborder(root.right);
  console.log('当前遍历的节点是', root.val);
}
// suborder(tree)

// 两数求和 nums = [2, 7, 11, 15], target = 9

function getTwoIndex(arr, target) {
  const recordMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const minus = target - current;
    if (recordMap.has(minus)) {
      return [recordMap.get(minus), i];
    }
    recordMap.set(current, i);
  }
}
console.log(getTwoIndex([3,7,9,4,5], 9))
