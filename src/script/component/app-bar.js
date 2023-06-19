class AppBar extends HTMLElement {

    connectedCallback() {
      this.render();
    }
   
    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
              <a class="navbar-brand" href="#">Kevin Pandoh</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>            
          </div>
        </nav>
        `;
      }
  }
   
  customElements.define('app-bar', AppBar);