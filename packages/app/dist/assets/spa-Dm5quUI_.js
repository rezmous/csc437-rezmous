import{r as i,i as g,x as o,e as h,d as u,a as f,h as m,_ as x}from"./lit-element-Bk48Xmzb.js";const n=class n extends i{connectedCallback(){super.connectedCallback(),this.applyDarkMode()}render(){return o`
      <header>
        <label class="dark-mode-switch">
          <svg class="icon-darkmode">
            <use href="./assets/logo.svg#icon-darkmode"></use>
          </svg>
          <input
            type="checkbox"
            id="darkModeToggle"
            autocomplete="off"
            @change=${this.handleDarkModeToggle}
            .checked=${this.isDarkModeEnabled()}
          />
        </label>
        <svg class="icon left-logo">
          <use href="./assets/logo.svg#icon-solelogo"></use>
        </svg>
        <h1><a href="/">Sole Collection</a></h1>
        <svg class="icon right-logo">
          <use href="./assets/logo.svg#icon-solelogo"></use>
        </svg>
        <nav>
          ${this.renderCollectionLink()}
          <a id="auth-link" href="#" @click=${this.handleAuth}>
            ${this.getAuthText()}
          </a>
        </nav>
      </header>
    `}renderCollectionLink(){const e=this.getUserId();return e?o`
      <a id="collection-link" href="/collector/${e}">
        <span id="userid">${e}</span>'s Collection
      </a>
    `:o``}handleDarkModeToggle(e){const d=e.target.checked;h.relay(e,"darkmode:toggle",{isDarkMode:d}),this.updateDarkMode(d)}updateDarkMode(e){e?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),localStorage.setItem("darkMode",String(e))}applyDarkMode(){const e=this.isDarkModeEnabled();this.updateDarkMode(e)}isDarkModeEnabled(){return localStorage.getItem("darkMode")==="true"}handleAuth(e){e.preventDefault(),this.getUserId()&&(localStorage.removeItem("userid"),localStorage.removeItem("auth-token"),h.relay(e,"auth:signout")),window.location.href="/login"}getUserId(){return localStorage.getItem("userid")||""}getAuthText(){return this.getUserId()?"Sign Out":"Sign In"}};n.styles=g`
    header {
      background-color: var(--color-background-header);
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      position: sticky;
      top: 0;
    }

    header h1 {
      font-family: "PT Serif", serif;
      font-weight: 700;
      margin: 0;
      text-align: center;
    }

    header h1 a {
      text-decoration: none;
      color: var(--color-text-control);
    }

    header .icon {
      height: 2.5rem;
      width: 2.5rem;
      fill: var(--color-text-control);
    }

    .dark-mode-switch {
      display: flex;
      align-items: center;
      gap: 10px;
      position: absolute;
      left: 20px;
    }

    .icon-darkmode {
      height: 1.5rem;
      width: 1.5rem;
      fill: var(--color-text-control);
      cursor: pointer;
    }

    .left-logo {
      margin-right: 10px;
    }

    .right-logo {
      margin-left: 10px;
    }

    nav {
      display: flex;
      gap: 20px;
      position: absolute;
      right: 20px;
      margin-right: 10px;
    }

    nav a {
      text-decoration: none;
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      color: var(--color-text-control);
      background-color: var(--color-background-header);
      padding: 10px 20px;
      border-radius: 5px;
    }

    nav a:hover {
      background-color: var(--color-background-page);
    }
  `;let r=n;const c=class c extends i{connectedCallback(){super.connectedCallback(),this.checkAuthStatus()}checkAuthStatus(){localStorage.getItem("auth-token")||(window.location.href="/login.html")}render(){return o`
      <main class="page">
        <section class="manufacturer-cards">
          <div class="card">
            <h2>Nike</h2>
            <svg class="icon brand-logo">
              <use href="/assets/logo.svg#icon-nikelogo"></use>
            </svg>
            <a href="Manufacturer/nike.html">Explore Nike</a>
          </div>
          <div class="card">
            <h2>Jordan Brand</h2>
            <svg class="icon brand-logo">
              <use href="/assets/logo.svg#icon-jordanlogo"></use>
            </svg>
            <a href="Manufacturer/jordan.html">Explore Jordan</a>
          </div>
          <div class="card">
            <h2>Adidas</h2>
            <svg class="icon brand-logo">
              <use href="/assets/logo.svg#icon-adidaslogo"></use>
            </svg>
            <a href="Manufacturer/adidas.html">Explore Adidas</a>
          </div>
        </section>
        <section class="info-section">
          <h2>What is Market Value?</h2>
          <p>
            The cost of a shoe based on several factors, such as Manufacturer,
            Shoe Model, Scarcity, and Designer.
          </p>
        </section>
        <section class="info-section">
          <h2>Who is a Sneaker Collector?</h2>
          <p>
            A Sneaker Collector is an individual who collects shoes based on
            various factors but primarily based on Market Value. These
            collectors often share their collection and recent pickups.
          </p>
        </section>
      </main>
    `}};c.styles=g`
    :host {
      display: block;
    }

    body {
      color: var(--color-text);
      background-color: var(--color-background-page);
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
    }

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding: 20px;
    }

    .manufacturer-cards {
      display: flex;
      justify-content: center;
      gap: 30px;
      margin-bottom: 30px;
      flex-wrap: wrap;
    }

    .manufacturer-cards .card {
      flex: 1;
      padding: 20px;
      border: 1px solid var(--color-accent);
      border-radius: 10px;
      background-color: var(--color-background-card);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      min-width: 250px;
      max-width: 400px;
      transition: transform 0.3s ease;
    }

    .manufacturer-cards .card:hover {
      transform: scale(1.05);
      position: relative;
    }

    .manufacturer-cards .card h2 {
      font-family: "PT Serif", serif;
      font-weight: 700;
      margin-bottom: 15px;
      font-size: 1.8rem;
      color: var(--color-text);
    }

    .manufacturer-cards .card .brand-logo {
      display: block;
      margin: 0 auto 10px auto;
      height: 80px;
      width: 80px;
      fill: var(--color-link);
    }

    .manufacturer-cards .card a {
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      color: var(--color-link);
      text-decoration: none;
      font-size: 1.2rem;
      margin-top: 20px;
    }

    .manufacturer-cards .card a:hover {
      text-decoration: underline;
    }

    .info-section {
      max-width: 800px;
      width: 60%;
      padding: 20px;
      margin: 20px auto;
      border: 1px solid var(--color-accent);
      border-radius: 10px;
      background-color: var(--color-background-card);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    .info-section h2 {
      font-family: "PT Serif", serif;
      font-weight: 700;
      margin-bottom: 10px;
      color: var(--color-text);
    }

    .info-section p {
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      color: var(--color-link);
    }

    @media (max-width: 768px) {
      .manufacturer-cards {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      }

      .info-section {
        width: 90%;
      }
    }
  `;let t=c;const l=class l extends i{render(){return o` <home-view></home-view> `}connectedCallback(){super.connectedCallback()}};l.uses=u({"home-view":t});let s=l;const v=[{path:"/shoes/:sku",view:a=>o`
      <shoe-view sku=${a.sku}></shoe-view>
    `},{path:"/collector/:username",view:a=>o`
      <collector-view username=${a.username}></collector-view>
    `},{path:"/register",view:()=>o` <register-view></register-view> `},{path:"/",redirect:"/app"},{path:"/app",view:()=>o` <home-view></home-view> `}];u({"mu-auth":f.Provider,"mu-history":m.Provider,"mu-switch":class extends x.Element{constructor(){super(v,"sole_collection:history","sole_collection:auth")}},"solecollection-app":s,"solecollection-header":r});
