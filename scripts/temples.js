document.addEventListener('DOMContentLoaded', () => {
    const medium = document.querySelector("#medium");
    const year = document.querySelector("#year");


    // use the date object
    const today = new Date();

    year.innerHTML = `© <span class="highlight">${today.getFullYear()}</span> 🔭 Joshua Cirilo Alegria 🔭 Guatemala`;

    const lastModified = document.lastModified;
    /*alert(document.lastModified);*/
    // returns: Tuesday, December 16, 2017 11:09:42
    document.querySelector('footer p').textContent = `Last Modification: ${lastModified}`;


// Hamburger menu
    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('show');
            hamburger.textContent = menu.classList.contains('show') ? '✖' : '☰';
        });
    } else {
        console.error('Hamburger button or menu element not found!');
    }
});
