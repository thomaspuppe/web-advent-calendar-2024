---
slug: '6'
category: 'CSS'
title: 'round() in CSS'
description: 'You can actually round values in CSS'
pubDate: 'Dec 06 2024'
published: true
---

Since May 2024, we can use `round()` for handling values. This is a "math function" like `calc()`, `min()` or `clamp()`.

```css
--givenWidth: 128px;

width: round(var(--givenWidth), 50px); // -> 150px
width: round(down, var(--givenWidth), 50px); // -> 100px
```

The first param is the rounding strategy. It is optional (default: `nearest`) and can take `up` and `down` and the interesting value `to-zero`. This means, it will round down the absolute value. Positive values will decrease, negative values will increase – moving closer to zero.

```css
--rounding-interval: 50px;
width: round(to-zero, 140px, var(--rounding-interval)); // -> 100px
width: round(to-zero, -140px, var(--rounding-interval)); // -> -100px
```

This only makes sense if you have a variable part. Otherwise you could just round while writing the CSS and hardcode the value. Examples:

- Width/height of an element is given by measuring via JS.
- The interval can be set to custom values by selecting a narrow/spacious theming.

Source: https://developer.mozilla.org/en-US/docs/Web/CSS/round