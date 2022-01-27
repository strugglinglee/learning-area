# 链表

## 题目分类

1. 链表的处理: 合并、**删除(重点)**
2. 链表的反转及其衍生题目
3. 链表成环问题及其衍生题目

## 链表的处理

### 合并

#### 真题应用

> 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的
> 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4。

#### 解题思路

1. **中心思想**——处理链表的本质，是处理**链表结点**之间的指针关系。
2. 合并为一个链表，我们恰当地补齐双方之间结点 next 指针的指向关系，就能达到目的
3. 类似穿针引线，现在线有了，缺的是一根针
4. 针每次钻进扣子眼儿之前，要先比较一下它眼前的两个扣子，选择其中值较小的那个，优先把它串进去。一次串一个，直到所有的扣子都被串进一条线为止
5. 还要考虑两个链表长度不等的情况：若其中一个链表已经完全被串进新链表里了，而另一个链表还有剩余结点，考虑到该链表本身就是有序的，我们可以直接把它整个拼到目标链表的尾部。

#### 题解

```javascript
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
  // 定义头结点，确保链表可以被访问到
  let head = new ListNode();
  // cur 这里就是咱们那根“针”
  let cur = head;

  // “针”开始在 l1 和 l2 间穿梭了
  while (l1 && l2) {
    // 如果 l1 的结点值较小
    if (l1.val <= l2.val) {
      // 先串起 l1 的结点
      cur.next = l1;
      // l1 指针向前一步
      l1 = l1.next;
    } else {
      // l2 较小时，串起 l2 结点
      cur.next = l2;
      // l2 向前一步
      l2 = l2.next;
    }

    // “针”在串起一个结点后，也会往前一步
    cur = cur.next;
  }

  // 处理链表不等长的情况
  cur.next = l1 !== null ? l1 : l2;
  // 返回起始结点
  return head.next;
};
```

#### 题解笔记

1. head 作为线，cur 作为针
2. cur.next 的改动 会因为引用关系 改变 head 的 next
3. cur = cur.next 向前移动一步的过程 可以一步一步改变 head 的 next
4. 处理链表不等长的情况

### 删除

#### 真题应用

> 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
> 输入: 1->1->2
> 输出: 1->2
> 示例 2:
> 输入: 1->1->2->3->3
> 输出: 1->2->3

#### 解题思路

1. 需要删除的目标结点的前驱结点 next 指针往后指一格

