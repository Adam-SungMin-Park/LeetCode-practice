/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let test = new ListNode();
    let head = test;
    while(l1 && l2){
      if(l1.val < l2.val){
        test.next = l1;
        l1 = l1.next;
      }else{
        test.next = l2;
        l2 = l2.next;
      }
    test = test.next;
    }
     if (l1 !== null)
        test.next = l1
     if (l2 !== null)
        test.next = l2
    return head.next;
};
