// join 2 sorted linked lists

const Joinsortedlist = () => {

    // Class definition for linked list node
    class ListNode {
        constructor(val = 0, next = null) {
            this.val = val;
            this.next = next;
        }
    }

    // Function to merge two sorted linked lists
    function mergeTwoLists(list1, list2) {
        // Dummy node to help with merging
        const dummy = new ListNode();
        let current = dummy;

        // Iterate through both lists and merge them
        while (list1 !== null && list2 !== null) {
            if (list1.val <= list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }

        // Attach the remaining elements from either list
        if (list1 !== null) {
            current.next = list1;
        } else if (list2 !== null) {
            current.next = list2;
        }

        // Return the merged list starting from dummy.next
        return dummy.next;
    }

    // Example usage
    const list1 = new ListNode(1);
    list1.next = new ListNode(3);
    list1.next.next = new ListNode(5);

    const list2 = new ListNode(2);
    list2.next = new ListNode(4);
    list2.next.next = new ListNode(6);

    const mergedList = mergeTwoLists(list1, list2);

    // Print the merged linked list
    let currentNode = mergedList;
    while (currentNode !== null) {
        console.log(currentNode.val);
        currentNode = currentNode.next;
    }

    return (
        <div>
            <h1>Join 2 Sorted Lists</h1>
        </div>
    );
};

export default Joinsortedlist;
