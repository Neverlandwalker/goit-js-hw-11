const axios = require('axios');

export default class ImagesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImages() {
    const options = {
      url: 'https://pixabay.com/api/',
      params: {
        key: '30249749-d55f47b4585d1b9efabc8a3ca',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
        q: `${this.searchQuery}`,
        page: `${this.page}`,
      },
    };

    try {
      const response = await axios(options);
      const data = response.data;
      console.log(data);
      this.incrementPage();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}