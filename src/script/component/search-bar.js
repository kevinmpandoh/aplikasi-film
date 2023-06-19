class SearchBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
    
    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }
   
    get value() {
      return this.querySelector('#search-input').value;
    }
    
    render() {
      this.innerHTML = `
      <div class="row mt-3 justify-content-center">
        <div class="col-md-8">
          <h1 class="text-center">Cari Film</h1>
          <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Judul film.."  id="search-input" type="search">
              <div class="input-group-append">
                  <button class="btn btn-dark" type="submit" id="search-button">Cari</button>
              </div>
          </div>
        </div>
      </div>
      `;
   
      this.querySelector('#search-button').addEventListener('click', this._clickEvent);
    }
  }
   
  customElements.define('search-bar', SearchBar);