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




jQuery(document).ready(function ($) {

    $(".regular").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 9000,
        speed: 700,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        respondTo: 'min',
        cssEase: 'linear',
        prevArrow: '<span class="icon-angle-left"></span>',
        nextArrow: '<span class="icon-angle-right"></span>'
    });
    
    // əsas slider
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        asNavFor: '.slider-nav'
    });

    // alt slider
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '10px',
        prevArrow: '<span class="icon-angle-left"></span>',
        nextArrow: '<span class="icon-angle-right"></span>',
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    dots: false,
                    slidesToShow: 3,  
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 420,
                settings: {
                    autoplay: true,
                    dots: false,
                    slidesToShow: 3,
                    centerMode: true,
                    pauseOnHover: true,
                }
            }
        ]
    });
});




document.querySelector('.mouse-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#services').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.mouse-btn').addEventListener('click',function(e) {
    e.preventDefault();
    document.querySelector('#services').scrollIntoView({
        behavior: 'smooth'
    });
});





/* Email js Start*/

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    const params = {
        user_name: document.getElementById("name").value,
        user_email: document.getElementById("email").value,
        user_phone: document.getElementById("phone").value,
        user_message: document.getElementById("message").value
    };

    emailjs.send("service_spnz76a", "template_bnr7xyj", params)
    .then(function(response) {
        alert("Mesaj uğurla göndərildi!");
        document.getElementById("contactForm").reset();

    }, function(error) {
        alert("Xəta baş verdi, sonra yenidən cəhd edin.");
        console.log(error);
    });
    
    submitBtn.disabled = true;
});


let inputs = document.querySelectorAll("#contactForm input, #contactForm textarea");
let submitBtn = document.querySelector(".contact_SendBtn");

submitBtn.disabled = true;

function checkInputs() {
    let allFilled = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            allFilled = false;
        }
    });

    submitBtn.disabled = !allFilled;
}

inputs.forEach(input => {
    input.addEventListener("input", checkInputs);
});


/* Email js End */

