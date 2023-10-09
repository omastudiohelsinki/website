function toggleMenu(event) {
    var menuBtn = document.getElementById('menuBtn');
    var menuView = document.getElementById('menuView');
  
    // If a link is clicked or the menu is open, close the menu
    if (event.target.tagName === 'A' || menuBtn.classList.contains('close')) {
      menuBtn.classList.remove('close');
      menuView.style.display = 'none';
    } else {
      menuBtn.classList.add('close');
      menuView.style.display = 'flex';
    }
  }