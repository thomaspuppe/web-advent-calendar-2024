---
slug: '4'
category: 'HTML'
title: 'The ID of an HTML element is a global JS variable'
description: 'The ID of an HTML element is a global JS variable'
pubDate: 'Dec 04 2024'
published: true
---

Something I learned from [Flavio Copes](https://flaviocopes.com/an-html-element-id-is-a-global-variable/):

Every HTML element with an ID can be accessed from your JS as global variable.

```html
// html
<article id="mainElement">

// js
window.mainElement

```

In case your ID is not a valid JS variable name, it does not fall back to camelCase like for style attributes. But you can use the bracket notation:

```html
// html
<article id="main-element">

// js (does not work!)
window.mainElement

// js 
window['main-element']

```

Bonus: Child Elements with a name attribute can also be accessed as object properties:

```html
// html
<form id="donation"> 
  <input name="amount"> 
</form>

// js
donation.amount.onclick = ...
```

Source: https://flaviocopes.com/an-html-element-id-is-a-global-variable/