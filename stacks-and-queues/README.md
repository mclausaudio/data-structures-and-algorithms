# Stacks
Lookup O(n)
pop O(1)
push O(1)
peek O(1)

Could use an Array or a Linked List (pluses and minuses to each so you need to consider your uses cases and review pros and cons of each structure.  But you could do either.)

# Queues
Lookup O(n)
enqueue O(1)
dequeue O(1)
peek O(1)

Question:  Why would you NOT want to use an array to build a queue?
- Arrays are inefficient because when you remove or add the first item, you have to shift every other array items index.  So adding/removing items from array is O(n), compared to O(1).
- This doesn't apply to Stacks, since stacks you're adding and removing from the END.  No need to shift all other items indexes.

Use Linked List, because when adding / removing from the beginning of the queue, all we need to do is shift the head.  No other items get updated.

# High Level Data Structure
Both Stacks and Queues are example of "High Level Data Structures", since they depend on another "Low Level" data structure (Linked Lists or Arrays).  In a way, they are just a specialized versions of Linked Lists or Arrays.