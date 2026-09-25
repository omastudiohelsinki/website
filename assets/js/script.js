document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const menuView = document.getElementById('menuView');
  const logo = document.getElementById('logo');
  const scrollTopBtn = document.getElementById('scrollTopButton');

  function openMenu() {
    menuBtn.classList.add('close');
    menuBtn.setAttribute('aria-expanded', 'true');
    menuView.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menuBtn.classList.remove('close');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuView.style.display = 'none';
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    if (menuBtn.classList.contains('close')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  menuBtn.addEventListener('click', toggleMenu);

  logo.addEventListener('click', function () {
    closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Close menu when clicking menu links
  menuView.querySelectorAll('.menuContentListLink').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Scroll to top button
  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });

  // Scroll reveal
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section:not(#hero)').forEach(function (section) {
    section.classList.add('fade-in');
    observer.observe(section);
  });
});
