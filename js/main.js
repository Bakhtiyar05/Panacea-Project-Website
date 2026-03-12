
/* Navbar */

const menu = document.querySelector(".menu");
const menuInner = menu.querySelector(".menu__inner");
const menuArrow = menu.querySelector(".menu__arrow");
const menuTitle = menu.querySelector(".menu__title");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");

function toggleMenu() {
    menu.classList.toggle("is-active");
    overlay.classList.toggle("is-active");
}

function showSubMenu(children) {
    subMenu = children.querySelector(".submenu");
    subMenu.classList.add("is-active");
    subMenu.style.animation = "slideLeft 0.35s ease forwards";
    const menuTitle = children.querySelector("i").parentNode.childNodes[0]
        .textContent;
    menu.querySelector(".menu__title").textContent = menuTitle;
    menu.querySelector(".menu__header").classList.add("is-active");
}

function hideSubMenu() {
    subMenu.style.animation = "slideRight 0.35s ease forwards";
    setTimeout(() => {
        subMenu.classList.remove("is-active");
    }, 300);

    menu.querySelector(".menu__title").textContent = "";
    menu.querySelector(".menu__header").classList.remove("is-active");
}

function toggleSubMenu(e) {
    if (!menu.classList.contains("is-active")) {
        return;
    }
    if (e.target.closest(".menu__dropdown")) {
        const children = e.target.closest(".menu__dropdown");
        showSubMenu(children);
    }
}

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        if (menu.classList.contains("is-active")) {
        toggleMenu();
        }
    }
});




/* Navbar hide on scroll Start */

let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {
    const filter_Scrolly = document.getElementById("filteredScroll");

    if (window.scrollY > lastScrollY) {
        header.style.top = "-80px";
        filter_Scrolly.style.top = "10px";
        filter_Scrolly.style.transition = '.3s'
    } else {
        header.style.top = "0px";
        filter_Scrolly.style.top = "70px";
        filter_Scrolly.style.transition = '.3s'
        filter_Scrolly.style.position = 'sticky';
    }


    lastScrollY = window.scrollY;
});

/* Navbar hide on scroll End */



/* Products Filter Button Start */

window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    
    if (window.scrollY > 150) {
        header.classList.add("scrolled");
        header.style.transition = "1s";
    } else {
        header.classList.remove("scrolled");
        header.style.transition = "1s";
    }

    lastScrollY = window.scrollY;
});

/* Products Filter Button End */


burger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
menuArrow.addEventListener("click", hideSubMenu);
menuTitle.addEventListener("click", hideSubMenu);
menuInner.addEventListener("click", toggleSubMenu);

/* Navbar End */



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

