let subscriberCountKey = 'subscriberCounter';

let subscriberCount = parseInt(localStorage.getItem(subscriberCountKey)) || 0;

document.addEventListener('DOMContentLoaded', function() {
    const subscribeButton = document.querySelector('.signup-cta button');
    const emailInput = document.querySelector('.signup-cta input');
    const signupCta = document.querySelector('.signup-cta');

   
    displayInitialSignupCta();

    
    subscribeButton.addEventListener('click', function() {
        const email = emailInput.value;

        if (validateEmail(email)) {
            subscriberCount++; 
            localStorage.setItem(subscriberCountKey, subscriberCount); 

            
            updateSignupCta();
        } else {
            alert('Please enter a valid email address!');
        }
    });

    
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    
    function displayInitialSignupCta() {
        signupCta.querySelector('p:last-of-type').textContent = `Total subscribers: ${subscriberCount}`;
    }

    
    function updateSignupCta() {
        signupCta.innerHTML = `
            <p>Subscribed!</p>
            <p>Total subscribers: ${subscriberCount}</p>
            <button onclick="location.reload();">Subscribe Again</button>
        `;
    }
});


const medium = document.querySelector("#medium");
const year = document.querySelector("#year");


// use the date object
const today = new Date();

year.innerHTML = `© <span class="highlight">${today.getFullYear()}</span> 🔭 Joshua Cirilo Alegria 🔭 Guatemala`;

const lastModified = document.lastModified;
/*alert(document.lastModified);*/
// returns: Tuesday, December 16, 2017 11:09:42
document.querySelector('footer p').textContent = `Last Modification: ${lastModified}`;

