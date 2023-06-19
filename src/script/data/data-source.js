class DataSource {
    static searchFilm(keyword) {
      return fetch(`http://www.omdbapi.com/?apikey=48c2f4f7&s=${keyword}`)
          .then(response => {
            return response.json();
          })
          .then(responseJson => {
            if (responseJson.Search) {
              return Promise.resolve(responseJson.Search);
            } else {
              return Promise.reject(`${keyword} tidak ditemukan`);
            }
    });
  }

}
   
export default DataSource;