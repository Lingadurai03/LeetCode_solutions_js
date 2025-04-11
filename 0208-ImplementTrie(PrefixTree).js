// 208. Implement Trie (Prefix Tree)
// Solved
// Medium
// Topics
// Companies
// YouTube
// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

// Example 1:

// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// Explanation
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True

// Constraints:

// 1 <= word.length, prefix.length <= 2000
// word and prefix consist only of lowercase English letters.
// At most 3 * 104 calls in total will be made to insert, search, and startsWith.

// Seen this question in a real interview before?
// 1/5

var Trie = function () {
  this.children = [];
  this.endsWith = false;
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this;

  for (let ch of word) {
    let index = ch.charCodeAt(0) - 'a'.charCodeAt(0);

    if (!node.children[index]) {
      node.children[index] = new Trie();
    }
    node = node.children[index];
  }
  node.endsWith = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this;

  for (let ch of word) {
    let index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
    if (!node.children[index]) return false;
    node = node.children[index];
  }
  return node.endsWith;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this;

  for (let ch of prefix) {
    let index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
    if (!node.children[index]) return false;
    node = node.children[index];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
