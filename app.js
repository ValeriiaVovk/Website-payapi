const burgerMenu = document.querySelector('.burger-menu');
const header = document.querySelector('.header');
const mobileMenu = document.createElement('div');
mobileMenu.classList.add('mobile-menu');

const time = document.querySelector('.main-header__phone-notification_time');

burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('active-burger');
    if (burgerMenu.classList.contains('active-burger')) {
        header.appendChild(mobileMenu);
        mobileMenu.innerHTML = `
            <hr class="hr">
            <ul class="mobile-list">
                <li><a href="./pricing.html" class="header__navigation-link mobile-link first">Pricing</a></li>
                <li><a href="./about.html" class="header__navigation-link mobile-link">About</a></li>
                <li><a href="./contact.html" class="header__navigation-link mobile-link">Contact</a></li>
            </ul>
            <button class="mobile-button">Schedule a Demo</button>
        `;
    } else {
        header.removeChild(mobileMenu);
    }
})

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;

    let timeString = hours + ":" + minutes;

    time.textContent = timeString;
}
updateClock();

setInterval(updateClock, 60000);
