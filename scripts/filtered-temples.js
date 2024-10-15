document.addEventListener('DOMContentLoaded', () => {
    const year = document.querySelector("#year");
    const grid = document.querySelector(".grid"); 


    const today = new Date();
    year.innerHTML = `© <span class="highlight">${today.getFullYear()}</span> 🔭 Joshua Cirilo Alegria 🔭 Guatemala`;

    const lastModified = document.lastModified;
    document.querySelector('footer p').textContent = `Last Modification: ${lastModified}`;


    const hamburger = document.querySelector("#hamburger");
    const menu = document.querySelector("#menu");

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('show');
            hamburger.textContent = menu.classList.contains('show') ? '✖' : '☰';
        });
    } else {
        console.error('Hamburger button or menu element not found!');
    }

    
    function clearGrid() {
        grid.innerHTML = ''; 
    }


    function createTempleCard(temple) {
        const card = document.createElement('div');
        card.classList.add('temple-card');

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} image`;
        img.loading = 'lazy'; 
        card.appendChild(img);

        const name = document.createElement('h3');
        name.textContent = temple.templeName;
        card.appendChild(name);

        const location = document.createElement('p');
        location.textContent = `Location: ${temple.location}`;
        card.appendChild(location);

        const dedicated = document.createElement('p');
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        card.appendChild(dedicated);

        const area = document.createElement('p');
        area.textContent = `Area: ${temple.area} sq ft`;
        card.appendChild(area);

        grid.appendChild(card);
    }

   
    function displayFilteredTemples(filterCondition) {
        clearGrid(); 
        temples.filter(filterCondition).forEach(createTempleCard);
    }


    document.getElementById('home').addEventListener('click', () => {
        displayFilteredTemples(() => true); 
    });

    document.getElementById('old').addEventListener('click', () => {
        displayFilteredTemples(temple => new Date(temple.dedicated).getFullYear() < 1900); 
    });

    document.getElementById('new').addEventListener('click', () => {
        displayFilteredTemples(temple => new Date(temple.dedicated).getFullYear() > 2000); 
    });

    document.getElementById('large').addEventListener('click', () => {
        displayFilteredTemples(temple => temple.area > 90000); 
    });

    document.getElementById('small').addEventListener('click', () => {
        displayFilteredTemples(temple => temple.area < 10000); 
    });

    displayFilteredTemples(() => true);
});


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005-08-07",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888-05-21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015-06-07",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020-05-02",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974-11-19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986-01-10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983-12-02",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Guatemala City Guatemala Temple",
        location: "Guatemala City, Guatemala",
        dedicated: "1984-12-14",
        area: 116642,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/guatemala-city-guatemala-temple/guatemala-city-guatemala-temple-9670.jpg"
    },
    {
        templeName: "Cobán Guatemala Temple",
        location: "Coban, Guatemala",
        dedicated: "2024-06-09",
        area: 116642,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/coban-guatemala-temple/coban-guatemala-temple-47555.jpg"
    },
    {
        templeName: "Quetzaltenango Guatemala Temple",
        location: "Quetzaltenango, Guatemala",
        dedicated: "2011-12-11",
        area: 116642,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/quetzaltenango-guatemala-temple/quetzaltenango-guatemala-temple-3958-thumb.jpg"
    },
    {
        templeName: "San Salvador El Salvador Temple",
        location: "San Salvador, El Salvador",
        dedicated: "2011-08-02",
        area: 116642,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salvador-brazil-temple/salvador-brazil-temple-51675-thumb.jpg"
    },
    {
        templeName: "Quito Ecuador Temple",
        location: "Quito, Ecuador",
        dedicated: "2022-11-20",
        area: 116642,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/quito-ecuador-temple/quito-ecuador-temple-31201.jpg"
    },
];
