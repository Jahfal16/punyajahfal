document.addEventListener('DOMContentLoaded', function () {
  // Animasi pada tombol CTA
  const ctaButton = document.querySelector('.cta-button');
  
  ctaButton.addEventListener('mouseover', function () {
    ctaButton.style.transform = 'scale(1.1)';
  });

  ctaButton.addEventListener('mouseout', function () {
    ctaButton.style.transform = 'scale(1)';
  });

  // Scroll Animation pada service-card
  const serviceCards = document.querySelectorAll('.service-card');
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = 1;
      } else {
        entry.target.style.transform = 'translateY(100px)';
        entry.target.style.opacity = 0;
      }
    });
  }, {
    threshold: 0.5
  });

  serviceCards.forEach(card => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'translateY(100px)';
    card.style.opacity = 0;
    observer.observe(card);
  });
});
