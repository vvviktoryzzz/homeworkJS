var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

    var button = document.getElementsByTagName('button');
    button[0].onclick = function () {
      var link1 = firstPar.children[0],
          link2 = firstPar.children[1];
    
      link1.style.color = "pink";
      link2.style.color = "pink";
      link1.style.fontSize = "25px";
      link2.style.fontSize = "25px"
    }
    
    var link3 = secondPar.children[0],
        link4 = secondPar.children[1];
    
    secondPar.addEventListener('click', function (links) {
      links.preventDefault();
    
      if (links.target == link3) {
        alert(link3.getAttribute('href'));
      }
    
      if (links.target == link4) {
        alert(link4.getAttribute('href'));
      }
      
    });