import{r as m,i as f,x as s,e as A,n as h,V as N,a as p,f as I,d as T,h as z,s as E,_ as J}from"./property-hMr0XSj5.js";const M=class M extends m{connectedCallback(){super.connectedCallback(),this.applyDarkMode()}render(){return s`
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
    `}renderCollectionLink(){const o=this.getUserId();return o?s`
      <a id="collection-link" href="/collector/${o}">
        <span id="userid">${o}</span>'s Collection
      </a>
    `:s``}handleDarkModeToggle(o){const t=o.target.checked;A.relay(o,"darkmode:toggle",{isDarkMode:t}),this.updateDarkMode(t)}updateDarkMode(o){o?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),localStorage.setItem("darkMode",String(o))}applyDarkMode(){const o=this.isDarkModeEnabled();this.updateDarkMode(o)}isDarkModeEnabled(){return localStorage.getItem("darkMode")==="true"}handleAuth(o){o.preventDefault(),this.getUserId()&&(localStorage.removeItem("userid"),localStorage.removeItem("auth-token"),A.relay(o,"auth:signout")),window.location.href="/login.html"}getUserId(){return localStorage.getItem("userid")||""}getAuthText(){return this.getUserId()?"Sign Out":"Sign In"}};M.styles=f`
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
  `;let v=M;const S=class S extends m{connectedCallback(){super.connectedCallback(),this.checkAuthStatus()}checkAuthStatus(){localStorage.getItem("auth-token")||(window.location.href="/login.html")}render(){return s`
      <main class="page">
        <section class="manufacturer-cards">
          <div class="card">
            <h2>Nike</h2>
            <svg class="icon brand-logo">
              <use href="/assets/logo.svg#icon-nikelogo"></use>
            </svg>
            <a href="/manufacturer/nike">Explore Nike</a>
          </div>
          <div class="card">
            <h2>Jordan Brand</h2>
            <svg class="icon brand-logo">
              <use href="/assets/logo.svg#icon-jordanlogo"></use>
            </svg>
            <a href="manufacturer/jordan">Explore Jordan</a>
          </div>
          <div class="card">
            <h2>Adidas</h2>
            <svg class="icon brand-logo">
              <use href="/assets/logo.svg#icon-adidaslogo"></use>
            </svg>
            <a href="manufacturer/adidas">Explore Adidas</a>
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
    `}};S.styles=f`
    :host {
      display: block;
      background-color: var(--color-background-page);
    }

    body {
      color: var(--color-text);
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
  `;let k=S;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(r){return h({...r,state:!0,attribute:!1})}var F=Object.defineProperty,L=Object.getOwnPropertyDescriptor,C=(r,o,e,t)=>{for(var a=t>1?void 0:t?L(o,e):o,n=r.length-1,i;n>=0;n--)(i=r[n])&&(a=(t?i(o,e,a):i(a))||a);return t&&a&&F(o,e,a),a};const D=class D extends N{constructor(){super("sole_collection:model"),this.username=""}get collector(){return this.model.collector}attributeChangedCallback(o,e,t){super.attributeChangedCallback(o,e,t),o==="username"&&e!==t&&t&&(console.log(`Dispatching message to fetch collector data for: ${t}`),this.dispatchMessage(["collector/select",{username:t}]))}render(){if(!this.collector)return s`<p class="loading">Loading collector data...</p>`;const{username:o,shoeModels:e=[],totalValue:t=0,quantity:a=0,manufacturers:n=[]}=this.collector;return s`
      <div class="collector-card">
        <div class="collector-content">
          <h1 class="collector-title">${o}'s Collection</h1>
          <div class="comparison-row">
            <div>
              <span class="label">Total Value:</span>
              <span class="value">$${t.toLocaleString()}</span>
            </div>
            <div>
              <span class="label">Total Pairs:</span>
              <span class="value">${a}</span>
            </div>
          </div>
          <div class="manufacturer-section">
            <h2>Manufacturers</h2>
            <ul>
              ${n.map(i=>s`
                  <li>
                    <a href="/manufacturer/${i.toLowerCase()}"
                      >${i}</a
                    >
                  </li>
                `)}
            </ul>
          </div>
          <div class="shoe-section">
            <h2>Shoe Models</h2>
            <ul>
              ${e.map(i=>s`
                  <li>
                    <a href="/shoes/${i.sku}">${i.name}</a>
                  </li>
                `)}
            </ul>
          </div>
        </div>
      </div>
    `}};D.styles=f`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--color-background-page);
      padding: 20px;
      box-sizing: border-box;
    }

    .collector-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: var(--color-background-card);
      border: 1px solid var(--color-accent);
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      max-width: 800px;
      width: 100%;
      padding: 10px;
      gap: 10px;
    }

    .collector-content {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
    }

    .collector-title {
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      color: var(--color-text);
      margin-bottom: 8px;
    }

    .comparison-row {
      display: flex;
      justify-content: space-between;
      gap: 8px;
    }

    .comparison-row > div {
      flex: 1;
      text-align: center;
      border: 1px solid var(--color-accent);
      border-radius: 8px;
      padding: 12px;
      background-color: var(--color-background-page);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .comparison-row .label {
      font-size: 1.8rem;
      font-weight: bold;
      color: var(--color-accent);
    }

    .comparison-row .value {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--color-text);
      display: block;
      margin-top: 5px;
    }

    .manufacturer-section,
    .shoe-section {
      margin-top: 15px;
    }

    h2 {
      font-family: "PT Serif", serif;
      font-weight: bold;
      font-size: 1.2rem;
      color: var(--color-text);
      margin-bottom: 10px;
    }

    ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
    }

    ul li {
      text-align: center;
      padding: 10px;
      border: 1px solid var(--color-accent);
      border-radius: 8px;
      background-color: var(--color-background-card);
      color: var(--color-link);
      cursor: pointer;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    ul li:hover {
      background-color: var(--color-link);
      color: var(--color-button-text);
    }

    ul li a {
      text-decoration: none;
      color: inherit;
      font-weight: bold;
    }

    @media screen and (max-width: 768px) {
      .comparison-row {
        flex-direction: column;
        gap: 10px;
      }

      ul {
        grid-template-columns: 1fr;
      }
    }
  `;let b=D;C([h({attribute:"username",reflect:!0})],b.prototype,"username",2);C([P()],b.prototype,"collector",1);function U(r,o,e){switch(r[0]){case"collector/select":B(r[1],e).then(a=>o(n=>({...n,collector:a})));break;case"shoe/select":q(r[1],e).then(a=>o(n=>({...n,shoe:a})));break;case"manufacturer/select":K(r[1],e).then(a=>o(n=>({...n,manufacturer:a})));break;case"designer/select":R(r[1],e).then(a=>o(n=>({...n,designer:a})));break;case"shoe/add":console.log("Adding shoe with payload:",r[1].shoe),W(r[1],e).then(()=>{console.log("Shoe added successfully.");const{onSuccess:a}=r[1];a&&a()}).catch(a=>{console.error("Error adding shoe:",a);const{onFailure:n}=r[1];n&&n(a)});break;case"shoes/update":console.log("Processing shoe/update message:",r[1]),O(r[1],e).then(a=>{console.log("Shoe updated on server:",a),o(i=>({...i,shoe:a}));const{onSuccess:n}=r[1];n&&n()}).catch(a=>{console.error("Error in shoe/update:",a);const{onFailure:n}=r[1];n&&n(a)});break;default:const t=r[0];throw new Error(`Unhandled message: ${t}`)}}async function O(r,o){const e=await fetch(`/api/shoes/${r.sku}`,{method:"PUT",headers:{"Content-Type":"application/json",...p.headers(o)},body:JSON.stringify(r.shoe)});if(!e.ok)throw new Error(`Failed to update shoe: ${e.status}`);return e.json()}function B({username:r},o){return fetch(`/api/collector/${r}`,{headers:p.headers(o)}).then(e=>e.ok?e.json():void 0).then(e=>(console.log("Fetched collector:",e),e))}function q({sku:r},o){return fetch(`/api/shoes/${r}`,{headers:p.headers(o)}).then(e=>e.ok?e.json():void 0).then(e=>(console.log("Fetched shoe:",e),e))}function K({name:r},o){return fetch(`/api/manufacturer/${r}`,{headers:p.headers(o)}).then(e=>e.ok?e.json():void 0).then(e=>(console.log("Fetched manufacturer:",e),e))}function R({name:r},o){return fetch(`/api/designer/${r}`,{headers:p.headers(o)}).then(e=>e.ok?e.json():void 0).then(e=>(console.log("Fetched designer:",e),e))}function W(r,o){return fetch("/api/shoes",{method:"POST",headers:{"Content-Type":"application/json",...p.headers(o)},body:JSON.stringify(r.shoe)}).then(e=>{if(e.status!==201)throw new Error("Failed to add shoe")})}const Y={};var G=Object.defineProperty,w=(r,o,e,t)=>{for(var a=void 0,n=r.length-1,i;n>=0;n--)(i=r[n])&&(a=i(o,e,a)||a);return a&&G(o,e,a),a};const x=class x extends m{constructor(){super(...arguments),this.editMode=!1}toggleEditMode(){this.editMode=!this.editMode}connectedCallback(){super.connectedCallback(),this.sku&&this.fetchShoe(this.sku)}attributeChangedCallback(o,e,t){super.attributeChangedCallback(o,e,t),o==="sku"&&e!==t&&t&&this.fetchShoe(t)}async fetchShoe(o){try{const e=await fetch(`/api/shoes/${o}`,{headers:{"Content-Type":"application/json"}});if(!e.ok)throw new Error(`Failed to fetch shoe data: ${e.status}`);const t=await e.json();console.log("Fetched shoe data:",t),this.shoe=t}catch(e){console.error("Error fetching shoe data:",e),this.shoe=void 0}}async handleEditSubmit(o){var a,n,i,l;o.preventDefault();const e=o.target,t={price:{originalPrice:parseFloat((a=e.elements.namedItem("originalPrice"))==null?void 0:a.value),marketPrice:parseFloat((n=e.elements.namedItem("marketPrice"))==null?void 0:n.value)},inventory:{productionNumber:parseInt((i=e.elements.namedItem("productionNumber"))==null?void 0:i.value),pairsSold:parseInt((l=e.elements.namedItem("pairsSold"))==null?void 0:l.value)}};try{const c=await fetch(`/api/shoes/${this.sku}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({...this.shoe,...t})});if(!c.ok)throw new Error(`Failed to update shoe: ${c.status}`);this.shoe=await c.json(),this.editMode=!1}catch(c){console.error("Error updating shoe:",c)}}render(){if(!this.shoe)return s`<p class="loading">Loading shoe data...</p>`;const{name:o,brand:e,colorway:t,releaseDate:a,featuredImage:n,price:i,inventory:l,designer:c}=this.shoe;return s`
      <div class="shoe-card">
        <img src="${n}" alt="${o}" class="shoe-image" />
        <div class="shoe-content">
          ${this.editMode?s`
                <form @submit=${this.handleEditSubmit}>
                  <h2>Edit Shoe Details</h2>
                  <label>
                    Original Price:
                    <input
                      type="number"
                      name="originalPrice"
                      value="${i.originalPrice}"
                      required
                    />
                  </label>
                  <label>
                    Market Price:
                    <input
                      type="number"
                      name="marketPrice"
                      value="${i.marketPrice||""}"
                    />
                  </label>
                  <label>
                    Production Number:
                    <input
                      type="number"
                      name="productionNumber"
                      value="${l.productionNumber}"
                      required
                    />
                  </label>
                  <label>
                    Pairs Sold:
                    <input
                      type="number"
                      name="pairsSold"
                      value="${l.pairsSold}"
                      required
                    />
                  </label>
                  <div class="button-group">
                    <button type="submit" class="button save">Save</button>
                    <button
                      type="button"
                      @click=${this.toggleEditMode}
                      class="button cancel"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              `:s`
                <h1 class="shoe-title">${o}</h1>
                <p class="shoe-meta">${e} | ${t}</p>
                <p class="shoe-meta">
                  Release Date: ${new Date(a).toLocaleDateString()}
                </p>

                <div class="designer-collaborator-row">
                  <div class="designer-section">
                    <h2>Designer</h2>
                    <a
                      href="/designer/${c==null?void 0:c.name.toLowerCase()}"
                      class="button"
                    >
                      ${c==null?void 0:c.name}
                    </a>
                  </div>
                  ${c!=null&&c.collaborators?s`
                        <div class="collaborator-section">
                          <h2>Collaborators</h2>
                          <a
                            href="/manufacturer/${c.collaborators.join(", ").toLowerCase()}"
                            class="button"
                          >
                            ${c.collaborators.join(", ")}
                          </a>
                        </div>
                      `:""}
                </div>

                <div class="shoe-section">
                  <h2>Price</h2>
                  <div class="comparison-row">
                    <div>
                      <span class="label">Retail:</span>
                      <span class="value">$${i.originalPrice}</span>
                    </div>
                    ${i.marketPrice?s`
                          <div>
                            <span class="label">Market:</span>
                            <span class="value">$${i.marketPrice}</span>
                          </div>
                        `:""}
                  </div>
                </div>

                <div class="shoe-section">
                  <h2>Inventory</h2>
                  <div class="comparison-row">
                    <div>
                      <span class="label">Production:</span>
                      <span class="value">${l.productionNumber}</span>
                    </div>
                    <div>
                      <span class="label">Pairs Sold:</span>
                      <span class="value">${l.pairsSold}</span>
                    </div>
                  </div>
                  ${l.isLimitedEdition?s`<p><strong>Limited Edition</strong></p>`:""}
                </div>

                <button class="button edit" @click=${this.toggleEditMode}>
                  Edit
                </button>
              `}
        </div>
      </div>
    `}};x.uses={"mu-form":I.Element},x.styles=f`
    :host {
      display: block;
      font-family: "Montserrat", sans-serif;
      background-color: var(--color-background-page);
      padding: 20px;
      color: var(--color-text);
    }

    .shoe-card {
      display: flex;
      align-items: flex-start;
      background-color: var(--color-background-card);
      border: 1px solid var(--color-accent);
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      max-width: 800px;
      margin: 0 auto;
      padding: 15px;
      gap: 20px;
    }

    .shoe-image {
      flex: 1 1 40%;
      max-width: 40%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      object-fit: contain;
    }

    .shoe-content {
      flex: 1 1 55%;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .shoe-title {
      font-size: 1.6rem;
      font-weight: bold;
      margin-bottom: 8px;
      color: var(--color-text);
    }

    .shoe-meta {
      font-size: 0.9rem;
      color: var(--color-link);
      margin: 3px 0;
    }

    .designer-collaborator-row {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }

    .designer-section,
    .collaborator-section {
      flex: 1;
      text-align: center;
    }

    .designer-section h2,
    .collaborator-section h2 {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 5px;
      color: var(--color-link);
    }

    .shoe-section {
      margin-top: 10px;
    }

    .shoe-section h2 {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 5px;
      color: var(--color-link);
    }

    .comparison-row {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      margin-top: 8px;
    }

    .comparison-row > div {
      flex: 1;
      text-align: center;
      border: 1px solid var(--color-accent);
      border-radius: 8px;
      padding: 10px;
      background-color: var(--color-background-page);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .comparison-row .label {
      font-size: 0.9rem;
      font-weight: bold;
      color: var(--color-accent);
    }

    .comparison-row .value {
      font-size: 1rem;
      font-weight: bold;
      color: var(--color-text);
      display: block;
      margin-top: 5px;
    }

    .button {
      display: inline-block;
      text-align: center;
      padding: 8px 12px;
      background-color: var(--color-link);
      color: var(--color-background-page);
      text-decoration: none;
      border-radius: 8px;
      font-size: 0.9rem;
      font-weight: bold;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    .button:hover {
      background-color: var(--color-accent);
      color: var(--color-background-card);
    }

    @media screen and (max-width: 768px) {
      .shoe-card {
        flex-direction: column;
      }

      .shoe-image {
        max-width: 200px;
        object-fit: cover;
      }

      .designer-collaborator-row {
        flex-direction: column;
        gap: 10px;
      }

      .comparison-row {
        flex-direction: column;
        gap: 10px;
      }
    }

    .shoe-card form label {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }

    .shoe-card form input {
      padding: 8px;
      margin-top: 5px;
      border: 1px solid var(--color-accent);
      border-radius: 5px;
    }

    .shoe-card form button {
      margin-top: 10px;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      background-color: var(--color-link);
      color: white;
      cursor: pointer;
    }

    .shoe-card form button:hover {
      background-color: var(--color-accent);
    }
  `;let g=x;w([h()],g.prototype,"sku");w([h({state:!0})],g.prototype,"shoe");w([P()],g.prototype,"editMode");var H=Object.defineProperty,j=(r,o,e,t)=>{for(var a=void 0,n=r.length-1,i;n>=0;n--)(i=r[n])&&(a=i(o,e,a)||a);return a&&H(o,e,a),a},d;const y=(d=class extends m{connectedCallback(){super.connectedCallback(),this.updateManufacturerData()}attributeChangedCallback(o,e,t){super.attributeChangedCallback(o,e,t),o==="manufacturerName"&&e!==t&&t&&this.updateManufacturerData()}updateManufacturerData(){this.manufacturerName?this.manufacturerData=d.manufacturers[this.manufacturerName]:this.manufacturerData=void 0}render(){if(!this.manufacturerData)return s`<p class="loading">
        No manufacturer selected or data not available.
      </p>`;const{name:o,logoUrl:e,description:t,designers:a}=this.manufacturerData;return s`
      <div class="manufacturer-card">
        <div class="manufacturer-header">
          <h1>${o}</h1>
          <img class="manufacturer-logo" src="${e}" alt="${o} Logo" />

          <p class="description">${t}</p>
        </div>
        <section class="designer-section">
          <h2>Designers</h2>
          <ul>
            ${a.map(n=>s`<li>
                  <a href="${n.link}">
                    <span>${n.name}</span>
                  </a>
                </li>`)}
          </ul>
        </section>
      </div>
    `}},d.manufacturers={nike:{name:"Nike",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",description:"Nike, Inc. is an American multinational corporation engaged in the design, development, manufacturing, and marketing of footwear, apparel, equipment, and accessories. Known for its iconic swoosh logo and tagline 'Just Do It.'",designers:[{name:"Tinker Hatfield",link:"/designer/tinker"},{name:"Travis Scott",link:"/designer/travis"},{name:"Virgil Abloh",link:"/designer/abloh"}]},jordan:{name:"Jordan Brand",logoUrl:"https://upload.wikimedia.org/wikipedia/en/3/37/Jumpman_logo.svg",description:"Jordan Brand, a subsidiary of Nike, is an American sportswear brand inspired by NBA Hall of Famer Michael Jordan. It is known for its signature Air Jordan sneakers and its influence on basketball culture and fashion.",designers:[{name:"Tinker Hatfield",link:"/designer/tinker"},{name:"Travis Scott",link:"/designer/travis"},{name:"Virgil Abloh",link:"/designer/abloh"}]},adidas:{name:"Adidas",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",description:"Adidas is a German multinational corporation that designs and manufactures shoes, clothing, and accessories. Known for its iconic three stripes, Adidas is a leader in the global sportswear industry, creating innovative designs and partnering with world-renowned designers and athletes.",designers:[{name:"Daniel Arsham",link:"/designer/arsham"},{name:"Jerry Lorenzo",link:"/designer/lorenzo"},{name:"Ye",link:"/designer/ye"}]}},d.styles=f`
    :host {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      background-color: var(--color-background-page);
      padding-top: 40px;
      box-sizing: border-box;
      font-family: "Montserrat", sans-serif;
      overflow: hidden;
    }

    .manufacturer-card {
      max-width: 800px;
      width: 90%;
      padding: 20px;
      border: 1px solid var(--color-accent);
      border-radius: 10px;
      background-color: var(--color-background-card);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      box-sizing: border-box;
      overflow: hidden;
    }

    .manufacturer-header {
      margin-bottom: 20px;
    }

    .manufacturer-header img {
      max-width: 150px;
      margin: 0 auto 15px;
      display: block;
    }

    .manufacturer-header h1 {
      font-family: "PT Serif", serif;
      font-weight: 700;
      font-size: 2rem;
      margin: 10px 0;
      color: var(--color-text);
    }

    .manufacturer-header p {
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      font-size: 1rem;
      color: var(--color-link);
      margin-bottom: 20px;
    }

    .designer-section {
      margin-top: 20px;
    }

    .designer-section h2 {
      font-family: "PT Serif", serif;
      font-weight: 700;
      font-size: 1.5rem;
      margin-bottom: 15px;
      color: var(--color-link);
    }

    .designer-section ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
    }

    .designer-section ul li {
      display: inline-block;
      background-color: var(--color-background-page);
      border: 1px solid var(--color-accent);
      border-radius: 5px;
      padding: 10px 20px;
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      color: var(--color-link);
      text-align: center;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .designer-section ul li:hover {
      background-color: var(--color-link);
      color: var(--color-background-page);
    }

    .designer-section ul li a {
      color: inherit;
      text-decoration: none;
    }

    figure {
      display: flex;
      justify-content: center;
      margin-bottom: 15px;
    }

    figure img {
      max-width: 200px;
      height: auto;
      object-fit: contain;
    }

    @media (max-width: 768px) {
      .manufacturer-card {
        width: 80%;
      }
    }

    @media (max-width: 480px) {
      .manufacturer-card {
        width: 90%;
      }
    }
  `,d);j([h()],y.prototype,"manufacturerName");j([h({state:!0})],y.prototype,"manufacturerData");let X=y;var Q=Object.defineProperty,_=(r,o,e,t)=>{for(var a=void 0,n=r.length-1,i;n>=0;n--)(i=r[n])&&(a=i(o,e,a)||a);return a&&Q(o,e,a),a},u;const $=(u=class extends m{connectedCallback(){super.connectedCallback(),this.updateDesignerData()}attributeChangedCallback(o,e,t){super.attributeChangedCallback(o,e,t),o==="designerName"&&e!==t&&t&&this.updateDesignerData()}updateDesignerData(){this.designerName?this.designerData=u.designers[this.designerName]:this.designerData=void 0}render(){if(!this.designerData)return s`<p class="loading">
        No designer selected or data not available.
      </p>`;const{name:o,profileImageUrl:e,bio:t,manufacturers:a,shoeModels:n}=this.designerData;return s`
      <div class="designer-card">
        <div class="designer-header">
          <h1>${o}</h1>
          <img
            class="designer-profile"
            src="${e}"
            alt="${o} Profile Image"
          />
          <p class="bio">${t}</p>
        </div>
        <section class=" section manufacturer-section">
          <h2>Manufacturers</h2>
          <ul>
            ${a.map(i=>s`<li>
                  <a href="${i.link}">
                    <span>${i.name}</span>
                  </a>
                </li>`)}
          </ul>
        </section>
        <section class=" section shoe-models-section">
          <h2>Shoe Models</h2>
          <ul>
            ${n.map(i=>s`
                <li>
                  <a href="${i.link}">
                    <span>${i.name}</span>
                  </a>
                </li>
              `)}
          </ul>
        </section>
      </div>
    `}},u.designers={abloh:{name:"Virgil Abloh",profileImageUrl:"https://res.cloudinary.com/dmubfrefi/image/private/s--4m5Pijb1--/c_crop,h_1079,w_1079,x_0,y_201/c_scale,w_3840/f_auto/q_auto/v1/dee-about-cms-prod-medias/e8e3218f-12bf-4861-bd20-e435cd2c814e/virgil-abloh-nike-the10-12-73201.jpg?_a=BAAAV6Bs",bio:"Virgil Abloh was a visionary designer and artist, known for founding the luxury streetwear brand Off-White and serving as the Artistic Director of Louis Vuitton's menswear. His work with Nike and Jordan Brand, including 'The Ten' collection, redefined modern sneaker culture.",manufacturers:[{name:"Nike",link:"/manufacturer/nike"},{name:"Jordan Brand",link:"/manufacturer/jordan"}],shoeModels:[{name:"Air Jordan 1",link:"/shoes/555088-610"},{name:"Nike Presto",link:"/shoes/AQ0818-100"}]},arsham:{name:"Daniel Arsham",profileImageUrl:"https://assets.mocomuseum.com/images_prod/transforms/artist/_2900x1631_crop_center-center_none/17080/Ams-Museum-Daniel-Arsham-Eroded-Patches.jpg",bio:"Daniel Arsham is an artist and designer known for his sculptural works and futuristic collaborations with Adidas and other major brands.",manufacturers:[{name:"Adidas",link:"/manufacturer/adidas"}],shoeModels:[{name:"Adidas Futurecraft 4D",link:"/shoes/F35155"}]},lorenzo:{name:"Jerry Lorenzo",profileImageUrl:"https://cdn.shopify.com/s/files/1/0408/9909/files/Jerry_Lorenzo_Editorial_-_Feature_-_April_13_2022_-_2.png?v=1649892505",bio:"Jerry Lorenzo is the founder of Fear of God and known for his high-fashion streetwear collaborations with Nike and other brands.",manufacturers:[{name:"Adidas",link:"/manufacturer/adidas"}],shoeModels:[{name:"Nike Air Fear of God Moc",link:"/shoes/AR4237-001"}]},tinker:{name:"Tinker Hatfield",profileImageUrl:"https://image.tmdb.org/t/p/original/wtASoljXtKda2qS1mu48X5j2cnf.jpg",bio:"Tinker Hatfield is a legendary designer known for his groundbreaking work on the Air Jordan series and other iconic Nike products.",manufacturers:[{name:"Nike",link:"/manufacturer/nike"}],shoeModels:[{name:"Air Jordan 1",link:"/shoes/555088-610"},{name:"Air Jordan 5",link:"/shoes/DB0732-001"}]},travis:{name:"Travis Scott",profileImageUrl:"https://www.billboard.com/wp-content/uploads/2021/11/travis-scott-astroworld-2021-2-billboard-1548-1636217991.png",bio:"Travis Scott is a musician and designer collaborating with Nike and Jordan Brand to create unique and culturally impactful designs.",manufacturers:[{name:"Nike",link:"/manufacturer/nike"},{name:"Jordan Brand",link:"/manufacturer/jordan"}],shoeModels:[{name:"Air Jordan 1",link:"/shoes/555088-610"}]},ye:{name:"Ye (Kanye West)",profileImageUrl:"https://gray-wtok-prod.gtv-cdn.com/resizer/v2/SAXZJAIOSRF4NEEQHDUT4KFIRU.png?auth=6ae09f4cc6f2ba0b576c9f223bc2c49aea8d6e7b735b106ffb75a990c0939d87&width=800&height=450&smart=true",bio:"Ye, formerly known as Kanye West, revolutionized the sneaker industry with his Yeezy brand and collaborations with Adidas.",manufacturers:[{name:"Adidas",link:"/manufacturer/adidas"}],shoeModels:[{name:"Yeezy Boost 350 V2",link:"/shoes/CP9654"}]}},u.styles=f`
    :host {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      background-color: var(--color-background-page);
      padding-top: 40px;
      box-sizing: border-box;
      font-family: "Montserrat", sans-serif;
      overflow: hidden;
    }

    .designer-card {
      max-width: 800px;
      width: 90%;
      padding: 20px;
      border: 1px solid var(--color-accent);
      border-radius: 10px;
      background-color: var(--color-background-card);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      box-sizing: border-box;
      overflow: hidden;
    }

    .designer-header {
      margin-bottom: 20px;
    }

    .designer-header img {
      max-width: 150px;
      margin: 0 auto 15px;
      display: block;
      border-radius: 50%;
      object-fit: cover;
    }

    .designer-header h1 {
      font-family: "PT Serif", serif;
      font-weight: 700;
      font-size: 2rem;
      margin: 10px 0;
      color: var(--color-text);
    }

    .designer-header p {
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      font-size: 1rem;
      color: var(--color-link);
      margin-bottom: 20px;
    }

    .section {
      margin-top: 20px;
    }

    .section h2 {
      font-family: "PT Serif", serif;
      font-weight: 700;
      font-size: 1.5rem;
      margin-bottom: 15px;
      color: var(--color-link);
    }

    .section ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
    }

    .section ul li {
      display: inline-block;
      background-color: var(--color-background-page);
      border: 1px solid var(--color-accent);
      border-radius: 5px;
      padding: 10px 20px;
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      color: var(--color-link);
      text-align: center;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .section ul li:hover {
      background-color: var(--color-link);
      color: var(--color-background-page);
    }

    .section ul li a {
      color: inherit;
      text-decoration: none;
    }

    @media (max-width: 768px) {
      .designer-card {
        width: 80%;
      }
    }

    @media (max-width: 480px) {
      .designer-card {
        width: 90%;
      }
    }
  `,u);_([h()],$.prototype,"designerName");_([h({state:!0})],$.prototype,"designerData");let Z=$;class V extends m{render(){return s` <home-view></home-view> `}connectedCallback(){super.connectedCallback()}}const ee=[{path:"/shoes/:sku",view:r=>s`
      <shoe-view sku=${r.sku}></shoe-view>
    `},{path:"/collector/:username",view:r=>s`
      <collector-view username=${r.username}></collector-view>
    `},{path:"/manufacturer/:name",view:r=>s`
      <manufacturer-view manufacturerName=${r.name}></manufacturer-view>
    `},{path:"/designer/:name",view:r=>s`
      <designer-view designerName=${r.name}></designer-view>
    `},{path:"/",redirect:"/app"},{path:"/app",view:()=>s` <home-view></home-view> `}];T({"mu-auth":p.Provider,"mu-history":z.Provider,"mu-store":class extends E.Provider{constructor(){super(U,Y,"sole_collection:auth")}},"mu-switch":class extends J.Element{constructor(){super(ee,"sole_collection:history","sole_collection:auth")}},"solecollection-app":V,"solecollection-header":v,"home-view":k,"collector-view":b,"designer-view":Z,"manufacturer-view":X,"shoe-view":g});
