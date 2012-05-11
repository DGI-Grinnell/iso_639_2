$(document).ready(function() {
    
  Drupal.jsAC.prototype.select = function (node) {
    this.input.value = this.selected.autocompleteValue;
    var code = this.selected.innerText.match(/\[(\w+)\]/)[1];
    // now populate the linked field
    $('input[name*="language_iso"]').val(code);
  };

  Drupal.jsAC.prototype.hidePopup = function (keycode) {
    var ac = this;
    // Select item if the right key or mousebutton was pressed
    if (this.selected && ((keycode && keycode != 46 && keycode != 8 && keycode != 27) || !keycode)) {
      ac.select(this); // this.input.value = this.selected.autocompleteValue; // don't duplicate code!
    }
    // Hide popup
    var popup = this.popup;
    if (popup) {
      this.popup = null;
      $(popup).fadeOut('fast', function() { $(popup).remove(); });
    }
    this.selected = false;
  };
});
