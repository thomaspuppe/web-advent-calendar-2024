---
slug: '16'
category: 'JS'
title: 'Detect JS support in CSS'
description: 'There is a media query for detecting JS support in CSS'
pubDate: 'Dec 16 2024'
published: true
---


There is a media query for detecting JS support in CSS. You can use the `scripting` media query to check if JavaScript is supported and enabled in the browser:



<style>
div.scripting {
	text-align: center	
}
@media (scripting: enabled) {
  div.scripting {
    font-weight: bold;
  }
}

@media (scripting: none) {
  div.scripting {
    text-decoration: line-through;
  }
}
</style>

```css
@media (scripting: enabled) {
  div.scripting {
    font-weight: bold;
  }
}
@media (scripting: none) {
  div.scripting {
    text-decoration: line-through;
  }
}
```

<div style="font-size:smaller; margin:-2em auto 3em; padding: 1em 1em 1em 2em; border:2px #24292e dashed;">
<div class="scripting"> Scripting enabled? </div>
</div>

But this method has a few shortcomings. As the query says, it just checks if JS is _enabled_. It stoill matches if your JavaScript cashes because of errors, or is blocked or just not downloaded for any reason. So it might not be practical for everyday use. It still is nice to know.

Source: https://ryanmulligan.dev/blog/detect-js-support-in-css/