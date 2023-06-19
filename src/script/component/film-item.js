class FilmItem extends HTMLElement {
    set film(film) {
      this._film = film;
      this.render();
    }    
   
    render() {
      this.innerHTML = `
      
      
        <div class="col-md-4">
          <div class="card mb-3" style="width: 18rem;">
            <img src="${this._film.Poster}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${this._film.Title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${this._film.Year}</h6>
              <a href="#" class="card-link see-detail btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${this._film.imdbID}" id="detail-button">Detail</a>
            </div>
          </div>
        </div>            
      `;
      
    }
  }
   
  customElements.define('film-item', FilmItem);