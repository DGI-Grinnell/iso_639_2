$(document).ready(function() {
  console.log('Loaded JS');
  Drupal.jsAC.prototype.select = function (node) {
    console.log('Hi there');
  }
});
