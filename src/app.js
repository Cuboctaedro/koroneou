import 'lazysizes';
import Tobii from '@midzer/tobii';
import tabs from './tabs.js';
import years from './years.js';

const tobii = new Tobii();

if (document.querySelector('[data-tabs]')) {
    tabs('[data-tabs]');
}

if (document.getElementById('years')) {
    years();
}

function burger() {
    const button = document.querySelector('[data-burger]');
    const menu = document.getElementById(button.getAttribute('aria-controls'));
    button.addEventListener('click', e => {
        menu.classList.toggle('is-open');
        button.setAttribute('aria-expanded', !button.getAttribute('aria-expanded'));
    });
}

burger();

function inquire() {
    const inquireButtons = document.querySelectorAll('[data-inquire]');
    inquireButtons.forEach((button) => {
        const target = document.getElementById(button.getAttribute('data-inquire'));
        button.addEventListener('click', function() {
            target.classList.toggle('is-visible');
        });
    })
    const inquireClose = document.querySelectorAll('[data-inquire-close]');
    inquireClose.forEach((button) => {
        const target = document.getElementById(button.getAttribute('data-inquire-close'));
        button.addEventListener('click', function() {
            target.classList.toggle('is-visible');
        });
   })
}

inquire();