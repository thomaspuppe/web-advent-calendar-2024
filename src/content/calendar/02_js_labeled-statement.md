---
slug: '2'
category: 'JS'
title: 'JavaScript Labeled statement'
description: 'Label loops or blocks to jump out at a desired level'
pubDate: 'Dec 02 2024'
published: true
---


Loop statements in JavaScript can be labeled. This way, cou can `continue` or `break` out of a specific loop, and not only the one you are actually inside.

```javascript
// The first for statement is labeled "loop1"
loop1: for (let i = 0; i < 3; i++) {
  // The second for statement is labeled "loop2"
  loop2: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      continue loop1;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}
```

This principle also works for `break` inside block statements:

```javascript
foo: {
  console.log("wurst");
  break foo;
  console.log("this will not be executed");
}
console.log("brot");
````

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label