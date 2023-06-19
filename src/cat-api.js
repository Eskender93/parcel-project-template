const API_KEY =
  'live_5bw3BxNA9WpKzB9hOqnhzpYg7lLInJuSkrwVbgEOYBDOXtq4PG9T5120vuhVnpxP';

export function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';

  return fetch(url, {
    headers: {
      'x-api-key': API_KEY,
    },
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed to fetch breeds');
    })
    .catch(error => {
      console.error(error);
    });
}

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  return fetch(url, {
    headers: {
      'x-api-key': API_KEY,
    },
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed to fetch cat by breed');
    })
    .catch(error => {
      console.error(error);
    });
}
