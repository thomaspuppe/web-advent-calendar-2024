---
slug: '22'
category: 'CSS'
title: 'How to win any z-index war'
description: 'Infinity is a value you can use in CSS for position, size and z-index'
pubDate: 'Dec 22 2024'
published: true
---

Sometimes, especially with third party code on your site, you enter a race for the highest z-index. People top each other with `z-index: 9999999;` and `z-index: 99999999 !important;`.

You can end and win that game by doing

```css
z-index: calc(infinity);
``` 

## Infinity in CSS

You can also use `infinity` to define the size or position of an element. Because it is not _actually infinite_, but just a verly large number.

<div style="font-size:smaller; margin:2em auto 3em; padding: 1em 1em 1em 2em; border:2px #24292e dashed; overflow: scroll;">

<div id="infinity-demo" style="background-color: rebeccapurple; color: white; font-family: monospace; padding: 1ch; width: calc(infinity * 1px);">
Style of this div: { <br>
&nbsp;&nbsp; width: calc(infinity * 1px); <br>
}
</div>

</div>

For this div with infinite width, we get in your browser: 

- `window.getComputedStyle(elem).width` =&nbsp;<code id="infinity-result-computed"></code>
- `elem.getBoundingClientRect().width` =&nbsp;<code id="infinity-result-rect"></code>


<script>
	const inifiniteElement = document.querySelector('#infinity-demo');
	const computedWidth = window.getComputedStyle(inifiniteElement).width;
	const rectWidth = inifiniteElement.getBoundingClientRect().width;

	document.querySelector('#infinity-result-computed').textContent = computedWidth;
	document.querySelector('#infinity-result-rect').textContent = rectWidth;
</script>