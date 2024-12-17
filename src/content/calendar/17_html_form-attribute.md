---
slug: '17'
category: 'HTML'
title: 'form attribute'
description: 'The form attribute connects elements to a form, even if they are not a child'
pubDate: 'Dec 17 2024'
published: true
---

If you build a form, usually you include all form elements below the `<form>` DOM node. That way, these inputs and controls are directly associated with the form.

If you – for any design reasons reason – want to move some form elements outside the surrounding `form` element, that connection would break. But: There is a `form` **Attribute** that you can use to connect input elements and form controls to a specific form.

```html
<form id="payment-form" action="/payment" method="POST">
  <input type="text" name="firstname" required />
  <input type="text" name="fullname" required />
</form>

<div>
  <input form="payment-form" type="text" name="creditcard" inputmode="numeric" />
  <button form="payment-form" type="submit">Submit Payment</button>
</div>
```

(For simplification, I left out the label elements that are mandatory for accessibility!)

Source: https://htmhell.dev/adventcalendar/2023/3/