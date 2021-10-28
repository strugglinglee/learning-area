function ListNode(val) {
  this.val = val;
  this.next = null;
}

const L1 = {
  value: 1,
  next: {
    value: 1,
    next: {
      value: 2,
      next: null,
    },
  },
};

const L2 = {
  value: 1,
  next: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 3,
          next: null,
        },
      },
    },
  },
};

//自己写的
const uniqueList = (list) => {
  const arr = [];
  const head = new ListNode();
  const cur = head;
  while (list) {
    if (!arr.includes(list.value)) {
      arr.push(list.value);
      cur.next = list;
      cur = list;
    }
    list = list.next;
  }
  console.log('head.next', head.next);
  return head.next;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// const deleteDuplicates = function (head) {
//   // 设定 cur 指针，初始位置为链表第一个结点
//   let cur = head;
//   // 遍历链表
//   while (cur != null && cur.next != null) {
//     // 若当前结点和它后面一个结点值相等（重复）
//     if (cur.val === cur.next.val) {
//       // 删除靠后的那个结点（去重）
//       cur.next = cur.next.next;
//     } else {
//       // 若不重复，继续遍历
//       cur = cur.next;
//     }
//   }
//   return head;
// };

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  // 极端情况：0个或1个结点，则不会重复，直接返回
  if (!head || !head.next) {
    return head;
  }
  // dummy 登场
  let dummy = new ListNode();
  console.log('dummy init', dummy);
  // dummy 永远指向头结点
  dummy.next = head;
  console.log('dummy init2', dummy);
  // cur 从 dummy 开始遍历
  let cur = dummy;
  console.log('cur', cur);
  // 当 cur 的后面有至少两个结点时
  while (cur.next && cur.next.next) {
    // 对 cur 后面的两个结点进行比较
    if (cur.next.val === cur.next.next.val) {
      // 若值重复，则记下这个值
      let val = cur.next.val;
      // 反复地排查后面的元素是否存在多次重复该值的情况
      while (cur.next && cur.next.val === val) {
        // 若有，则删除
        cur.next = cur.next.next;
      }
      console.log('若值重复，则记下这个值', cur);
    } else {
      // 若不重复，则正常遍历
      cur = cur.next;
      console.log('若不重复，则正常遍历', cur);
    }
  }

  console.log('dummy', dummy);
  // 返回链表的起始结点
  return dummy.next;
};

deleteDuplicates(L2);
