---
slug: '3'
category: 'CSS'
title: 'CSS light-dark() Syntax'
description: 'CSS shorthand syntax for setting colors for light and dark mode'
pubDate: 'Dec 03 2024'
published: true
---

For settings colors in light and dark mode, many use the `@media (prefers-color-scheme: dark) {` media query. 
Either around specific selector, or around the definition of a color set via CSS vars.

Kind of a mixture of both is the CSS `light-dark` shorthand syntax for setting colors. This makes sense for small projects or in case you want to override some styles with inline CSS from a CMS.

```css
:root {
	color-scheme: light dark;
}

body {
	color: light-dark(#000, #FFF);
	background-color: light-dark(#FFF, #000);
}
```

Source: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark