var addRow = document.getElementById('addRowTr');
var inputs = document.getElementsByTagName('input');

addRow.addEventListener('click', function () {
  var firstRow = document.getElementsByTagName('tr')[0];
  firstRow.insertAdjacentHTML('beforebegin', '<tr><td></td><td></td><td></td></tr>');
});

var table = document.getElementById('table');

table.addEventListener('click', function (event) {

  var el = event.target;
    if(el.tagName == 'TD' && el.id != 'addRowTr' && el.id != 'addRowTd') {
        var input = document.createElement('input');
        input.value = el.textContent;
        el.textContent = '';
        el.appendChild(input);
        input.focus();
        input.addEventListener('blur', function (event) { 
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