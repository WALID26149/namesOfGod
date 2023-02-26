const btn = document.querySelector('.btn');
const head = document.querySelector('body');

// make the btn scrolle to the top
btn.addEventListener('click', function (e) {
  const s1coords = head.getBoundingClientRect();
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
});

// lazy load for the page
const page = document.querySelectorAll('.container');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section-hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

page.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section-hidden');
});
