var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

    var button = document.getElementsByTagName('button');
    button[0].onclick = function () {
      for (var i = 0;  ; i++) {
        var links = firstPar.children[i];
      links.classList.add('changed');
    }
    }
    
    
      secondPar.onclick =  function () {
        event.preventDefault();
        if (event.target.tagName == 'A') {
          alert(event.target.getAttribute('href'));    
        }
      };
    