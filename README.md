jquery-send
=======

Send `<form>` as JSON, today!

```js
// install
bower i send

// use
$('form').send(function(res) {
    this.text('Your form was sent!');  // replace form html with a massage.
});

// API
$.fn.serializeObject()       // return form data as an object
$.fn.send(success, failure)  // send form as ajax
```


License
----
MIT
