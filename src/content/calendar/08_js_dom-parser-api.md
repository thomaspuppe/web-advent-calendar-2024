---
slug: '8'
category: 'JS'
title: 'DOM Parser API'
description: 'Parse an HTML string and use common selectors on it'
pubDate: 'Dec 08 2024'
published: true
---

This is not surprising, but was unknown to me: There is a DOM parser available in JavaScript, that you can use to parse an HTML string, and act on the resulting `HTMLDocument` object.

Is behaves roughly like the global `document`, but without the `location` stuff. The important part: you can do query selectors or child collections:

```javascript
const parser = new DOMParser();
const htmlString = '<div class="title"><p class="date"><time datetime="2024-12-07T23:00:00.000Z">Dec 8, 2024</time></p><h1>DOM Parser API</h1></div>';
const parsedHtml = parser.parseFromString(htmlString, 'text/html');

parsedHtml.childNodes[0].childElementCount; // -> 2
parsedHtml.querySelector('.date').childNodes[0].getAttribute('datetime'); // -> "2024-12-07T23:00:00.000Z"
````

A newer alternative is the static method [Document.parseHTMLUnsafe(input)](https://developer.mozilla.org/en-US/docs/Web/API/Document/parseHTMLUnsafe_static).

Source: https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString