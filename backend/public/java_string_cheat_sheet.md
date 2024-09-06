
# Java String Cheat Sheet

## 1. String Initialization
```java
String str1 = "Hello";               // String literal
String str2 = new String("World");   // Using new keyword
```

## 2. Basic String Operations

### Length of a String:
```java
int len = str1.length();  // Returns the length of the string
```

### Accessing Characters:
```java
char ch = str1.charAt(0); // Access character at index 0
```

### String Comparison:
```java
boolean isEqual = str1.equals(str2);    // Compares content (case-sensitive)
boolean isEqualIgnoreCase = str1.equalsIgnoreCase(str2); // Case-insensitive comparison
```

### String Contains:
```java
boolean contains = str1.contains("lo"); // Checks if "str1" contains "lo"
```

### String Substring:
```java
String sub = str1.substring(1, 4);  // Substring from index 1 to 3
```

### String Index:
```java
int index = str1.indexOf('l');      // First occurrence of 'l'
int lastIndex = str1.lastIndexOf('l');  // Last occurrence of 'l'
```

### String Starts/Ends With:
```java
boolean startsWith = str1.startsWith("He");  // Checks if string starts with "He"
boolean endsWith = str1.endsWith("lo");      // Checks if string ends with "lo"
```

## 3. String Manipulation

### Concatenation:
```java
String concat = str1 + " " + str2;   // Using `+` operator
String concatMethod = str1.concat(" " + str2); // Using `concat()` method
```

### Replacing Characters or Substrings:
```java
String replaced = str1.replace('l', 'x');    // Replace character
String replacedSub = str1.replace("lo", "la"); // Replace substring
```

### Remove Whitespace (Trim):
```java
String trimmed = str1.trim();  // Removes leading and trailing spaces
```

## 4. String Conversion

### String to Integer:
```java
int num = Integer.parseInt("123");  // Convert string to integer
```

### Integer to String:
```java
String numStr = String.valueOf(123); // Convert integer to string
```

### String to Character Array:
```java
char[] charArray = str1.toCharArray();  // Converts string to character array
```

### Character Array to String:
```java
String newStr = new String(charArray);  // Converts character array to string
```

## 5. String Splitting and Joining

### Splitting a String:
```java
String sentence = "Java is fun";
String[] words = sentence.split(" ");  // Split by space
```

### Joining Strings:
```java
String joined = String.join("-", words);  // Joins array elements with '-'
```

## 6. StringBuilder (Mutable Strings)

### StringBuilder Basics:
```java
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World!");        // Appends string
sb.insert(5, ",");           // Inserts ',' at index 5
sb.delete(5, 6);             // Deletes character at index 5
sb.reverse();                // Reverses the string
String finalString = sb.toString();  // Converts StringBuilder to String
```

### StringBuffer (Thread-safe Mutable Strings):
```java
StringBuffer sbf = new StringBuffer("Hello");
sbf.append(" World!");       // Works like StringBuilder
```

## 7. Advanced String Manipulations

### Convert to Upper and Lower Case:
```java
String upper = str1.toUpperCase();  // Converts string to upper case
String lower = str1.toLowerCase();  // Converts string to lower case
```

### Check if a String is Empty or Blank:
```java
boolean isEmpty = str1.isEmpty();    // Checks if the string is empty
boolean isBlank = str1.isBlank();    // Checks if the string is blank (Java 11+)
```

### String Formatting:
```java
String formatted = String.format("Name: %s, Age: %d", "John", 25);  // Formatting strings
```

## 8. String Comparison (Lexicographical)

### Compare Strings:
```java
int compare = str1.compareTo(str2);   // Lexicographically compares str1 with str2
int compareIgnoreCase = str1.compareToIgnoreCase(str2);  // Case-insensitive comparison
```

## 9. String Searching

### Pattern Matching with Regular Expressions:
```java
String text = "abc123";
boolean matches = text.matches("[a-zA-Z]+\d+");  // Checks if text contains letters followed by numbers
```

### Finding Substrings with Regular Expressions:
```java
import java.util.regex.*;

Pattern pattern = Pattern.compile("\d+");  // Match numbers
Matcher matcher = pattern.matcher(text);

while (matcher.find()) {
    System.out.println(matcher.group());    // Print each match (number in this case)
}
```

## 10. Palindrome Check
```java
public static boolean isPalindrome(String s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        if (s.charAt(left) != s.charAt(right)) return false;
        left++;
        right--;
    }
    return true;
}
```

## 11. Anagram Check
```java
public static boolean areAnagrams(String s1, String s2) {
    if (s1.length() != s2.length()) return false;
    char[] arr1 = s1.toCharArray();
    char[] arr2 = s2.toCharArray();
    Arrays.sort(arr1);
    Arrays.sort(arr2);
    return Arrays.equals(arr1, arr2);
}
```

## 12. Longest Common Prefix:
```java
public static String longestCommonPrefix(String[] strs) {
    if (strs == null || strs.length == 0) return "";
    String prefix = strs[0];
    for (int i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length() - 1);
            if (prefix.isEmpty()) return "";
        }
    }
    return prefix;
}
```

## 13. Substring Search (KMP Algorithm)
```java
public static int[] computeLPSArray(String pattern) {
    int[] lps = new int[pattern.length()];
    int len = 0;
    int i = 1;
    while (i < pattern.length()) {
        if (pattern.charAt(i) == pattern.charAt(len)) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len != 0) len = lps[len - 1];
            else {
                lps[i] = len;
                i++;
            }
        }
    }
    return lps;
}

public static int KMPSearch(String text, String pattern) {
    int[] lps = computeLPSArray(pattern);
    int i = 0, j = 0;
    while (i < text.length()) {
        if (pattern.charAt(j) == text.charAt(i)) {
            i++;
            j++;
        }
        if (j == pattern.length()) {
            return i - j;  // Found match
        } else if (i < text.length() && pattern.charAt(j) != text.charAt(i)) {
            if (j != 0) j = lps[j - 1];
            else i++;
        }
    }
    return -1;
}
```

These are the most common and useful string operations in Java. They’ll be highly beneficial in solving coding problems and optimizing string-related operations.
