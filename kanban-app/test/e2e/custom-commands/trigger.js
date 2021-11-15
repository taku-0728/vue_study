exports.command = function ( selector, event, keyCode) {
    return this.execute(function (selector, event, keycode) {
      var e = document.createEvent('HTMLEvents')
      e.initEvent(event, true, true)
      if (keyCode) {
        e.keycode = keycode
      }
      document.querySelector(selector).dispatchEvent(e)
    }, [selector, event, keyCode])
  }