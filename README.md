jquery-send
=======

Send today `<form>` as JSON!

`bower i send`

```js
$('form').serializeObject()   // get form data as an object
$('form').send(callback)      // send form as ajax

$('form').send(function(res) {
    $('h3.message').text(res.message);
});
```

License
----
MIT
