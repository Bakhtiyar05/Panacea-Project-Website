document.addEventListener("DOMContentLoaded", function() {

    var arrLang = {
        'az': {
            'home': 'Əsas səhifə',
            'about': 'Haqqımızda',
            'services': 'Xidmətlər',
            'contact': 'Əlaqə',
        },
        'en': {
            'home': 'Home',
            'about': 'About Us',
            'services': 'Services',
            'contact': 'Contact',
        },
        'ru': {
            'home': 'Главная',
            'about': 'О нас',
            'services': 'Услуги',
            'contact': 'Контакт',
        }
    };


let dropdownItems = document.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(function(item) {
            item.addEventListener('click', function() {
                localStorage.setItem('dil', this.id);
                location.reload();
            });
        });

        let lang = localStorage.getItem('dil') || 'az';

        document.getElementById(lang).classList.add('active-lang');

        let elements = document.querySelectorAll('[data-key]');
        elements.forEach(function(element) {
            let key = element.getAttribute('data-key');
            if (key !== null && arrLang[lang][key] !== undefined) {
                element.textContent = arrLang[lang][key];
            }
        });
    });