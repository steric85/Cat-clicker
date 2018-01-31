var count = 0;
var elem = document.getElementById('cat-image');
elem.addEventListener('click', function(){
  divEle= document.getElementById('count');
  count++;
  divEle.innerHTML = count;
}, false);
