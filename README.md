# JavaScript Polyfills 🚀

A growing collection of custom implementations of core JavaScript methods.

This repository is focused on rebuilding native JavaScript behavior from scratch to deeply understand:

- Callback execution
- `this` binding
- Sparse array handling
- Accumulator patterns
- Functional programming concepts
- Internal iteration mechanics

---

## 📚 Implemented Polyfills

### Array Methods
- ✅ `map()`
- ✅ `forEach()`
- ✅ `filter()`
- ✅ `reduce()`

---

## 🧠 Why This Repository?

Instead of just using built-in methods, this project explores how they actually work internally.

Each polyfill is implemented manually using:
- Prototype extension
- Loop-based iteration
- Proper edge case handling
- Type checking
- Spec-like behavior

The goal is to move beyond syntax and understand execution flow at a deeper level.

---

## 🛠 Example Usage

```js
const arr = [1, 2, 3, 4];

const doubled = arr.myMap(x => x * 2);
console.log(doubled); // [2, 4, 6, 8]

const even = arr.myFilter(x => x % 2 === 0);
console.log(even); // [2, 4]

const sum = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
```

---

##🎯 Purpose

This project is part of my journey to master JavaScript fundamentals by understanding how core methods behave under the hood.

---
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## 👨‍💻 Author

Built with curiosity and consistency by Patel-Vipul.

GitHub: (https://github.com/Patel-Vipul)
