// Collapse mobile menu after selecting a link
document.querySelectorAll('#mainNav .nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    var nav = document.getElementById('mainNav');
    var collapse = bootstrap.Collapse.getInstance(nav);
    if (collapse && window.innerWidth < 992) collapse.hide();
  });
});

// Build email addresses at runtime to keep them out of the page source
document.querySelectorAll('.mail[data-user]').forEach(function (el) {
  var address = el.dataset.user + '@' + el.dataset.domain;
  el.textContent = address;
});

// Active link highlight on scroll
var sections = document.querySelectorAll('section[id], header[id]');
var navLinks = document.querySelectorAll('#mainNav .nav-link');
window.addEventListener('scroll', function () {
  var pos = window.scrollY + 120;
  sections.forEach(function (sec) {
    if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(function (l) {
        l.classList.toggle('active', l.getAttribute('href') === '#' + sec.id);
      });
    }
  });
});
