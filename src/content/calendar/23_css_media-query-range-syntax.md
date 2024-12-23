---
slug: '23'
category: 'CSS'
title: 'Media query range syntax'
description: 'There is a modern slick syntax for media queries'
pubDate: 'Dec 23 2024'
published: true
---


Most people nowadays use media queries for responsive CSS.

```css
@media screen and (max-width: 767px) { ... }

@media screen and (min-width: 1280px) { ... }

@media screen and (min-width: 768px) and (max-width: 1279px) {
	...
}
```

Did you know that there is a nicer syntax available?

```css
@media screen and (width < 768px) { ... }

@media screen and (width >= 1280px) { ...  }

@media screen and (768px <= width < 1280px) { ... }
```

This is called the [media query range syntax](https://web.dev/articles/media-query-range-syntax?hl=en).

It is common to define breakpoints in pixel values. But you can also use `rem` and `em` values, which reacts nicely to user-defined individual font sizes.


```css
@media (width <= 30rem) {
  // Styles for viewports with a width of 30rem or less.
}
```

What else can you check with media queries? 


## Orientation media query

You can check whether a device is in portrait or landscape mode:

```css
@media screen and (orientation: landscape) {}
@media screen and (orientation: portrait) {}
```

And even more specific: if the device (viewport) has a certain aspect ratio:

```css
@media (min-aspect-ratio: 16/9) {}
```
