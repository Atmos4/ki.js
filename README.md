# ki.js

ki.js is a super-tiny jQuery-like API JavaScript library (< 500 bytes minified, < 300 bytes gzipped).

This is a fork of the original ki.js repository, as it does not seem to be maintained anymore. However, I am open to merging this fork with the main repo should the author allow it and agree with my design decisions.

### Browser support

[ki.js](https://github.com/Atmos4/ki.js/blob/master/ki.js) is supported in all browsers above IE9. In short, it means it's supported everywhere, forever.

## What can I do with ki.js?

With ki.js you can do the basic stuff jQuery can, for example:

### DOM Ready?

```js
$(function () {
  // this will be executed when the dom is ready!
  alert("Hey the DOM is ready ;)");
});
```

**This was just ki.js, no jQuery**

### CSS Selectors

Use any CSS selector that exists to get elements from the DOM.

```js
$("p:nth-last-of-type(2)");
$("[attribute|=value]");
$("p:not(.note)");
$("p:empty");
```

[See a list of all CSS selectors](https://drafts.csswg.org/selectors-3/#selectors)

### Array methods

You can manipulate the list of node from ki.js with any array methods (filter, map, ...)

```js
// <p>Hello</p><p>World</p>
const content = $("p").map((e) => e.textContent);
// ['Hello', 'World']
```

### Events

Yes, events with the known `.on()` and `.off()` methods

```html
<button>ki.js</button>
```

```js
$(function () {
  // ok now that the dom is ready i would like to add some events
  var alertMyName = function () {
    alert("My name is " + this.textContent); // will allert 'ki.js'
  };

  $("button").on("click", alertMyName);
  // to turn it off just use .off()
  //$('button').off('click', alertMyName);
});
```

You can add any JavaScript event even touch events for mobile, under the hood ki.js uses addEventListener, so feel free to use any valid [DOM event](https://developer.mozilla.org/en-US/docs/Web/Events).

### .each()

The `each()` method is also included in the core of ki.js for easy iteration on a DOM collection.

```js
$(function () {
  // get all p tags
  $("p").each(function (elem, i) {
    // change color to red
    elem.style.color = "red";

    // append the index to the text
    elem.textContent += i;
  });
});
```

### Keep the chain!

All ki.js methods are chainable, just like jQuery.

## Plugins?

Yeah, you can write plugins for ki.js if you want, fork the project, keep them super super xxs and I promise to merge them into the official repo.

### How to make plugins?

Just add your methods to the prototype of ki.js and you're done.
For example, let's add a `text()` method for setting or getting the text of an element, in the tiniest way I can think of:

```js
// minified is 106 bytes
$.prototype.text = function (a) {
  return a === a + ""
    ? this.each(function (b) {
        b.textContent = a;
      })
    : this[0].textContent;
};
```

Now use the plugin just like the other methods:

```js
$(function () {
  // <p>hello</p>

  // get the text from the p tag
  console.log($("p").text()); // hello

  // set another text
  $("p").text("bye"); // bye
});
```

<hr>
<strong>Create your own plugin and let's make the tiniest JavaScript Library ever!
Remember to write byte-saving code, see this [useful resource for JavaScript byte-saving techniques](https://github.com/jed/140bytes/wiki/Byte-saving-techniques) written by 140byt.es community</strong>
<hr>

## Where can I use ki.js?

In every browser.

## License

See [LICENSE.txt](https://raw.github.com/dciccale/ki.js/master/LICENSE.txt)
