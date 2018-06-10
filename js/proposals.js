var proposals = {
  init: function() {
    this.CreateProposal();
  },
  CreateProposal: function() {
    $("#CreatePro .item").tab();


    $("#FundsProIssue").click(function(event) {
      var ProInfo = $("#FundsProInfo").text();
      var FundsBene = $("#FundsBene").val();
      var Funds = $("#Funds").val();
      var FundsDeadline = $("#FundsDeadline").val();
      log(ProInfo);
      log(FundsBene);
      log(Funds);
      log(FundsDeadline);
      //Create Type 1 proposal
    });
    $("#InfoProIssue").click(function(event) {
      var InfoProInfo = $("#InfoProInfo").text();
      var InfoProposer = $("#InfoProposer").val();
      var InfoName = $("#InfoName").val();
      var InfoDeadline = $("#InfoDeadline").val();
      log(InfoProInfo);
      log(InfoProposer);
      log(InfoName);
      log(InfoDeadline);
      //Create Type 2 proposal
    });
    $("#InfoProIssue").click(function(event) {
      var MajProInfo = $("#MajProInfo").text();
      var MajProposer = $("#MajProposer").val();
      var MajDeadline = $("#MajDeadline").val();
      log(MajProInfo);
      log(MajProposer);
      log(MajDeadline);
      //Create Type 3 proposal
    });

  },
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