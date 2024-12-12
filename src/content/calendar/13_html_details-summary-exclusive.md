---
slug: '13'
category: 'HTML'
title: 'details / summary elements can be mutually exclusive'
description: 'By setting a name attribute, details element can be made to only open individually'
pubDate: 'Dec 13 2024'
published: true
---

The `<details>` and `<summary>` HTML elements provide a native, accessible, and performant way to create accordion-style or show-more/toggle-content interfaces without relying on external libraries or complex custom implementations.

## Basic Usage

By default, each `<details>` element can be opened independently, allowing users to expand multiple sections simultaneously:

```html
<details>
  <summary>Cheddar</summary>
  <p>Do you know Cheddar ...</p>
</details>
<details>
  <summary>Feta</summary>
  <p>This salt and sour cheese ...</p>
</details>
<details>
  <summary>Mozzarella</summary>
  <p>Mozzarella is the most ...</p>
</details>
```
<div style="font-size:smaller; margin:-2em auto 3em; padding: 1em 1em 1em 2em; border:2px #24292e dashed;">
<details>
	<summary>Cheddar</summary>
	<p>Do you know Cheddar is one of the most nutritious cheese varieties? This is because it is loaded with high protein and calories. Its origin is from various parts of England, named after the Cheddar village. The taste and sourness increase with age. This is not very creamy and is often used in grills and main cheese courses.</p>
</details>
<details>
	<summary>Feta</summary>
	<p>This salt and sour cheese were first made in Greece by blending sheep and goat milk. Some varieties of feta cheese are purely made of goat milk only. It is the first choice for salads and soups as it is creamy and has a good nutrient profile.</p>
</details>
<details>
	<summary>Mozzarella</summary>
	<p>Mozzarella is the most familiar cheese variety in the world. It is used in popular foods like pizzas, pasta, lasagne, sandwiches, etc. It has its root in the southern part of Italy, and its traditional form involves Buffalo milk.</p>
</details>
</div>


## Exclusive Expansion Behavior

In some scenarios, you might want to limit users to opening only one section at a time. This can be achieved through two methods:

1. Using JavaScript: You can implement exclusive expansion programmatically using JavaScript event listeners.

2. Native HTML Approach: Interestingly, HTML provides a native way to create mutually exclusive `<details>` elements by using the name attribute with the same value across multiple elements:

```html
<details name="cheese">
  <summary>Cheddar</summary>
  <p>Do you know Cheddar ...</p>
</details>
<details name="cheese">
  <summary>Feta</summary>
  <p>This salt and sour cheese ...</p>
</details>
<details name="cheese">
  <summary>Mozzarella</summary>
  <p>Mozzarella is the most ...</p>
</details>
```

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

This approach ensures that only one `<details>` element with the same name can be open at a time.

Source: [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#multiple_named_disclosure_boxes)