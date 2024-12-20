---
slug: '21'
category: 'CSS'
title: 'Align the last line of a paragraph'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Dec 21 2024'
published: true
---

This is something you might rarely need. But nice to know. You can align the last line of text separately to the rest.

This comes handy for designs that need justified text alignment, but you want the last line to be aligned to the right. (Which is, to be honest, the only useful case I can imagine.)



<style>
p.align {
	text-align: justify;
}
p.align--left {
	text-align-last: left;
}
p.align--right {
	text-align-last: right;
}

@media (720px <= width) {
div.wrapper {
	display: flex;
	flex-direction: row-reverse;
	gap: 32px;
}
</style>


<div class="wrapper" style="font-size:smaller; margin:2em auto 3em; padding: 1em 1em 1em 2em; border:2px #24292e dashed;">

<p class="align"><strong>Text-Align Justify:</strong> Purring snowflakes whispered through tinsel whiskers, while gingerbread paws kneaded festive beneath twinkling mittens.</p>

<p class="align align--right"><strong>Text-align-last Right:</strong> Candlelit paws tiptoed through christmas cookie shadows, while winter cats caroled marshmallow dreams into spiced catnip.</p>
</div>




Source: I learned about this CSS property in [Stefan Judis](https://www.stefanjudis.com/today-i-learned/how-to-align-the-text-of-the-last-paragraph-line/) brilliant Newsletter [Web Weekly](https://webweekly.email/). This is the only newsletter I actually read every week. Highly recommended!