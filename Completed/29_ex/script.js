let div = document.getElementsByTagName('div');
let link = document.getElementById("id1");

div[0].style.display = 'none';

link.addEventListener('click', (e) => {
  e.preventDefault();
  div[0].style.display = 'block';

});