---
slug: '11'
category: 'JS'
title: 'Intl.Segmenter API'
description: 'A JS native way of splitting sentences and words'
pubDate: 'Dec 11 2024'
published: true
---

Have you ever tried to split a text into parts? Sure, there is `string.split(separator)` for that. 
So you can just easily split text along whitespace.

```javascript
"When in  doubt, don't! Just do it.".split(" ");
[ "When", "in", "", "doubt,", "don't!", "Just", "do", "it." ]
```

Even this little example shows, that "just easily" often underrates a problem. 

As you can see, punctuation marks are not respected. But you could easily filter them out.
And the typo of having two spaces between words creates another array element. But you could easily replace them.
And what if people start using line breaks &mdash; or the `&mdash;` character? You could easily fix your code.

And if you want to seperate sentences, similar problems arise. They may be seperated by colons or exclamation marks. And did you consider question marks? Or sub-string dots like in `Do it 10.000 times!`?

Well, enough with the constructed problems. There is a browser API for that!

## The `Intl.Segmenter` API supports meaningful segmentation of sentences and words.

```javascript
const myString = "When in  doubt, don't! Just do it. Do it 10.000 times!";
const segmenter = new Intl.Segmenter("en", { granularity: "sentence" });
const segments = segmenter.segment(myString);
```

You construct a `segmenter` by giving it the locale and a granularity. And after that, you can put strings into it to split them. The result is an iterator. Converting it into an array reveals that each part is an object, containing the input (the whole string) and the found segment.

```javascript
const segmentArray = Array.from(segments)
// 👇
[
  {
    "segment": "When in  doubt, don't! ",
    "index": 0,
    "input": "When in  doubt, don't! Just do it. Do it 10.000 times!"
  },
  {
    "segment": "Just do it. ",
    "index": 23,
    "input": "When in  doubt, don't! Just do it. Do it 10.000 times!"
  },
  {
    "segment": "Do it 10.000 times!",
    "index": 35,
    "input": "When in  doubt, don't! Just do it. Do it 10.000 times!"
  }
]
```

To get useful parts, we need to map that: 

```javascript
const myString = "When in  doubt, don't! Just do it. Do it 10.000 times!";
const segmenter = new Intl.Segmenter("en", { granularity: "sentence" });
const segmentsIterator = segmenter.segment(myString);
const segments = Array.from(segmentsIterator).map((segment) => segment.segment);
// 👇
[
  "When in  doubt, don't! ",
  "Just do it. ",
  "Do it 10.000 times!"
]
````

As I said, the Intl.Segmenter API does not only split sentences, but words as well:

```javascript
const myString = "When in  doubt, don't! Just do it. Do it 10.000 times!";
const segmenter = new Intl.Segmenter("en", { granularity: "word" });
const segmentsIterator = segmenter.segment(myString);
const segments = Array.from(segmentsIterator).
	map((segment) => segment.segment);
// 👇
[
  "When",
  " ",
  "in",
  "  ",
  "doubt",
  ",",
  " ",
  "don't",
  "!",
  " ",
  "Just",
  " ",
  "do",
  " ",
  "it",
  ".",
  " ",
  "Do",
  " ",
  "it",
  " ",
  "10.000",
  " ",
  "times",
  "!"
]
````

As you can see, whitespace is still included. You have to filter that. But the segmenter helps you, because each segment object has the property `isWordLike`. 

```javascript
const wordSegments = Array.from(segmentsIterator).
	filter((segment) => segment.isWordLike).
	map((segment) => segment.segment);
// 👇
[
  "When",
  "in",
  "doubt",
  "don't",
  "Just",
  "do",
  "it",
  "Do",
  "it",
  "10.000",
  "times"
]
````


The coolest part is the `Intl` part. Because this works for other languages (and punctuation systems) as well.

```javascript
const myString = "私の猫の名前はベティです。彼女はとてもかわいいです！";
const segmenter = new Intl.Segmenter("jp", { granularity: "sentence" });
const segmentsIterator = segmenter.segment(myString);
const segments = Array.from(segmentsIterator).map((segment) => segment.segment);
// 👇
[
  "私の猫の名前はベティです。",
  "彼女はとてもかわいいです！"
]
```

Last but not least, there is a third granularity of segmentation? The `grapheme`. The only examples for this I could find are emojis. Emojis consist of unicode parts, making them hard to split. 

```javascript
'⛔⛈️🙂😵💫'.split('');
Array(9) [ "⛔", "⛈", "️", "\ud83d", "\ude42", "\ud83d", "\ude35", "\ud83d", "\udcab" ]
````

But with a Segmenter, you can do it.

```javascript
const myString = "⛔⛈️🙂😵💫";
const segmenter = new Intl.Segmenter("de", { granularity: "grapheme" });
const segmentsIterator = segmenter.segment(myString);
const segments = Array.from(segmentsIterator).map((segment) => segment.segment);
// 👇
Array(5) [ "⛔", "⛈️", "🙂", "😵", "💫" ]
```
