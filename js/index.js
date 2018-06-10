var index_page = {
  init: function() {

  }
}
$(document).ready(function() {
  index_page.init();
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