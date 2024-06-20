/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(!list1) return list2;
    if(!list2) return list1;
    
    const mergedList: ListNode = new ListNode();
    let listTail: ListNode = mergedList;
    
    while(list1 && list2) {
        if(list1.val < list2.val) {
            listTail.next = list1;
            list1 = list1.next;
        } else {
            listTail.next = list2;
            list2 = list2.next;
        }
         listTail = listTail.next;
    }
    listTail.next = list1 ?? list2;
    return mergedList.next;
};