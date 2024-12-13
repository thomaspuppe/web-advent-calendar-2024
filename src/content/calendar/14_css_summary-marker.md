---
slug: '14'
category: 'CSS'
title: 'Style the open/close markers of the summary element'
description: 'You can style the open/close markers of the summary element, and can replace the boring triangles.'
pubDate: 'Dec 14 2024'
published: true
---

Yesterday I wrote about the details/summary elements and [how you can make them mutually exclusive](/13/)).

<div style="font-size:smaller; margin:-2em auto 3em; padding: 1em 1em 1em 2em; border:2px #24292e dashed;">
<details name="cheese">
	<summary>Cheddar</summary>
	<p>Do you know Cheddar is one of the most nutritious cheese varieties? This is because it is loaded with high protein and calories. Its origin is from various parts of England, named after the Cheddar village. The taste and sourness increase with age. This is not very creamy and is often used in grills and main cheese courses.</p>
</details>
<details name="cheese">
	<summary>Feta</summary>
	<p>This salt and sour cheese were first made in Greece by blending sheep and goat milk. Some varieties of feta cheese are purely made of goat milk only. It is the first choice for salads and soups as it is creamy and has a good nutrient profile.</p>
</details>
<details name="cheese">
	<summary>Mozzarella</summary>
	<p>Mozzarella is the most familiar cheese variety in the world. It is used in popular foods like pizzas, pasta, lasagne, sandwiches, etc. It has its root in the southern part of Italy, and its traditional form involves Buffalo milk.</p>
</details>
</div>

Today you will see how you can style these elements in a nice and funny way.\
(Please click them! 🖱️👆)

<style>
summary { cursor: pointer; }
summary::marker { font-size: 1.5em; }
summary.books::marker { content: "📘 "; } [open] summary.books::marker { content: "📖 ";}
summary.photos::marker { content: "📷 "; } [open] summary.photos::marker { content: "📸 ";}
summary.mailbox::marker { content: "📬 "; } [open] summary.mailbox::marker { content: "📭 ";}
</style>

<div style="font-size:smaller; margin:-2em auto 3em; padding: 1em 1em 1em 2em; border:2px #24292e dashed;">
<details name="categories">
	<summary class="books">Books</summary>
	<p>Developers wrestled softly through tangled webpack branches, whispering nullable promises into silent repositories. API endpoints danced reluctantly, spinning semantic branches while middleware trembled beneath cascading functions.</p>
</details>
<details name="categories">
	<summary class="photos">Photos</summary>
	<p>Frontend components whispered complex secrets, rendering impossible dreams across distributed landscapes. Typescript interfaces sang melancholic type definitions, dancing between abstract classes and concrete implementations.</p>
</details>
<details name="categories">
	<summary class="mailbox">Letters</summary>
	<p>Webpack loaders shuffled silently, transforming raw intentions into compressed bundles of potential meaning. GraphQL mutations whispered their queries, translating impossible conversations between distant system realms.</p>
</details>
</div>

You can do this by setting the `::marker` of the `summary` element, and changing it for open elements (using the open attribute selector as ancestor).

```css
summary::marker { content: "😺"; } 
[open] summary::marker { content: "🦁";}
```


The `::marker` pseudo-element is used on lists as well. 

Safari only supports changing its `color` and `font-size`, but not the `content`.

Source: https://developer.mozilla.org/en-US/docs/Web/CSS/::marker