---
slug: '5'
category: 'JS'
title: 'element.matches'
description: 'element.matches(selectors) is shorter and more flexible than classList.contains()'
pubDate: 'Dec 05 2024'
published: true
---

To check if a DOM node has a certain CSS class, you can use the `classList.contains()` method. 
Nice to know: the method takes multiple arguments, and returns `true` if one of the given parameters is contained in the `classList`.


```javascript
const elem = document.querySelector('main');
// true or false
elem.classList.contains('article-header')
// true if one of the arguments is in the classList
elem.classList.contains('article-header', 'article-footer')
```

But there is a more flexible way: you can check, if the element matches _any_ of a given CSS selector. Including argument selectors or pseudo selectors.

```javascript
const elem = document.querySelector('main');
// true or false
elem.matches('.article-header');
elem.matches('.article-header, .article-footer')
elem.matches('[class^="article-"]')
elem.matches('[class*="article"]')
elem.matches(':empty')
```

Source: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches