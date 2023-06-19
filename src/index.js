import { fetchBreeds, fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

// Fetch and populate breeds
function populateBreeds() {
  fetchBreeds()
    .then(breeds => {
      breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
      });
    })
    .catch(() => {
      showError();
    });
}

// Fetch and display cat info
function displayCatInfo(breedId) {
  fetchCatByBreed(breedId)
    .then(cats => {
      const cat = cats[0];

      const image = document.createElement('img');
      image.src = cat.url;
      catInfo.innerHTML = '';
      catInfo.appendChild(image);

      const name = document.createElement('h2');
      name.textContent = cat.breeds[0].name;
      catInfo.appendChild(name);

      const description = document.createElement('p');
      description.textContent = cat.breeds[0].description;
      catInfo.appendChild(description);

      const temperament = document.createElement('p');
      temperament.textContent = `Temperament: ${cat.breeds[0].temperament}`;
      catInfo.appendChild(temperament);
    })
    .catch(() => {
      showError();
    });
}

// Show loader
function showLoader() {
  loader.style.display = 'block';
}

// Hide loader
function hideLoader() {
  loader.style.display = 'none';
}

// Show error
function showError() {
  error.style.display = 'block';
}

// Hide error
function hideError() {
  error.style.display = 'none';
}

// Event listener for breed select change
breedSelect.addEventListener('change', () => {
  const breedId = breedSelect.value;
  hideError();
  showLoader();
  displayCatInfo(breedId);
});

// Initial setup
populateBreeds();
