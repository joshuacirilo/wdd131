// Clave para almacenar el contador de suscriptores en localStorage
let subscriberCountKey = 'subscriberCounter';
// Recupera el contador de suscriptores de localStorage o lo inicializa en 0
let subscriberCount = parseInt(localStorage.getItem(subscriberCountKey)) || 0;

document.addEventListener('DOMContentLoaded', function() {
    const subscribeButton = document.querySelector('.signup-cta button');
    const emailInput = document.querySelector('.signup-cta input');
    const signupCta = document.querySelector('.signup-cta');

    // Mostrar el contador almacenado al cargar la página
    displayInitialSignupCta();

    // Asignar el evento click al botón de suscripción
    subscribeButton.addEventListener('click', function() {
        const email = emailInput.value;

        if (validateEmail(email)) {
            subscriberCount++; // Incrementa el contador de suscriptores
            localStorage.setItem(subscriberCountKey, subscriberCount); // Almacena el nuevo valor en localStorage

            // Actualiza la sección para mostrar "Subscribed" y el contador
            updateSignupCta();
        } else {
            alert('Please enter a valid email address!');
        }
    });

    // Función para validar la dirección de correo electrónico
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Función para mostrar el mensaje de suscripción y contador inicial
    function displayInitialSignupCta() {
        signupCta.querySelector('p:last-of-type').textContent = `Total subscribers: ${subscriberCount}`;
    }

    // Función para actualizar la sección de suscripción después de suscribirse
    function updateSignupCta() {
        signupCta.innerHTML = `
            <p>Subscribed!</p>
            <p>Total subscribers: ${subscriberCount}</p>
            <button onclick="location.reload();">Subscribe Again</button>
        `;
    }
});

// --- Código para el footer ---
const medium = document.querySelector("#medium");
const year = document.querySelector("#year");

// Obtiene la fecha actual
const today = new Date();

// Actualiza el footer con el año actual y la información del autor
year.innerHTML = `© <span class="highlight">${today.getFullYear()}</span> 🔭 Joshua Cirilo Alegria 🔭 Guatemala`;

// Obtiene la última fecha de modificación del documento
const lastModified = document.lastModified;
document.querySelector('footer p').textContent = `Last Modification: ${lastModified}`;

