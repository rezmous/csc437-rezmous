import{r as u,i as p,x as s,e as w,n as g,V as P,a as n,d as D,h as T,s as A,_ as I}from"./property-Boso9Xnl.js";const x=class x extends u{connectedCallback(){super.connectedCallback(),this.applyDarkMode()}render(){return s`
      <header>
        <label class="dark-mode-switch">
          <svg class="icon-darkmode">
            <use href="/assets/logo.svg#icon-darkmode"></use>
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
          <use href="/assets/logo.svg#icon-solelogo"></use>
        </svg>
        <h1><a href="/">Sole Collection</a></h1>
        <svg class="icon right-logo">
          <use href="/assets/logo.svg#icon-solelogo"></use>
        </svg>
        <nav>
          ${this.renderCollectionLink()}
          <a id="auth-link" href="#" @click=${this.handleAuth}>
            ${this.getAuthText()}
          </a>
        </nav>
      </header>
    `}renderCollectionLink(){const e=this.getUserId();return e?s`
      <a id="collection-link" href="/collector/${e}">
        <span id="userid">${e}</span>'s Collection
      </a>
    `:s``}handleDarkModeToggle(e){const a=e.target.checked;w.relay(e,"darkmode:toggle",{isDarkMode:a}),this.updateDarkMode(a)}updateDarkMode(e){e?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),localStorage.setItem("darkMode",String(e))}applyDarkMode(){const e=this.isDarkModeEnabled();this.updateDarkMode(e)}isDarkModeEnabled(){return localStorage.getItem("darkMode")==="true"}handleAuth(e){e.preventDefault(),this.getUserId()&&(localStorage.removeItem("userid"),localStorage.removeItem("auth-token"),w.relay(e,"auth:signout")),window.location.href="/login.html"}getUserId(){return localStorage.getItem("userid")||""}getAuthText(){return this.getUserId()?"Sign Out":"Sign In"}};x.styles=p`
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
  `;let m=x;const k=class k extends u{connectedCallback(){super.connectedCallback(),this.checkAuthStatus()}checkAuthStatus(){localStorage.getItem("auth-token")||(window.location.href="/login.html")}render(){return s`
      <main class="page">
        <section class="manufacturer-cards">
          <div class="card">
            <h2>Nike</h2>
            <svg class="icon brand-logo">
              <use href="/assets/logo.svg#icon-nikelogo"></use>
            </svg>
            <a href="/shoes/AQ0818-100">Explore Nike</a>
          </div>
          <div class="card">
            <h2>Jordan Brand</h2>
            <svg class="icon brand-logo">
              <use href="/assets/logo.svg#icon-jordanlogo"></use>
            </svg>
            <a href="/jordan.html">Explore Jordan</a>
          </div>
          <div class="card">
            <h2>Adidas</h2>
            <svg class="icon brand-logo">
              <use href="/assets/logo.svg#icon-adidaslogo"></use>
            </svg>
            <a href="/adidas.html">Explore Adidas</a>
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
    `}};k.styles=p`
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
  `;let v=k;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function j(t){return g({...t,state:!0,attribute:!1})}var z=Object.defineProperty,E=Object.getOwnPropertyDescriptor,$=(t,e,o,a)=>{for(var r=a>1?void 0:a?E(e,o):e,c=t.length-1,i;c>=0;c--)(i=t[c])&&(r=(a?i(e,o,r):i(r))||r);return a&&r&&z(e,o,r),r};const b=class b extends P{constructor(){super(...arguments),this.username=""}get collector(){return this.model.collector}attributeChangedCallback(e,o,a){super.attributeChangedCallback(e,o,a),e==="username"&&o!==a&&a&&(console.log(`Fetching collector data for: ${a}`),this.dispatchMessage(["collector/select",{username:a}]))}render(){if(!this.collector)return s`<p class="loading">Loading collector data...</p>`;const{username:e,shoeModels:o=[],totalValue:a=0,quantity:r=0,manufacturers:c=[]}=this.collector;return s`
      <section class="collector-page">
        <div class="collection-header">
          <h1>${e}'s Collection</h1>
          <p>Total Value: $${a} | ${r} Pairs</p>
        </div>
        <section class="manufacturer-section">
          <h2>Manufacturers</h2>
          <ul>
            ${c.map(i=>s`<li>
                  <a href="/Manufacturer/${i.toLowerCase()}.html"
                    >${i}</a
                  >
                </li>`)}
          </ul>
        </section>
        <section class="shoe-section">
          <h2>Shoe Models</h2>
          <ul>
            ${o.map(i=>s`<li>
                  <a href="/shoes/${i.sku}">${i.name}</a>
                </li>`)}
          </ul>
        </section>
      </section>
    `}};b.styles=p`
    :host {
      display: block;
    }

    .collector-page {
      padding: 20px;
      font-family: "Montserrat", sans-serif;
    }

    .collection-header {
      text-align: center;
      margin-bottom: 20px;
    }

    .collection-header h1 {
      font-size: 2rem;
      font-weight: bold;
      color: var(--color-text);
    }

    .collection-header p {
      font-size: 1.2rem;
      color: var(--color-link);
    }

    .manufacturer-section,
    .shoe-section {
      margin-top: 20px;
    }

    h2 {
      font-family: "PT Serif", serif;
      font-weight: 700;
      margin-bottom: 15px;
      font-size: 1.8rem;
      color: var(--color-text);
    }

    ul {
      list-style: none;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 15px;
    }

    ul li {
      text-align: center;
      padding: 10px;
      border: 1px solid var(--color-link);
      border-radius: 8px;
      background-color: var(--color-background-card);
      color: var(--color-link);
      transition: background-color 0.3s ease, color 0.3s ease;
      cursor: pointer;
    }

    ul li:hover {
      background-color: var(--color-link);
      color: var(--color-button-text);
    }

    ul li a {
      text-decoration: none;
      color: inherit;
    }

    .loading {
      text-align: center;
      font-size: 1.5rem;
      color: var(--color-link);
      margin-top: 50px;
    }

    @media screen and (max-width: 768px) {
      ul {
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      }

      ul li {
        padding: 8px;
      }
    }

    @media screen and (max-width: 480px) {
      ul {
        grid-template-columns: 1fr;
      }
    }
  `;let d=b;$([g({attribute:"username",reflect:!0})],d.prototype,"username",2);$([j()],d.prototype,"collector",1);function _(t,e,o){switch(t[0]){case"collector/select":F(t[1],o).then(r=>e(c=>({...c,collector:r})));break;case"collector/save":L(t[1],o).then(()=>console.log("Collector saved successfully")).catch(r=>console.error("Failed to save collector:",r));break;case"shoe/select":O(t[1],o).then(r=>e(c=>({...c,shoe:r})));break;case"shoe/save":U(t[1],o).then(()=>console.log("Shoe saved successfully")).catch(r=>console.error("Failed to save shoe:",r));break;default:const a=t[0];throw new Error(`Unhandled message "${a}"`)}}function F(t,e){var a;console.log("Fetching collector data for:",t.username);const o={...n.headers(e),Authorization:`Bearer ${(a=n.headers(e).Authorization)==null?void 0:a.replace("Bearer ","")}`};return fetch(`/api/collector/${t.username}`,{headers:o}).then(r=>{if(!r.ok)throw new Error(`Error fetching collector data: ${r.status}`);return r.json()}).then(r=>(console.log("Collector data received:",r),r)).catch(r=>{console.error("Failed to fetch collector data:",r)})}function L(t,e){return fetch(`/api/collector/${t.username}`,{method:"PUT",headers:{"Content-Type":"application/json",...n.headers(e)},body:JSON.stringify(t.collector)}).then(o=>{if(!o.ok)throw new Error(`Failed to save collector: ${o.status}`)})}function O(t,e){return fetch(`/api/shoes/${t.sku}`,{headers:n.headers(e)}).then(o=>{if(!o.ok)throw new Error(`Failed to fetch shoe: ${o.status}`);return o.json()}).then(o=>o).catch(o=>{console.error("Error fetching shoe data:",o)})}function U(t,e){return fetch(`/api/shoes/${t.sku}`,{method:"PUT",headers:{"Content-Type":"application/json",...n.headers(e)},body:JSON.stringify(t.shoe)}).then(o=>{if(!o.ok)throw new Error(`Failed to save shoe: ${o.status}`)})}const N={};var J=Object.defineProperty,C=(t,e,o,a)=>{for(var r=void 0,c=t.length-1,i;c>=0;c--)(i=t[c])&&(r=i(e,o,r)||r);return r&&J(e,o,r),r};const y=class y extends u{connectedCallback(){super.connectedCallback(),this.sku&&this.fetchShoe(this.sku)}attributeChangedCallback(e,o,a){super.attributeChangedCallback(e,o,a),e==="sku"&&o!==a&&a&&this.fetchShoe(a)}async fetchShoe(e){try{const o=await fetch(`/api/shoes/${e}`,{headers:{"Content-Type":"application/json"}});if(!o.ok)throw new Error(`Failed to fetch shoe data: ${o.status}`);const a=await o.json();console.log("Fetched shoe data:",a),this.shoe=a}catch(o){console.error("Error fetching shoe data:",o),this.shoe=void 0}}render(){if(!this.shoe)return s`<p class="loading">Loading shoe data...</p>`;const{name:e,brand:o,colorway:a,releaseDate:r,featuredImage:c,price:i,inventory:f,categories:S=[],designer:l}=this.shoe;return s`
      <main class="shoe-page">
        <section class="shoe-header">
          <h1>${e}</h1>
          <p>${o} | ${a}</p>
          <p>Release Date: ${new Date(r).toLocaleDateString()}</p>
        </section>
        <section class="shoe-image">
          <img src="${c}" alt="${e}" />
        </section>
        <section class="shoe-details">
          <h2>Price</h2>
          <div class="info-item">Retail: $${i.originalPrice}</div>
          ${i.marketPrice?s`<div class="info-item">Market: $${i.marketPrice}</div>`:""}

          <h2>Inventory</h2>
          <div class="info-item">Production: ${f.productionNumber}</div>
          <div class="info-item">Pairs Sold: ${f.pairsSold}</div>
          ${f.isLimitedEdition?s`<div class="info-item">
                <strong>Limited Edition</strong>
              </div>`:""}

          <h2>Categories</h2>
          <div class="category-buttons">
            ${S.map(M=>s`<button class="category-btn">${M}</button>`)}
          </div>

          ${l?s`
                <h2>Designer</h2>
                <div class="info-item">${l.name}</div>
              `:""}

          ${l&&l.collaborators?s`
                <h2>Collaborators</h2>
                <div class="info-item">${l.collaborators.join(", ")}</div>
              `:""}
        </section>
      </main>
    `}};y.styles=p`
    :host {
      display: block;
      text-align: center;
      font-family: "Montserrat", sans-serif;
    }

    .shoe-page {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }

    .shoe-header {
      margin-bottom: 20px;
    }

    .shoe-header h1 {
      font-size: 2rem;
      font-weight: bold;
      color: var(--color-text);
    }

    .shoe-header p {
      font-size: 1.2rem;
      color: var(--color-link);
    }

    .shoe-image img {
      max-width: 100%;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .shoe-details {
      max-width: 800px;
      margin-top: 20px;
      text-align: left;
      width: 100%;
    }

    .shoe-details h2 {
      font-family: "PT Serif", serif;
      font-weight: 700;
      margin-bottom: 10px;
      font-size: 1.5rem;
      color: var(--color-text);
    }

    .info-item {
      display: inline-block;
      background-color: var(--color-background-card);
      padding: 10px 15px;
      border: 1px solid var(--color-link);
      border-radius: 8px;
      margin: 5px;
      color: var(--color-link);
    }

    .category-buttons {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .category-btn {
      background-color: var(--color-background-card);
      padding: 10px 20px;
      border: 1px solid var(--color-link);
      border-radius: 8px;
      color: var(--color-link);
      cursor: pointer;
      font-size: 1rem;
      text-align: center;
    }

    .category-btn:hover {
      background-color: var(--color-link);
      color: var(--color-background-card);
    }

    /* Add hover effect only for Collaborators section */
    .info-item:hover {
      background-color: var(--color-link);
      color: var(--color-background-card);
    }

    .category-btn:hover {
      background-color: var(--color-link);
      color: var(--color-background-card);
    }

    @media screen and (max-width: 768px) {
      .shoe-details ul {
        grid-template-columns: 1fr;
      }

      .shoe-page {
        padding: 10px;
      }
    }
  `;let h=y;C([g()],h.prototype,"sku");C([g({state:!0})],h.prototype,"shoe");class B extends u{render(){return s` <home-view></home-view> `}connectedCallback(){super.connectedCallback()}}const R=[{path:"/shoes/:sku",view:t=>s`
      <shoe-view sku=${t.sku}></shoe-view>
    `},{path:"/collector/:username",view:t=>s`
      <collector-view username=${t.username}></collector-view>
    `},{path:"/",redirect:"/app"},{path:"/app",view:()=>s` <home-view></home-view> `}];D({"mu-auth":n.Provider,"mu-history":T.Provider,"mu-store":class extends A.Provider{constructor(){super(_,N,"sole_collection:auth")}},"mu-switch":class extends I.Element{constructor(){super(R,"sole_collection:history","sole_collection:auth")}},"solecollection-app":B,"solecollection-header":m,"home-view":v,"collector-view":d,"shoe-view":h});
