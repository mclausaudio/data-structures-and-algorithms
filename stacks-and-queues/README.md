# Stacks
Lookup O(n)
pop O(1)
push O(1)
peek O(1)

Note: Could use an Array or a Linked List (pluses and minuses to each so you need to consider your uses cases and review pros and cons of each structure.  But you could do either.)

# Queues
Lookup O(n)
enqueue O(1)
dequeue O(1)
peek O(1)

Note:  Generally, avoid using an Array for a queue.  More on that below.

## Stacks + Queues, Pros and Cons
### Pros
- Fast operations
- Fast peek
- Ordered
### Cons
- Slow lookup

Insight:  Stacks + Queues are "restricted" in what you can do with them (only work with first or last item, peek, etc) but it makes doing those operations really fast.

## Easy way to remember the difference
- Stacks: A stack of plates.  Most recent (last) plate added to the top of the stack is the first to be grabbed.
- Queues: People waiting in line.  First person to enter the line, first person to be let in. 

## Question:  Why would you NOT want to use an array to build a queue?
- Arrays are inefficient because when you remove or add the first item, you have to shift every other array items index.  So adding/removing items from array is O(n), compared to O(1).
- This doesn't apply to Stacks, since stacks you're adding and removing from the END.  No need to shift all other items indexes.

Use Linked List, because when adding / removing from the beginning of the queue, all we need to do is shift the head.  No other items get updated.

## High Level Data Structure
Both Stacks and Queues are example of "High Level Data Structures", since they depend on another "Low Level" data structure (Linked Lists or Arrays).  In a way, they are just a specialized versions of Linked Lists or Arrays.

## Popular question: Implement a Queue using Stacks
- https://leetcode.com/problems/implement-queue-using-stacks/