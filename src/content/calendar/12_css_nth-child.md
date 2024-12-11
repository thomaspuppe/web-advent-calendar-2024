---
slug: '12'
category: 'CSS'
title: 'nth-child selector with filter'
description: 'The nth-child selector accepts an additional filter'
pubDate: 'Dec 12 2024'
published: true
---

You probably know the `nth-child()` CSS selector. It matches for elements, that are the nth child of their parent.

<style>
pre {margin: 1em;}
.example {font-size:smaller; margin:0 auto 3em; padding: 0 1em; border:2px #24292e dashed;}
.prose p {margin-bottom:1em;}
.list1 span:nth-child(3) { font-weight: bold; }
.list2 :nth-child(2 of .even) { font-weight: bold; }
.list3:has(span:nth-child(4):last-child) { font-weight: bold; }
</style>


```html
<!-- having a parent with several children -->
<p class="list1"> <span>One</span> <span>Two</span> <span>Three</span> <span>Four</span> <span>Five</span> <span>Six</span> <span>Seven</span> </p>
```
```css
.list1 span:nth-child(3) { font-weight: bold; }
```
<div class="example">
<p class="list1">
	<span>One</span>
	<span>Two</span>
	<span>Three</span>
	<span>Four</span>
	<span>Five</span>
	<span>Six</span>
	<span>Seven</span>
</p>
</div>


The `nth-child` selector also supports a filter selector, that lets you select the nth child matching that selector:

```html
<!-- having a parent with several children of different classes -->
<p class="list2"> <span class="odd">One</span> <span class="even">Two</span> <span class="odd">Three</span> <span class="even">Four</span> <span class="odd">Five</span> <span class="even">Six</span> <span class="odd">Seven</span> </p>
```
```css
.list2 :nth-child(2 of .even) { font-weight: bold; }
```
<div class="example">
<p class="list2">
	<span class="odd">One</span>
	<span class="even">Two</span>
	<span class="odd">Three</span>
	<span class="even">Four</span>
	<span class="odd">Five</span>
	<span class="even">Six</span>
	<span class="odd">Seven</span>
</p>
</div>


Bonus party trick: You can target lists that have exactly n children, by combining the nth-child and last-child selectors.

```css
.list3:has(span:nth-child(4):last-child) { font-weight: bold; }
```
<div class="example">
<p class="list3">
	<span>One</span>
	<span>Two</span>
	<span>Three</span>
</p>
<p class="list3">
	<span>One</span>
	<span>Two</span>
	<span>Three</span>
	<span>Four</span>
</p>
<p class="list3">
	<span>One</span>
	<span>Two</span>
	<span>Three</span>
	<span>Four</span>
	<span>Five</span>
</p>
</div>