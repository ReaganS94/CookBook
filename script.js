function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
}

const pan = document.getElementById('pan');
const bowl1 = document.getElementById('bowl1');


window.addEventListener('scroll', function() {
  const value = window.scrollY;

  bowl1.style.left = value * 0.5 + 'px';
})