---
slug: '2'
category: 'JS'
title: 'JavaScript Labeled statement'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Dec 02 2024'
---



## Wurstbrot

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

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label