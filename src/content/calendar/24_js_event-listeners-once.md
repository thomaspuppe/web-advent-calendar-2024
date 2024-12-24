---
slug: '24'
category: 'JS'
title: 'Run event handlers only once'
description: 'JS EVent listeners have a once-option'
pubDate: 'Dec 24 2024'
published: true
---


If you are my age, you might remember the magic of jQuery. One thing that was really handy were the `$.one()` [event handlers](https://api.jquery.com/one/), that were only executed once.

After we got rid of jQuery, for a long time, I used to solve these situations by removing the listener of an event after its first execution. (And wondering what happens if the capture flag [does not match](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener#matching_event_listeners_for_removal) 🙄.)


And then I found out that JavaScript Event Listeners have a `once` option, too: 

```javascript
const button = document.getElementById('button');

button.addEventListener('click', () => {
  console.log('clicked!');
}, { once: true });
```

If the `once` option is se to `true`, the event listener gets removed automagically after its first/only execution.


## Bonus: getEventListeners() function in Chrome DevTools


If an element has an event listener attached to it, is nicely shown in the DOM/Elements tab of Chromes and Firefox DevTools.

Additionally, Chrome provides a function in the DevTools Console (and only there, not for your regular JavaScript code) that lists all event listeners which are attached to an element.

```javascript
getEventListeners(button) // {click: Array(1)}
button.click()
getEventListeners(button) // {} 
```
