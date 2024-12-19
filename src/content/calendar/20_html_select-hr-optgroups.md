---
slug: '20'
category: 'HTML'
title: 'Divide select dropdowns'
description: 'Two ways to bring structure into long select dropdown lists'
pubDate: 'Dec 20 2024'
published: true
---

Select dropdowns in online forms can be quite lengthy. But there are ways to structure them. 

My approach from the past, using options with "-------" as label, does not qualify as a proper solution.

## Solution 1: You are allowed to put `hr` inside `select`

Yes, it's true. This is valid HTML:

```html
<select>
  <option>Red Pandas</option>
  <option>Sugar Gliders</option>
  <option>Fennec Foxes</option>
  <hr>
  <option>Arctic Fox Cubs</option>
  <option>Scottish Highland Cows</option>
  <option>Sea Otters</option>
  <hr>
  <option>Quokkas</option>
  <option>Axolotls</option>
  <option>Pygmy Hippos</option>
</select>
```

<div style="font-size:smaller; margin:-2em auto 3em; padding: 1em 1em 1em 2em; border:2px #24292e dashed;">
<select>
  <option>Red Pandas</option>
  <option>Sugar Gliders</option>
  <option>Fennec Foxes</option>
  <hr>
  <option>Arctic Fox Cubs</option>
  <option>Scottish Highland Cows</option>
  <option>Sea Otters</option>
  <hr>
  <option>Quokkas</option>
  <option>Axolotls</option>
  <option>Pygmy Hippos</option>
</select>
</div>

According to the [HTML specs of hr](https://html.spec.whatwg.org/multipage/grouping-content.html#the-hr-element), this is valid. The w3c validator, however, reports an error for that. 🧐


## Solution 2: Put select options into groups

There is an `optgroup` tag, which enables you to group your options. The browser UI displays them nested nicely.

```html
<select>
  <optgroup label="Woodland/Forest Cuties">
    <option>Red Pandas</option>
    <option>Sugar Gliders</option>
    <option>Fennec Foxes</option>
  </optgroup>
  <optgroup label="Arctic/Cold Weather Champions">
    <option>Arctic Fox Cubs</option>
    <option>Scottish Highland Cows</option>
    <option>Sea Otters</option>
  </optgroup>
  <optgroup label="Unique & Unusual Cuties:">
    <option>Quokkas</option>
    <option>Axolotls</option>
    <option>Pygmy Hippos</option>
  </optgroup>
</select>
```

<div style="font-size:smaller; margin:-2em auto 3em; padding: 1em 1em 1em 2em; border:2px #24292e dashed;">
<select>
  <optgroup label="Woodland/Forest Cuties">
    <option>Red Pandas</option>
    <option>Sugar Gliders</option>
    <option>Fennec Foxes</option>
  </optgroup>
  <optgroup label="Arctic/Cold Weather Champions">
    <option>Arctic Fox Cubs</option>
    <option>Scottish Highland Cows</option>
    <option>Sea Otters</option>
  </optgroup>
  <optgroup label="Unique & Unusual Cuties:">
    <option>Quokkas</option>
    <option>Axolotls</option>
    <option>Pygmy Hippos</option>
  </optgroup>
</select>
</div>


## Bonus: You can disable optgroups

```html
<select>
  <optgroup label="Woodland/Forest Cuties">
    <option>Red Pandas</option>
    <option>Sugar Gliders</option>
    <option>Fennec Foxes</option>
  </optgroup>
  <optgroup label="Arctic/Cold Weather Champions">
    <option>Arctic Fox Cubs</option>
    <option>Scottish Highland Cows</option>
    <option>Sea Otters</option>
  </optgroup>
  <optgroup label="Unique & Unusual Cuties:" disabled>
    <option>Quokkas</option>
    <option>Axolotls</option>
    <option>Pygmy Hippos</option>
  </optgroup>
</select>
```

<div style="font-size:smaller; margin:-2em auto 3em; padding: 1em 1em 1em 2em; border:2px #24292e dashed;">
<select>
  <optgroup label="Woodland/Forest Cuties">
    <option>Red Pandas</option>
    <option>Sugar Gliders</option>
    <option>Fennec Foxes</option>
  </optgroup>
  <optgroup label="Arctic/Cold Weather Champions">
    <option>Arctic Fox Cubs</option>
    <option>Scottish Highland Cows</option>
    <option>Sea Otters</option>
  </optgroup>
  <optgroup label="Unique & Unusual Cuties:" disabled>
    <option>Quokkas</option>
    <option>Axolotls</option>
    <option>Pygmy Hippos</option>
  </optgroup>
</select>
</div>
