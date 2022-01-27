//链表
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const L1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  },
};

const L2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    },
  },
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 有序排列两个有序链表
 */
const mergeTwoLists = function (l1, l2) {
  // 定义头结点，确保链表可以被访问到
  let head = new ListNode();
  // cur 这里就是咱们那根“针”
  let cur = head;

  // console.log('init cur:', cur, ',head:', head);
  // “针”开始在 l1 和 l2 间穿梭了
  while (l1 && l2) {
    // 如果 l1 的结点值较小
    if (l1.val <= l2.val) {
      // 先串起 l1 的结点
      cur.next = l1;
      // l1 指针向前一步
      l1 = l1.next;
      // console.log('cur.next', cur.next, 'l1', l1);
    } else {
      // l2 较小时，串起 l2 结点
      cur.next = l2;
      // l2 向前一步
      l2 = l2.next;
      // console.log('cur.next', cur.next, 'l2', l2);
    }

    // “针”在串起一个结点后，也会往前一步
    cur = cur.next;
    console.log('cur:', cur, 'head:', head);
  }

  // 处理链表不等长的情况
  cur.next = l1 !== null ? l1 : l2;

  // console.log('cur:', cur, 'head:', head);
  // 返回起始结点
  return head.next;
};

// mergeTwoLists(L1, L2);


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 const reverseList = function (head) {
  // 初始化前驱结点为 null
  let pre = null;
  // 初始化目标结点为头结点
  let cur = head;
  // 只要目标结点不为 null，遍历就得继续
  while (cur !== null) {
    // 记录一下 next 结点
    let next = cur.next;
    // 反转指针
    cur.next = pre;
    // pre 往前走一步
    pre = cur;
    // cur往前走一步
    cur = next;
    console.log(pre)
  }
  // 反转结束后，pre 就会变成新链表的头结点
  return pre;
};

reverseList(L1)
