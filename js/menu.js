document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    if (!header || !burger || !menu) {
        return;
    }

    const closeMenu = () => {
        if (!header.classList.contains('open')) {
            return;
        }
        header.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
    };

    burger.setAttribute('aria-expanded', 'false');

    burger.addEventListener('click', () => {
        const isOpen = header.classList.toggle('open');
        burger.setAttribute('aria-expanded', String(isOpen));
    });

    // Исправлено: используем contains вместо нестандартного флага для определения клика вне меню
    document.addEventListener('click', (event) => {
        if (!header.classList.contains('open')) {
            return;
        }

        if (header.contains(event.target)) {
            return;
        }

        closeMenu();
    });

    menu.addEventListener('click', (event) => {
        const link = event.target instanceof HTMLElement ? event.target.closest('.menu__link') : null;
        if (link) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
            burger.focus();
        }
    });
});
