var MemberSharesNumber = 0;
var org = {
  init: function() {
    this.creatOrg();
  },
  creatOrg: function() {
    $("#conditions_checkbox").checkbox("check");
    //checkpoint
    $("#conditions_checkbox").click(function(event) {
      log($("#conditions_checkbox").checkbox('is checked'));
      if ($("#conditions_checkbox").checkbox('is checked')) {
        $("#conditions_checkbox").checkbox('check');
      } else if ($("#conditions_checkbox").checkbox('is unchecked')) {
        $("#conditions_checkbox").checkbox('uncheck');
      }
    });
    $("#CreateOrgButton").click(function(event) {
      let OrgName = $("#orgname").val();
      let total_shares = $("#total_shares").val();
      let MemShares = [];
      if (MemberSharesNumber == 0) {
        if ($("#Mem_name_0").val().length > 0) {
          MemShares.push({
            'Name': $("#Mem_name_0").val(),
            'Shares': $("#Mem_shares_0").val()
          });
        }
      } else {
        let SharesSum = 0;
        for (var i = 0; i < MemberSharesNumber + 1; i++) {
          MemShares.push({
            'Name': $("#Mem_name_" + i).val(),
            'Shares': $("#Mem_shares_" + i).val()
          });
        }
      }
      console.log(OrgName)
      console.log(total_shares)
      console.log(MemShares)
      //Create Org by OrgName,total_shares,MemShares

    });
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

function AddMemSharesNumber() {
  MemberSharesNumber++;
  $("#add_MemberSharesNumber").remove();
  var MemberHtml = "<br/>";
  MemberHtml += "<div style=\"float:left;display:block;margin-right:2%;\">\n";
  MemberHtml += "  <label>Name<\/label>\n";
  MemberHtml += "  <input id=\"Mem_name_" + MemberSharesNumber + "\" />\n";
  MemberHtml += "<\/div>\n";
  MemberHtml += "<div style=\"float:left;\">\n";
  MemberHtml += "  <label>Shares<\/label>\n";
  MemberHtml += "  <input id=\"Mem_shares_" + MemberSharesNumber + "\"/>\n";
  MemberHtml += "<\/div>\n";
  MemberHtml += "<div style=\"float:left;margin-top:4.5%;margin-left:10%;\">\n";
  MemberHtml += "  <button id='add_MemberSharesNumber' onclick='AddMemSharesNumber();' class=\"circular ui icon inverted blue button\" type=\"button\"><i class=\"add icon\"><\/i><\/button>\n";
  MemberHtml += "<\/div>\n";
  $("#MemberShares").append(MemberHtml);
}