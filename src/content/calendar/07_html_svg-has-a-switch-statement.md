---
slug: '7'
category: 'HTML'
title: 'SVG has a language switch'
description: 'You can switch the content of a SVG file depending on the system language'
pubDate: 'Dec 07 2024'
published: true
---

Inside of a SVG, you can use a `switch` element, whose `systemLanguage` attribute gets evaluated.

The first element which matches the browser language gets rendered.

```html
<svg viewBox="0 20 100 50">
  <switch>
    <text systemLanguage="de">Hallo!</text>
    <text systemLanguage="en-us">Howdy!</text>
    <text systemLanguage="en-gb">Wotcha!</text>
    <text systemLanguage="en">Hello!</text>
    <text systemLanguage="es">Hola!</text>
    <text systemLanguage="fr">Bonjour!</text>
    <text systemLanguage="ja">こんにちは</text>
    <text>☺</text>
  </switch>
</svg>
```

Result:

<div style="font-size:smaller; margin:-2em auto 3em; padding: 1em 1em 1em 2em; border:2px #24292e dashed;">
<svg viewBox="0 -20 100 50">
  <switch>
    <text systemLanguage="de">Hallo!</text>
    <text systemLanguage="en-us">Howdy!</text>
    <text systemLanguage="en-gb">Wotcha!</text>
    <text systemLanguage="en">Hello!</text>
    <text systemLanguage="es">Hola!</text>
    <text systemLanguage="fr">Bonjour!</text>
    <text systemLanguage="ja">こんにちは</text>
    <text>☺</text>
  </switch>
</svg>
</div>

Source: https://developer.mozilla.org/de/docs/Web/SVG/Element/switch