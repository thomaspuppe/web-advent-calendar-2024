---
slug: '18'
category: 'CSS'
title: 'Retina background images in CSS'
description: 'Provide different CSS background images to retina devices and modern browsers'
pubDate: 'Dec 18 2024'
published: true
---

There is a syntax to provide different background images in CSS, depending on the screen pixel density (retina).

```css
.hero {
  background-image: image-set(
    "image.png" 1x,
    "image_retina.png" 2x
  );
}
```

You can use the same syntax to provide different image formats depending on the browsers capabilities:

```css
.hero {
  background-image: image-set(
    url("image.avif") type("image/avif"),
    url("image.jpg") type("image/jpeg")
  );
}
```

That way you can serve modern performant images (avif, webp) to modern browsers. And at the same time have a fallback of established formats (webp, jpg) for older browsers.

Source: https://developer.mozilla.org/de/docs/Web/CSS/image/image-set