#### 题解

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  // 设定 cur 指针，初始位置为链表第一个结点
  let cur = head;
  // 遍历链表
  while (cur != null && cur.next != null) {
    // 若当前结点和它后面一个结点值相等（重复）
    if (cur.val === cur.next.val) {
      // 删除靠后的那个结点（去重）
      cur.next = cur.next.next;
    } else {
      // 若不重复，继续遍历
      cur = cur.next;
    }
  }
  return head;
};
```

#### 题解笔记

1. while 循环判断条件：当前节点和下个节点不为空 不然继续判断也没意义
2. 当前节点和下个节点值比较：cur.val === cur.next.val
3. 继续往下遍历的方法：cur = cur.next

### 删除问题的延伸——dummy 结点登场

#### 真题应用

> 给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。
> 输入: 1->2->3->3->4->4->5
> 输出: 1->2->5
> 示例 2:
> 输入: 1->1->1->2->3
> 输出: 2->3

#### 解题思路

1. 链表的第一个结点，没有前驱结点，可以用 dummy 结点来解决这个问题。**dummy 结点**是人为制造出来的第一个结点的前驱结点，这样链表中所有的结点都能确保有一个前驱结点，也就都能够用同样的逻辑来处理了。dummy 结点能够帮助我们降低链表处理过程的复杂度，处理链表时，不设 dummy 结点思路可能会打不开；设了 dummy 结点的话，就算不一定用得上，也不会出错。
2. 由于重复的结点可能不止一个两个，我们这里需要用一个 while 循环来反复地进行重复结点的判断和删除操作。

#### 题解

```javascript
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
  // dummy 永远指向头结点
  dummy.next = head;
  // cur 从 dummy 开始遍历
  let cur = dummy;
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
    } else {
      // 若不重复，则正常遍历
      cur = cur.next;
    }
  }
  // 返回链表的起始结点
  return dummy.next;
};
```

## 链表的反转及其衍生题目

有一类会涉及到反复的遍历。涉及反复遍历的题目，只要用常规的思路分析它，你会发现它一定涉及反复遍历；
同时，涉及反复遍历的题目，还有一个更明显的特征，就是它们往往会涉及相对复杂的链表操作，比如**反转、指定位置的删除**等等。

### 快慢指针与多指针

双指针中的“快慢指针”。快慢指针指的是两个一前一后的指针，两个指针往同一个方向走，只是一个快一个慢。快慢指针严格来说只能有俩，不过实际做题中，可能会出现一前、一中、一后的三个指针，这种超过两个指针的解题方法也叫“多指针法”。

快慢指针+多指针，双管齐下，可以帮助我们解决链表中的大部分复杂操作问题。

### 快慢指针——删除链表的倒数第 N 个结点

> 给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
> 示例：
> 给定一个链表: 1->2->3->4->5, 和 n = 2.
> 当删除了倒数第二个结点后，链表变为 1->2->3->5.

#### dummy 结点的使用

**dummy 结点**可以帮我们处理掉头结点为空的边界问题，帮助我们简化解题过程。
因此涉及链表操作、尤其是涉及结点删除的题目（对前驱结点的存在性要求比较高）

```javascript
const dummy = new ListNode();
// 这里的 head 是链表原有的第一个结点
dummy.next = head;
```

#### “倒数”变“正数”

“倒数第 N 个” 咱们完全可以转换为“正数第 len - n + 1"个。

**遍历两趟：**

1. 第一趟，设置一个变量 count = 0，每遍历到一个不为空的结点，count 就加 1，一直遍历到链表结束为止，得出链表的总长度 len；
2. 根据这个总长度，咱们就可以算出倒数第 n 个到底是正数第几个了（M = len - n + 1），那么我们遍历到第 M - 1（也就是 len - n） 个结点的时候就可以停下来，执行删除操作。

**总结：**
链表删除问题中，若走两次遍历，我们做了两件事： 1.求长度 2.做减法，找定位。

**Tips:**超过一次的遍历应该主动去思考，如果一次遍历来解决这个问题，要请双指针法来帮忙了。

#### 快慢指针

1. 两个指针 slow 和 fast，全部指向链表的起始位——dummy 结点
2. 快指针先出发，在第 n 个结点处打住，这里 n=2
3. 快慢指针一起前进，当快指针前进到最后一个结点处时，两个指针再一起停下来
4. 慢指针所指的位置，就是倒数第 n 个结点的前一个结点

**总结：**
把做减法和找定位这个过程给融合了。通过快指针先行一步、接着快慢指针一起前进这个操作，巧妙地把两个指针之间的差值保持在了“n”上（用空间换时间，本质上其实就是对关键信息进行提前记忆，这里咱们相当于用两个指针对差值实现了记忆），这样当快指针走到链表末尾（第 len 个）时，慢指针刚好就在 len - n 这个地方稳稳落地。

#### 题解

```javascript
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  // 初始化 dummy 结点
  const dummy = new ListNode();
  // dummy指向头结点
  dummy.next = head;
  // 初始化快慢指针，均指向dummy
  let fast = dummy;
  let slow = dummy;

  // 快指针闷头走 n 步
  while (n !== 0) {
    fast = fast.next;
    n--;
  }

  // 快慢指针一起走
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  // 慢指针删除自己的后继结点
  slow.next = slow.next.next;
  // 返回头结点
  return dummy.next;
};
```

### 多指针法——链表的反转

#### 真题应用

> 定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。
> 输入: 1->2->3->4->5->NULL
> 输出: 5->4->3->2->1->NULL

#### 解题思路

1. 处理链表的本质，是处理链表结点之间的指针关系
2. 如何去反转指针的指向，这里我们需要用到三个指针，它们分别指向**目标结点（cur）**、**目标结点的前驱结点（pre）**、**目标结点的后继结点（next）**
3. 只需要一个简单的 cur.next = pre，就做到了 next 指针的反转

#### 题解

```javascript
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
  }
  // 反转结束后，pre 就会变成新链表的头结点
  return pre;
};
```

### 局部反转一个链表

#### 真题应用

> 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
> 说明：1 ≤ m ≤ n ≤ 链表长度。
> 示例：
> 输入: 1->2->3->4->5->NULL, m = 2, n = 4
> 输出: 1->4->3->2->5->NULL

#### 题解

```javascript
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// 入参是头结点、m、n
const reverseBetween = function (head, m, n) {
  // 定义pre、cur，用leftHead来承接整个区间的前驱结点
  let pre, cur, leftHead;
  // 别忘了用 dummy 嗷
  const dummy = new ListNode();
  // dummy后继结点是头结点
  dummy.next = head;
  // p是一个游标，用于遍历，最初指向 dummy
  let p = dummy;
  // p往前走 m-1 步，走到整个区间的前驱结点处
  for (let i = 0; i < m - 1; i++) {
    p = p.next;
  }
  // 缓存这个前驱结点到 leftHead 里
  leftHead = p;
  // start 是反转区间的第一个结点
  let start = leftHead.next;
  // pre 指向start
  pre = start;
  // cur 指向 start 的下一个结点
  cur = pre.next;
  // 开始重复反转动作
  for (let i = m; i < n; i++) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  //  leftHead 的后继结点此时为反转后的区间的第一个结点
  leftHead.next = pre;
  // 将区间内反转后的最后一个结点 next 指向 cur
  start.next = cur;
  // dummy.next 永远指向链表头结点
  return dummy.next;
};
```

## 链表成环问题及其衍生题目

### 如何判断链表是否成环？

> 输入：[3,2,0,4]（链表结构如下图） 输出：true
> 解释：链表中存在一个环

#### 思路

一个环形链表的基本修养，是能够让遍历它的游标回到原点。
从 flag 出发，只要我能够再回到 flag 处，那么就意味着，我正在遍历一个环形链表。

#### 解题

```javascript
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 入参是头结点
const hasCycle = function (head) {
  // 只要结点存在，那么就继续遍历
  while (head) {
    // 如果 flag 已经立过了，那么说明环存在
    if (head.flag) {
      return true;
    } else {
      // 如果 flag 没立过，就立一个 flag 再往下走;
      head.flag = true;
      head = head.next;
    }
  }
  return false;
};
```

### 环形链表衍生问题——定位环的起点

> 给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null。
> 示例 1:
> 输入：head = [3,2,0,-4] 输出：tail connects to node index 1 解释：链表中有一个环，其尾部连接到第二个结点。
> 示例 2:
> 输入：head = [1,2]
> 输出：tail connects to node index 0
> 示例 3:
> 输入：head = [1]
> 输出：no cycle
> 解释：链表中没有环。

#### 解题思路

因为如果一个结点是环形链表成环的起点，那么它一定是第一个被发现 flag 标志已存在的结点

#### 题解

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function (head) {
  while (head) {
    if (head.flag) {
      return head;
    } else {
      head.flag = true;
      head = head.next;
    }
  }
  return null;
};
```

#### 快慢指针解题

这道题还有一个公认的比较经典的思路，就是用快慢指针来做：

定义慢指针 slow，快指针 fast。
两者齐头并进， slow 一次走一步、fast 一次 走两步。
这样如果它们是在一个有环的链表里移动，一定有相遇的时刻。

这个原理证明起来也比较简单：我们假设移动的次数为 t，slow 移动的路程就是t，fast 移动的路程为2t，假如环的长度为 s，那么当下面这个条件：

2t - t = s
也就是：

t = s
满足时，slow 和 fast 就一定会相遇。反之，如果两者没有相遇，同时 fast 遍历到了链表的末尾，发现 next 指针指向 null，则链表中不存在环。
