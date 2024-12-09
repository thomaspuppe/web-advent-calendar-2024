---
slug: '10'
category: 'HTML'
title: 'datalist'
description: 'Provide autocomplete suggestions for form fields with datalist'
pubDate: 'Dec 10 2024'
published: true
---

The `datalist` HTML tag is a kind of autosuggest for input fields, that you can prefill with your own suggested values.

You can use it not only for input types `text` and `search`, but for `date` and `time` (not supported in Firefox) and `email` and `color` and `range` and others as well.

```html
<label for="myBrowser">Choose a browser from this list:</label>
<input list="browsers" id="myBrowser" name="myBrowser" />
<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
  <option value="Microsoft Edge"></option>
</datalist>
```

<div style="font-size:smaller; margin:-2em auto 3em; padding: 1em 1em 1em 2em; border:2px #24292e dashed;">
<form>
	<label for="myBrowser">Choose a browser from this list:</label>
	<input list="browsers" id="myBrowser" name="myBrowser" />
	<datalist id="browsers">
	  <option value="Chrome"></option>
	  <option value="Firefox"></option>
	  <option value="Opera"></option>
	  <option value="Safari"></option>
	  <option value="Microsoft Edge"></option>
	</datalist>
</form>
</div>


In case you have an input field with the type `color`, the Browser UI will at first let you choose from the predefined set, and optionally choose other colors. This works, as of today, in Chrome but not in Firefox.

```html
<label for="colors">Pick a color (preferably a red tone):</label>
<input type="color" list="redColors" id="colors" />
<datalist id="redColors">
  <option value="#800000"></option>
  <option value="#8B0000"></option>
  <option value="#A52A2A"></option>
  <option value="#DC143C"></option>
</datalist>
```

<div style="font-size:smaller; margin:-2em auto 3em; padding: 1em 1em 1em 2em; border:2px #24292e dashed;">
<label for="colors">Pick a color (preferably a red tone):</label>
<input type="color" list="redColors" id="colors" />
<datalist id="redColors">
  <option value="#800000"></option>
  <option value="#8B0000"></option>
  <option value="#A52A2A"></option>
  <option value="#DC143C"></option>
</datalist>
</div>


Another thing which is cool in Chrome, but not (yet) in Firefox: If you provide a value and a text for the options, both are shown in the dropdown:


```html
<label for="clubs">Your favorite soccer club?:</label>
<input type="text" list="clubList" id="clubs" />
<datalist id="clubList">
  <option value="FCU">Union Berlin</option>
  <option value="BVB">Borussia Dortmund</option>
  <option value="FCB">Bayern München</option>
</datalist>
```

<div style="font-size:smaller; margin:-2em auto 3em; padding: 1em 1em 1em 2em; border:2px #24292e dashed;">
<label for="clubs">Your Favorite soccer club?:</label>
<input type="text" list="clubList" id="clubs" />
<datalist id="clubList">
  <option value="FCU">Union Berlin</option>
  <option value="BVB">Borussia Dortmund</option>
  <option value="FCB">Bayern München</option>
</datalist>
</div>
