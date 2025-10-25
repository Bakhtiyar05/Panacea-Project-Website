document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.counter');
  const speed = 2000; // daha kiçik rəqəm = daha sürətli animasiya

  const startCounting = (counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / 100; // artım addımı

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(() => startCounting(counter), speed);
    } else {
      counter.innerText = target;
    }
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        startCounting(counter);
        observer.unobserve(counter); // bir dəfə işlə
      }
    });
  }, { threshold: .9 }); // 60% göründükdə başlasın

  counters.forEach(counter => {
    observer.observe(counter);
  });
});
