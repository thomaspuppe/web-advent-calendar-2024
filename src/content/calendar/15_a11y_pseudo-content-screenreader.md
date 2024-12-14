---
slug: '15'
category: 'HTML'
title: 'Make CSS marker pseudo content accessible'
description: 'Fix accessibility of CSS content properties for screen reader users'
pubDate: 'Dec 15 2024'
published: true
---


[Yesterday](/14/), I explored styling `::marker elements for li and summary tags, including how to change their content. 

<style>
summary { cursor: pointer; }
summary::marker { font-size: 1.5em; }
summary.photos1::marker { content: "📷 "; } [open] summary.photos1::marker { content: "📸 ";}
summary.photos2::marker { content: "📷 " / ""; } [open] summary.photos2::marker { content: "📸 " / "";}
</style>

An important accessibility insight: CSS content properties are read by screen readers!

```css
summary::marker { content: "📸";}

// html
<summary>Photos</summary>
```

<div style="font-size:smaller; margin:-2em auto 3em; padding: 1em 1em 1em 2em; border:2px #24292e dashed;">
<details>
	<summary class="photos1">Photos</summary>
	<p>Frontend components whispered complex secrets, rendering impossible dreams across distributed landscapes. Typescript interfaces sang melancholic type definitions, dancing between abstract classes and concrete implementations.</p>
</details>
</div>

This would read as "Camera with Flashlight Photos" – which might not be ideal. Fortunately, CSS offers a solution with a second value for screen reader interpretation:

```css
summary::marker { content: "📸" / "alternative text for screen readers"; }

summary::marker { content: "📸" / ""; }
```

The second value can be left empty, effectively instructing screen readers to skip the marker content entirely. This approach ensures both visual customization and accessibility compliance.

<div style="font-size:smaller; margin:-2em auto 3em; padding: 1em 1em 1em 2em; border:2px #24292e dashed;">
<details>
	<summary class="photos2">Photos</summary>
	<p>Frontend components whispered complex secrets, rendering impossible dreams across distributed landscapes. Typescript interfaces sang melancholic type definitions, dancing between abstract classes and concrete implementations.</p>
</details>
</div>

On MacOS with Firefox and Chrome, you can try it directly by starting VoiceOver (<key>CMD</key>+<key>F5</key>).