---
slug: '19'
category: 'JS'
title: 'Map and Set in JavaScript'
description: 'Map and Set are data structures in JavaScript with unique features that overtop arrays and objects in some cases'
pubDate: 'Dec 19 2024'
published: true
---


Set and Map are data structures in JavaScript. They have been available for a while, but I feel like they are rarely used. (But maybe that's just me.)

<hr>

**`Set` is a collection of values.** Each value (a primitive value, Object, DOM node) can only be unique inside the set.

```javascript
const fruits = new Set();
fruits.add('Apple');
fruits.add('Banana');
fruits.add('Peach');
fruits.add('Apple');
```

(Common misconception: `const` does not mean that the content of the Set is immutable. You just cannot assign another thing to the variable `fruits`.)

The content of the set can be counted, iterated, filtered, matched. 

```javascript
fruits.size // 3
fruits.add('Lemon') // returns the Set
fruits.size // 4
fruits.add('Apple') // returns the Set. No indicator that the element is already contained.
fruits.has('Apple') // true
```

And you can compare or join sets.

```javascript
const yellow = new Set();
yellow.add('Banana');
yellow.add('Bee');
yellow.add('Lemon');

fruits.difference(yellow) // Set [ "Apple", "Peach" ]
fruits.intersection(yellow) // Set [ "Banana", "Lemon" ]
everything = fruits.union(yellow) // [ "Apple", "Banana", "Peach", "Lemon", "Bee" ]
```

<hr>

**`Map` is a collection of _keyed_ values.** A Map is a set of Key-Value pairs, similar to objects. But has some [differences](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps): Keys can be any value (compared to strings and integers for objects), the order is stable, and it is more performant for adding and removing values.


```javascript
const fruits = new Map();
// the naming of this function is totally not confusing
fruits.set('Apple', {shape: 'round', color: 'many'});
fruits.set('Banana', {shape: 'long', color: 'yellow'});
fruits.set('Peach', {shape: 'round', color: 'red'});
fruits.set('Apple', {shape: 'round', color: 'all'});
```

The keys are be unique, of course. Adding another object with the same key overrides the existing one.

```javascript
fruits.size // 3
fruits.has('Apple') // true
fruits.get('Apple') // Object { shape: "round", color: "all" }
```

There are multiple ways to access the content of a Map:

```javascript
for (let [key, value] of fruits) {
  console.log(key, value);
}

fruits.forEach((value, key) => {
  console.log(key, value);
});

for (let key of fruits.keys()) {
  console.log(key);
}

for (let value of fruits.values()) {
  console.log(value);
}

for (let [key, value] of fruits.entries()) {
  console.log(key, value);
}
```



Source: https://javascript.info/map-set