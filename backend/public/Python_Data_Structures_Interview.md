
# Python Data Structures for Interview Questions

In Python, several data structures are commonly used to solve coding interview questions. Here’s a comprehensive guide on those data structures, their syntax, and example usage.

## 1. List
A list is a mutable, ordered sequence of elements.
### Methods: `append()`, `remove()`, `pop()`, `sort()`, `reverse()`, `extend()`, `insert()`
### Example:
```python
my_list = [1, 2, 3, 4]
my_list.append(5)
print(my_list)  # Output: [1, 2, 3, 4, 5]
```

## 2. Tuple
A tuple is an immutable, ordered sequence of elements.
### Example:
```python
my_tuple = (1, 2, 3)
print(my_tuple[1])  # Output: 2
```

## 3. Dictionary (HashMap)
A dictionary is an unordered collection of key-value pairs.
### Methods: `get()`, `keys()`, `values()`, `items()`, `pop()`, `update()`
### Example:
```python
my_dict = {'name': 'Alice', 'age': 25}
print(my_dict['name'])  # Output: Alice
```

## 4. Set
A set is an unordered collection of unique elements.
### Methods: `add()`, `remove()`, `union()`, `intersection()`, `difference()`
### Example:
```python
my_set = {1, 2, 3}
my_set.add(4)
print(my_set)  # Output: {1, 2, 3, 4}
```

## 5. Stack
A stack follows the Last In First Out (LIFO) principle. You can use lists or the `deque` module to implement a stack.
### Example using list:
```python
stack = []
stack.append(1)
stack.append(2)
stack.pop()
print(stack)  # Output: [1]
```

## 6. Queue
A queue follows the First In First Out (FIFO) principle. You can use the `deque` module to implement a queue.
### Example using `deque`:
```python
from collections import deque

queue = deque([1, 2, 3])
queue.append(4)
queue.popleft()
print(queue)  # Output: deque([2, 3, 4])
```

## 7. Linked List
Linked lists can be implemented using classes where each node points to the next node.
### Example:
```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    def print_list(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print(None)

# Usage
ll = LinkedList()
ll.append(1)
ll.append(2)
ll.print_list()  # Output: 1 -> 2 -> None
```

## 8. Heap (Priority Queue)
The `heapq` module provides an implementation of the heap queue algorithm.
### Example:
```python
import heapq

heap = []
heapq.heappush(heap, 3)
heapq.heappush(heap, 1)
heapq.heappush(heap, 2)
print(heapq.heappop(heap))  # Output: 1
```

## 9. Graph (Adjacency List)
A graph can be implemented using a dictionary where keys are nodes and values are lists of neighbors.
### Example:
```python
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}
print(graph['A'])  # Output: ['B', 'C']
```

## 10. Binary Tree
A binary tree can be implemented using classes where each node has two children.
### Example:
```python
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def inorder_traversal(root):
    if root:
        inorder_traversal(root.left)
        print(root.value, end=" ")
        inorder_traversal(root.right)

# Usage
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
inorder_traversal(root)  # Output: 2 1 3
```

## 11. Trie (Prefix Tree)
A trie is used to efficiently store and search strings.
### Example:
```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        current = self.root
        for letter in word:
            if letter not in current.children:
                current.children[letter] = TrieNode()
            current = current.children[letter]
        current.is_end_of_word = True

    def search(self, word):
        current = self.root
        for letter in word:
            if letter not in current.children:
                return False
            current = current.children[letter]
        return current.is_end_of_word

# Usage
trie = Trie()
trie.insert("hello")
print(trie.search("hello"))  # Output: True
```

## 12. HashSet
A `set` in Python is analogous to a `HashSet` and ensures unique elements.
### Example:
```python
my_set = set([1, 2, 3, 4])
my_set.add(5)
print(my_set)  # Output: {1, 2, 3, 4, 5}
```

These data structures form the backbone of most coding problems encountered in technical interviews. Familiarizing yourself with these will help you solve a wide range of algorithmic challenges.
