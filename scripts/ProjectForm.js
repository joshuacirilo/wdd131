const products = [
    { id: "fc-1888", name: "Tikal", averagerating: 4.5 },
    { id: "fc-2050", name: "Lake Atitlan", averagerating: 4.7 },
    { id: "fs-1987", name: "Antigua Guatemala", averagerating: 3.5 },
  ];
  

  function populateProductOptions() {
      const selectElement = document.getElementById('product-name');
      
      products.forEach(product => {
          const option = document.createElement('option');
          option.value = product.id; 
          option.textContent = product.name; 
          selectElement.appendChild(option);
      });
  }

  function incrementReviewCounter() {
      const reviewCountKey = 'reviewCounter';

      let reviewCount = parseInt(localStorage.getItem(reviewCountKey)) || 0;
      

      reviewCount += 1;
      

      localStorage.setItem(reviewCountKey, reviewCount);
      

      console.log(`Review Complete: ${reviewCount}`);
  }
 
  document.addEventListener('DOMContentLoaded', () => {
      populateProductOptions();
  });
  

  //date
  const medium = document.querySelector("#medium");
const year = document.querySelector("#year");


// use the date object
const today = new Date();

year.innerHTML = `© <span class="highlight">${today.getFullYear()}</span> 🔭 Joshua Cirilo Alegria 🔭 Guatemala`;

const lastModified = document.lastModified;
/*alert(document.lastModified);*/
// returns: Tuesday, December 16, 2017 11:09:42
document.querySelector('footer p').textContent = `Last Modification: ${lastModified}`;