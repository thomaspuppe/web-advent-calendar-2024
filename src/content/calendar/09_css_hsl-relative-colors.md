---
slug: '9'
category: 'CSS'
title: 'HSL with relative colors'
description: 'Define colors by running calculations on an input color'
pubDate: 'Dec 09 2024'
published: true
---


The HSL notation in CSS defines colors with their **hue**, **saturation** and **lightness** components, and an optional **alpha** value for transparency.

The hue angle defines the color on a color wheel and takes the valiues 0 to 360.
The saturation is a percentage value, ranging from 0 to 100.
The lightness is a percentage value, ranging from 0 to 100.

What's special with the hsl notation: you can have a color value as input, and run calculations on it!

```css
hsl(from green h s l / 0.5)
hsl(from #0000FF h s calc(l + 20))
hsl(from var(--primary) calc(h + 180) s calc(l / 2))
hsl(from rgb(200 0 0) calc(h + 30) s calc(l + 30))
```

This becomes handy when you have theming or a design system. 

Demo:


```css
--color: rebeccapurple;
.foo > *:nth-child(1) {background-color: 
	hsl(from var(--color) h s calc(l * 1.2)) }
.foo > *:nth-child(2) {background-color: 
	hsl(from var(--color) h s calc(l * 1.4)) }
.foo > *:nth-child(3) {background-color: 
	hsl(from var(--color) h s calc(l * 1.6)) }
.foo > *:nth-child(4) {background-color: 
	hsl(from var(--color) h s calc(l * 1.8)) }
```

Result:

<style>
.foo { display: flex; flex-direction:row; --color: rebeccapurple;}
.foo > * { flex-grow: 1; text-align: center; }
.foo > *:nth-child(1) {background-color: hsl(from var(--color) h s calc(l * 1.2)) }
.foo > *:nth-child(2) {background-color: hsl(from var(--color) h s calc(l * 1.4)) }
.foo > *:nth-child(3) {background-color: hsl(from var(--color) h s calc(l * 1.6)) }
.foo > *:nth-child(4) {background-color: hsl(from var(--color) h s calc(l * 1.8)) }
</style>
<div style="font-size:smaller; margin:-2em auto 3em; padding: 1em 1em 1em 2em; border:2px #24292e dashed;">
<div class="foo">
	<div>I</div>
	<div>want</div>
	<div>it</div>
	<div>darker</div>
</div>
</div>


Source: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl