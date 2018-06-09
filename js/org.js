var org = {
  init: function() {

  }
}
$(document).ready(function() {
  org.init();
});

function log(x) {
  if (typeof(x) == "string") {
    console.log(x);
    return;
  }
  if (typeof(x) == "object") {
    console.dir(x);
    return;
  }
  console.log(x);
}