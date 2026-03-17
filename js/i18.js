document.addEventListener("DOMContentLoaded", function() {

    var arrLang = {

        'az': {

            /* Navbar */

            'nav_Home': 'Əsas səhifə',
            'nav_About': 'Haqqımızda',
            'nav_Services': 'Xidmətlər',
            'nav_Partners': 'Partnyorlar',
            'nav_Contact': 'Əlaqə',
        
            /*  */
        },

        'en': {

            /* Navbar */

            'nav_Home': 'Home',
            'nav_About': 'About Us',
            'nav_Services': 'Services',
            'nav_Partners': 'Partners',
            'nav_Contact': 'Contact',
        
            /*  */
        },

        'ru': {

            /* Navbar */

            'nav_Home': 'Главная',
            'nav_About': 'О нас',
            'nav_Services': 'Услуги',
            'nav_Partners': 'Партнеры',
            'nav_Contact': 'Контакт',
        
            /*  */
        },
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