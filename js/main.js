/* Counter info */

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    const options = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    };

    const animateCount = (el, duration = 5400) => {
        const rawTarget = el.getAttribute('data-target') || el.textContent;
        const target = Math.max(0, parseInt(String(rawTarget).replace(/\D/g, ''), 10) || 0);
        const startTime = performance.now();
        const start = 0;

        const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * eased);
        el.textContent = current;
        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            el.textContent = target;
        }
        };

        requestAnimationFrame(step);
    };

    const obs = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            if (!el.classList.contains('counted')) {
            animateCount(el);
            el.classList.add('counted');
            }
            observer.unobserve(el);
        }
        });
    }, options);

    counters.forEach(c => {
        c.textContent = '0';
        obs.observe(c);
    });
});
