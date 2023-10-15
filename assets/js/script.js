function toggleMenu(event) {
  var menuBtn = document.getElementById('menuBtn');
  var menuView = document.getElementById('menuView');

  if (event.target.tagName === 'A' || event.target.tagName === 'IMG' || menuBtn.classList.contains('close')) {
    menuBtn.classList.remove('close');
    menuView.style.display = 'none';
  } else {
    menuBtn.classList.add('close');
    menuView.style.display = 'flex';
  }
}

let scrollTopBtn = document.getElementById("scrollTopButton");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}