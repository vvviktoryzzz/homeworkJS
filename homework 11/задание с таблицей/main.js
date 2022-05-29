var addRow = document.getElementById("addRowTr");
var inputs = document.getElementsByTagName("input");

addRow.addEventListener("click", function()  {
    var lastRow = document.querySelector("#addRowTr");
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    document.getElementsByTagName("tbody")[0].insertBefore(row, lastRow);
})

var table = document.getElementById('table');

table.addEventListener('click', function (event) {

  var el = event.target;
    if(el.tagName == "TD" && el.id != "addRowTr" && el.id != "addRowTd") {
        var input = document.createElement('input');
        input.value = el.textContent;
        el.textContent = "";
        el.appendChild(input);
        input.focus();
        input.addEventListener("blur", function (event) { 
          return blurEvent(event)
        });
    
    input.onkeydown = function (event) {
      if (event.key == 'Enter') {
        this.blur();
      }
    };

    var blurEvent = function(e) {
      var parentTd = e.target.parentNode;
      e.target.remove();
      parentTd.textContent = e.target.value;
    }
  
  }
  
});