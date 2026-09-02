document.querySelectorAll('.menuToggle').forEach((button) => {
    const menu = document.getElementById(button.getAttribute('aria-controls'));

    button.addEventListener('click', () => {
        const isOpen = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!isOpen));
        menu.classList.toggle('is-open', !isOpen);
    });

    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            button.setAttribute('aria-expanded', 'false');
            menu.classList.remove('is-open');
        });
    });
});

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('em').value.trim();
        const description = document.getElementById('ta').value.trim();

        if (!email || !description) {
            contactForm.reportValidity();
            return;
        }

        const message = `Restaurant enquiry\nEmail: ${email}\nDescription: ${description}`;
        window.open(`https://wa.me/918179974915?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
    });
}
