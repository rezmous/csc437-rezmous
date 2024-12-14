import{r as p,i as u,x as s,e as M,n as h,V as z,a as m,d as P,h as I,s as N,_ as T}from"./property-Boso9Xnl.js";const y=class y extends p{connectedCallback(){super.connectedCallback(),this.applyDarkMode()}render(){return s`
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
    `}renderCollectionLink(){const a=this.getUserId();return a?s`
      <a id="collection-link" href="/collector/${a}">
        <span id="userid">${a}</span>'s Collection
      </a>
    `:s``}handleDarkModeToggle(a){const r=a.target.checked;M.relay(a,"darkmode:toggle",{isDarkMode:r}),this.updateDarkMode(r)}updateDarkMode(a){a?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),localStorage.setItem("darkMode",String(a))}applyDarkMode(){const a=this.isDarkModeEnabled();this.updateDarkMode(a)}isDarkModeEnabled(){return localStorage.getItem("darkMode")==="true"}handleAuth(a){a.preventDefault(),this.getUserId()&&(localStorage.removeItem("userid"),localStorage.removeItem("auth-token"),M.relay(a,"auth:signout")),window.location.href="/login.html"}getUserId(){return localStorage.getItem("userid")||""}getAuthText(){return this.getUserId()?"Sign Out":"Sign In"}};y.styles=u`
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
  `;let x=y;const $=class $ extends p{connectedCallback(){super.connectedCallback(),this.checkAuthStatus()}checkAuthStatus(){localStorage.getItem("auth-token")||(window.location.href="/login.html")}render(){return s`
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
    `}};$.styles=u`
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
  `;let v=$;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function J(t){return h({...t,state:!0,attribute:!1})}var L=Object.defineProperty,U=Object.getOwnPropertyDescriptor,C=(t,a,e,r)=>{for(var o=r>1?void 0:r?U(a,e):a,n=t.length-1,i;n>=0;n--)(i=t[n])&&(o=(r?i(a,e,o):i(o))||o);return r&&o&&L(a,e,o),o};const D=class D extends z{constructor(){super("sole_collection:model"),this.username=""}get collector(){return this.model.collector}attributeChangedCallback(a,e,r){super.attributeChangedCallback(a,e,r),a==="username"&&e!==r&&r&&(console.log(`Dispatching message to fetch collector data for: ${r}`),this.dispatchMessage(["collector/select",{username:r}]))}render(){if(!this.collector)return s`<p class="loading">Loading collector data...</p>`;const{username:a,shoeModels:e=[],totalValue:r=0,quantity:o=0,manufacturers:n=[]}=this.collector;return s`
      <div class="collector-card">
        <div class="collector-content">
          <h1 class="collector-title">${a}'s Collection</h1>
          <div class="comparison-row">
            <div>
              <span class="label">Total Value:</span>
              <span class="value">$${r.toLocaleString()}</span>
            </div>
            <div>
              <span class="label">Total Pairs:</span>
              <span class="value">${o}</span>
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
    `}};D.styles=u`
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
  `;let g=D;C([h({attribute:"username",reflect:!0})],g.prototype,"username",2);C([J()],g.prototype,"collector",1);function F(t,a,e){switch(t[0]){case"collector/select":B(t[1],e).then(o=>a(n=>({...n,collector:o})));break;case"shoe/select":E(t[1],e).then(o=>a(n=>({...n,shoe:o})));break;case"manufacturer/select":O(t[1],e).then(o=>a(n=>({...n,manufacturer:o})));break;case"designer/select":K(t[1],e).then(o=>a(n=>({...n,designer:o})));break;default:const r=t[0];throw new Error(`Unhandled message: ${r}`)}}function B({username:t},a){return fetch(`/api/collector/${t}`,{headers:m.headers(a)}).then(e=>e.ok?e.json():void 0).then(e=>(console.log("Fetched collector:",e),e))}function E({sku:t},a){return fetch(`/api/shoes/${t}`,{headers:m.headers(a)}).then(e=>e.ok?e.json():void 0).then(e=>(console.log("Fetched shoe:",e),e))}function O({name:t},a){return fetch(`/api/manufacturer/${t}`,{headers:m.headers(a)}).then(e=>e.ok?e.json():void 0).then(e=>(console.log("Fetched manufacturer:",e),e))}function K({name:t},a){return fetch(`/api/designer/${t}`,{headers:m.headers(a)}).then(e=>e.ok?e.json():void 0).then(e=>(console.log("Fetched designer:",e),e))}const q={};var R=Object.defineProperty,_=(t,a,e,r)=>{for(var o=void 0,n=t.length-1,i;n>=0;n--)(i=t[n])&&(o=i(a,e,o)||o);return o&&R(a,e,o),o};const A=class A extends p{connectedCallback(){super.connectedCallback(),this.sku&&this.fetchShoe(this.sku)}attributeChangedCallback(a,e,r){super.attributeChangedCallback(a,e,r),a==="sku"&&e!==r&&r&&this.fetchShoe(r)}async fetchShoe(a){try{const e=await fetch(`/api/shoes/${a}`,{headers:{"Content-Type":"application/json"}});if(!e.ok)throw new Error(`Failed to fetch shoe data: ${e.status}`);const r=await e.json();console.log("Fetched shoe data:",r),this.shoe=r}catch(e){console.error("Error fetching shoe data:",e),this.shoe=void 0}}render(){if(!this.shoe)return s`<p class="loading">Loading shoe data...</p>`;const{name:a,brand:e,colorway:r,releaseDate:o,featuredImage:n,price:i,inventory:b,designer:c}=this.shoe;return s`
      <div class="shoe-card">
        <img src="${n}" alt="${a}" class="shoe-image" />
        <div class="shoe-content">
          <h1 class="shoe-title">${a}</h1>
          <p class="shoe-meta">${e} | ${r}</p>
          <p class="shoe-meta">
            Release Date: ${new Date(o).toLocaleDateString()}
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
                <span class="value">${b.productionNumber}</span>
              </div>
              <div>
                <span class="label">Pairs Sold:</span>
                <span class="value">${b.pairsSold}</span>
              </div>
            </div>
            ${b.isLimitedEdition?s`<p><strong>Limited Edition</strong></p>`:""}
          </div>
        </div>
      </div>
    `}};A.styles=u`
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
  `;let f=A;_([h()],f.prototype,"sku");_([h({state:!0})],f.prototype,"shoe");var W=Object.defineProperty,S=(t,a,e,r)=>{for(var o=void 0,n=t.length-1,i;n>=0;n--)(i=t[n])&&(o=i(a,e,o)||o);return o&&W(a,e,o),o},l;const k=(l=class extends p{connectedCallback(){super.connectedCallback(),this.updateManufacturerData()}attributeChangedCallback(a,e,r){super.attributeChangedCallback(a,e,r),a==="manufacturerName"&&e!==r&&r&&this.updateManufacturerData()}updateManufacturerData(){this.manufacturerName?this.manufacturerData=l.manufacturers[this.manufacturerName]:this.manufacturerData=void 0}render(){if(!this.manufacturerData)return s`<p class="loading">
        No manufacturer selected or data not available.
      </p>`;const{name:a,logoUrl:e,description:r,designers:o}=this.manufacturerData;return s`
      <div class="manufacturer-card">
        <div class="manufacturer-header">
          <h1>${a}</h1>
          <img class="manufacturer-logo" src="${e}" alt="${a} Logo" />

          <p class="description">${r}</p>
        </div>
        <section class="designer-section">
          <h2>Designers</h2>
          <ul>
            ${o.map(n=>s`<li>
                  <a href="${n.link}">
                    <span>${n.name}</span>
                  </a>
                </li>`)}
          </ul>
        </section>
      </div>
    `}},l.manufacturers={nike:{name:"Nike",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",description:"Nike, Inc. is an American multinational corporation engaged in the design, development, manufacturing, and marketing of footwear, apparel, equipment, and accessories. Known for its iconic swoosh logo and tagline 'Just Do It.'",designers:[{name:"Tinker Hatfield",link:"/designer/tinker"},{name:"Travis Scott",link:"/designer/travis"},{name:"Virgil Abloh",link:"/designer/abloh"}]},jordan:{name:"Jordan Brand",logoUrl:"https://upload.wikimedia.org/wikipedia/en/3/37/Jumpman_logo.svg",description:"Jordan Brand, a subsidiary of Nike, is an American sportswear brand inspired by NBA Hall of Famer Michael Jordan. It is known for its signature Air Jordan sneakers and its influence on basketball culture and fashion.",designers:[{name:"Tinker Hatfield",link:"/designer/tinker"},{name:"Travis Scott",link:"/designer/travis"},{name:"Virgil Abloh",link:"/designer/abloh"}]},adidas:{name:"Adidas",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",description:"Adidas is a German multinational corporation that designs and manufactures shoes, clothing, and accessories. Known for its iconic three stripes, Adidas is a leader in the global sportswear industry, creating innovative designs and partnering with world-renowned designers and athletes.",designers:[{name:"Daniel Arsham",link:"/designer/arsham"},{name:"Jerry Lorenzo",link:"/designer/lorenzo"},{name:"Ye",link:"/designer/ye"}]}},l.styles=u`
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
  `,l);S([h()],k.prototype,"manufacturerName");S([h({state:!0})],k.prototype,"manufacturerData");let Y=k;var G=Object.defineProperty,j=(t,a,e,r)=>{for(var o=void 0,n=t.length-1,i;n>=0;n--)(i=t[n])&&(o=i(a,e,o)||o);return o&&G(a,e,o),o},d;const w=(d=class extends p{connectedCallback(){super.connectedCallback(),this.updateDesignerData()}attributeChangedCallback(a,e,r){super.attributeChangedCallback(a,e,r),a==="designerName"&&e!==r&&r&&this.updateDesignerData()}updateDesignerData(){this.designerName?this.designerData=d.designers[this.designerName]:this.designerData=void 0}render(){if(!this.designerData)return s`<p class="loading">
        No designer selected or data not available.
      </p>`;const{name:a,profileImageUrl:e,bio:r,manufacturers:o,shoeModels:n}=this.designerData;return s`
      <div class="designer-card">
        <div class="designer-header">
          <h1>${a}</h1>
          <img
            class="designer-profile"
            src="${e}"
            alt="${a} Profile Image"
          />
          <p class="bio">${r}</p>
        </div>
        <section class=" section manufacturer-section">
          <h2>Manufacturers</h2>
          <ul>
            ${o.map(i=>s`<li>
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
    `}},d.designers={abloh:{name:"Virgil Abloh",profileImageUrl:"https://res.cloudinary.com/dmubfrefi/image/private/s--4m5Pijb1--/c_crop,h_1079,w_1079,x_0,y_201/c_scale,w_3840/f_auto/q_auto/v1/dee-about-cms-prod-medias/e8e3218f-12bf-4861-bd20-e435cd2c814e/virgil-abloh-nike-the10-12-73201.jpg?_a=BAAAV6Bs",bio:"Virgil Abloh was a visionary designer and artist, known for founding the luxury streetwear brand Off-White and serving as the Artistic Director of Louis Vuitton's menswear. His work with Nike and Jordan Brand, including 'The Ten' collection, redefined modern sneaker culture.",manufacturers:[{name:"Nike",link:"/manufacturer/nike"},{name:"Jordan Brand",link:"/manufacturer/jordan"}],shoeModels:[{name:"Air Jordan 1",link:"/shoes/555088-610"},{name:"Nike Presto",link:"/shoes/AQ0818-100"}]},arsham:{name:"Daniel Arsham",profileImageUrl:"https://assets.mocomuseum.com/images_prod/transforms/artist/_2900x1631_crop_center-center_none/17080/Ams-Museum-Daniel-Arsham-Eroded-Patches.jpg",bio:"Daniel Arsham is an artist and designer known for his sculptural works and futuristic collaborations with Adidas and other major brands.",manufacturers:[{name:"Adidas",link:"/manufacturer/adidas"}],shoeModels:[{name:"Adidas Futurecraft 4D",link:"/shoes/F35155"}]},lorenzo:{name:"Jerry Lorenzo",profileImageUrl:"https://cdn.shopify.com/s/files/1/0408/9909/files/Jerry_Lorenzo_Editorial_-_Feature_-_April_13_2022_-_2.png?v=1649892505",bio:"Jerry Lorenzo is the founder of Fear of God and known for his high-fashion streetwear collaborations with Nike and other brands.",manufacturers:[{name:"Adidas",link:"/manufacturer/adidas"}],shoeModels:[{name:"Nike Air Fear of God Moc",link:"/shoes/AR4237-001"}]},tinker:{name:"Tinker Hatfield",profileImageUrl:"https://image.tmdb.org/t/p/original/wtASoljXtKda2qS1mu48X5j2cnf.jpg",bio:"Tinker Hatfield is a legendary designer known for his groundbreaking work on the Air Jordan series and other iconic Nike products.",manufacturers:[{name:"Nike",link:"/manufacturer/nike"}],shoeModels:[{name:"Air Jordan 1",link:"/shoes/555088-610"},{name:"Air Jordan 5",link:"/shoes/DB0732-001"}]},travis:{name:"Travis Scott",profileImageUrl:"https://www.billboard.com/wp-content/uploads/2021/11/travis-scott-astroworld-2021-2-billboard-1548-1636217991.png",bio:"Travis Scott is a musician and designer collaborating with Nike and Jordan Brand to create unique and culturally impactful designs.",manufacturers:[{name:"Nike",link:"/manufacturer/nike"},{name:"Jordan Brand",link:"/manufacturer/jordan"}],shoeModels:[{name:"Air Jordan 1",link:"/shoes/555088-610"}]},ye:{name:"Ye (Kanye West)",profileImageUrl:"https://gray-wtok-prod.gtv-cdn.com/resizer/v2/SAXZJAIOSRF4NEEQHDUT4KFIRU.png?auth=6ae09f4cc6f2ba0b576c9f223bc2c49aea8d6e7b735b106ffb75a990c0939d87&width=800&height=450&smart=true",bio:"Ye, formerly known as Kanye West, revolutionized the sneaker industry with his Yeezy brand and collaborations with Adidas.",manufacturers:[{name:"Adidas",link:"/manufacturer/adidas"}],shoeModels:[{name:"Yeezy Boost 350 V2",link:"/shoes/CP9654"}]}},d.styles=u`
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
  `,d);j([h()],w.prototype,"designerName");j([h({state:!0})],w.prototype,"designerData");let H=w;class X extends p{render(){return s` <home-view></home-view> `}connectedCallback(){super.connectedCallback()}}const Q=[{path:"/shoes/:sku",view:t=>s`
      <shoe-view sku=${t.sku}></shoe-view>
    `},{path:"/collector/:username",view:t=>s`
      <collector-view username=${t.username}></collector-view>
    `},{path:"/manufacturer/:name",view:t=>s`
      <manufacturer-view manufacturerName=${t.name}></manufacturer-view>
    `},{path:"/designer/:name",view:t=>s`
      <designer-view designerName=${t.name}></designer-view>
    `},{path:"/",redirect:"/app"},{path:"/app",view:()=>s` <home-view></home-view> `}];P({"mu-auth":m.Provider,"mu-history":I.Provider,"mu-store":class extends N.Provider{constructor(){super(F,q,"sole_collection:auth")}},"mu-switch":class extends T.Element{constructor(){super(Q,"sole_collection:history","sole_collection:auth")}},"solecollection-app":X,"solecollection-header":x,"home-view":v,"collector-view":g,"designer-view":H,"manufacturer-view":Y,"shoe-view":f});
