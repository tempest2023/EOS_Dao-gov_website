var proposals = {
  init: function() {
    this.CreateProposal();
  },
  CreateProposal: function() {
    $("#CreatePro .item").tab();
  }
}
$(document).ready(function() {
  proposals.init();
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