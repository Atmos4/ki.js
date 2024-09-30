!(function (b, c, d) {
  /*
   * init function (internal use)
   * a = selector, dom element or function
   */
  function i(a, e = b) {
    c.push.apply(this, a && a.nodeType ? [a] : (e[0] ?? e).querySelectorAll(a));
  }

  /*
   * $ main function
   * a = css selector, dom object, or function
   */
  $ = (a, e) =>
    /^f/.test(typeof a)
      ? /c/.test(b.readyState)
        ? a()
        : $(b).on("DOMContentLoaded", a)
      : new i(a, e);

  // assign array prototype
  i[d] = $.fn = new Array();

  // set ki prototype
  Object.assign($.fn, {
    /*
     * on method
     * a = string event type i.e 'click'
     * b = function
     * return this
     */
    on: function (a, b) {
      return this.each(function (c) {
        c.addEventListener(a, b);
      });
    },

    /*
     * off method
     * a = string event type i.e 'click'
     * b = function
     * return this
     */
    off: function (a, b) {
      return this.each(function (c) {
        c.removeEventListener(a, b);
      });
    },

    /*
     * each method
     * use native forEach to iterate collection
     * a = the function to call on each iteration
     * b = the this value for that function
     */
    each: function (a, b) {
      this.forEach(a, b);
      return this;
    },
  });
})(document, [], "prototype");
