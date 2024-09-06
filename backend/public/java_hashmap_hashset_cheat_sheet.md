
# Java HashMap and HashSet Cheat Sheet

## 1. HashMap Basics

### Initialization:
```java
HashMap<KeyType, ValueType> map = new HashMap<>();
```

### Common Operations:

#### Inserting Key-Value Pairs:
```java
map.put(key, value);  // Adds or updates a key-value pair
```

#### Accessing Value by Key:
```java
ValueType value = map.get(key);  // Returns the value for the given key or null if not found
```

#### Removing a Key-Value Pair:
```java
map.remove(key);  // Removes the key-value pair for the given key
```

#### Checking for Key/Value:
```java
boolean containsKey = map.containsKey(key);  // Checks if a key exists
boolean containsValue = map.containsValue(value);  // Checks if a value exists
```

#### Iterating Over a HashMap:
```java
// Using for-each loop with entrySet()
for (Map.Entry<KeyType, ValueType> entry : map.entrySet()) {
    System.out.println(entry.getKey() + " : " + entry.getValue());
}
```

#### Checking Size:
```java
int size = map.size();  // Returns the number of key-value pairs
```

#### Clearing the HashMap:
```java
map.clear();  // Removes all key-value pairs
```

### Important Methods:
- `put(K key, V value)` - Inserts or updates the key-value pair.
- `get(Object key)` - Returns the value associated with the key or `null`.
- `remove(Object key)` - Removes the key-value pair for the given key.
- `containsKey(Object key)` - Checks if the key is in the map.
- `containsValue(Object value)` - Checks if the value is in the map.
- `size()` - Returns the number of key-value pairs.
- `clear()` - Removes all key-value pairs.

---

## 2. HashMap Advanced Concepts

### Key Set:
```java
Set<KeyType> keys = map.keySet();  // Returns a set of all keys
```

### Values Collection:
```java
Collection<ValueType> values = map.values();  // Returns a collection of all values
```

### Entry Set:
```java
Set<Map.Entry<KeyType, ValueType>> entries = map.entrySet();  // Returns a set of all key-value pairs
```

### Compute If Absent:
```java
map.computeIfAbsent(key, k -> new ValueType());  // Computes value if key is absent
```

### Default Value for Missing Key:
```java
ValueType value = map.getOrDefault(key, defaultValue);  // Returns defaultValue if key is not present
```

### Replace a Value:
```java
map.replace(key, newValue);  // Replaces the value for the key if present
```

---

## 3. HashSet Basics

### Initialization:
```java
HashSet<Type> set = new HashSet<>();
```

### Common Operations:

#### Adding Elements:
```java
set.add(element);  // Adds an element to the set
```

#### Removing Elements:
```java
set.remove(element);  // Removes an element from the set
```

#### Checking for Element:
```java
boolean contains = set.contains(element);  // Checks if the set contains the element
```

#### Checking Size:
```java
int size = set.size();  // Returns the number of elements in the set
```

#### Clearing the Set:
```java
set.clear();  // Removes all elements from the set
```

### Important Methods:
- `add(E e)` - Adds an element to the set.
- `remove(Object o)` - Removes the element if it exists.
- `contains(Object o)` - Checks if the set contains the specified element.
- `size()` - Returns the number of elements.
- `clear()` - Removes all elements.

---

## 4. Iterating Over HashSet:

```java
for (Type element : set) {
    System.out.println(element);
}
```

---

## 5. HashMap vs. HashSet:

| Feature         | HashMap                                | HashSet                         |
|-----------------|----------------------------------------|---------------------------------|
| Storage         | Stores key-value pairs                 | Stores only unique elements     |
| Access          | Access elements by keys                | No direct access, only by iteration |
| Duplicates      | Keys must be unique, values can be duplicated | No duplicates allowed           |
| Null Values     | Allows one `null` key and multiple `null` values | Allows one `null` element       |
| Performance     | O(1) average time for get/put/remove    | O(1) average time for add/remove|

---

These are the most common and useful operations for `HashMap` and `HashSet` in Java. Knowing these operations will help you solve problems related to hashing, fast lookups, and ensuring uniqueness in collections.
