/*
真题:
将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。
比如:
1->2->4
1->3->4

输出:
1->1->2->3->4
 */

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


const mergeTwoLists=(l1,l2)=>{
    const head = new ListNode()
    const cur = head
    while (l1.next){

        if(l1.value>l2.value){

        }
    }
}