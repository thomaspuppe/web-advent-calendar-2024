---
slug: '1'
category: 'HTML'
title: 'List Reversal'
description: 'Revert ordered listst in HTML'
pubDate: 'Dec 01 2024'
published: true
---

Ordered lists in HMTL can be reversed. You can switch from increasing order to decreasing order with the `reversed` attribute on the `ol` tag.

So this is the default order:


```html
<h2>So how do you make gingerbread cookies? It’s simple!</h2>
<ol>
	<li>Whisk together your dry ingredients.</li>
	<li>Beat the dough.</li>
	<li>Chill the dough.</li>
	<li>Roll and cut the dough.</li>
	<li>Bake.</li>
	<li>Decorate.</li>
</ol>
```

<div style="font-size:smaller; margin:-2em auto 3em; padding: 1em 1em 1em 2em; border:2px #24292e dashed;">
<h2>So how do you make gingerbread cookies? It’s simple!</h2>
<ol>
	<li>Whisk together your dry ingredients.</li>
	<li>Beat the dough.</li>
	<li>Chill the dough.</li>
	<li>Roll and cut the dough.</li>
	<li>Bake.</li>
	<li>Decorate.</li>
</ol>
</div>


With the `reversed` attribute, you can change the order to be counting down:


```html
<h2>Top 6 Christmas Songs</h2>
<ol reversed>
	<li>Judy Garland, “Have Yourself a Merry Little Christmas” (1944)</li>
	<li>Andy Williams, “It’s the Most Wonderful Time of the Year” (1963)</li>
	<li>José Feliciano, “Feliz Navidad” (1970)</li>
	<li>Bing Crosby, “White Christmas” (1947)</li>
	<li>Wham!, “Last Christmas” (1984)</li>
	<li>Mariah Carey, “All I Want For Christmas Is You” (1994)</li>
</ol>
```

<div style="font-size:smaller; margin:-2em auto 3em; padding: 1em 1em 1em 2em; border:2px #24292e dashed;">
<h2>Top 6 Christmas Songs</h2>
<ol reversed>
	<li>Judy Garland, “Have Yourself a Merry Little Christmas” (1944)</li>
	<li>Andy Williams, “It’s the Most Wonderful Time of the Year” (1963)</li>
	<li>José Feliciano, “Feliz Navidad” (1970)</li>
	<li>Bing Crosby, “White Christmas” (1947)</li>
	<li>Wham!, “Last Christmas” (1984)</li>
	<li>Mariah Carey, “All I Want For Christmas Is You” (1994)</li>
</ol>
</div>