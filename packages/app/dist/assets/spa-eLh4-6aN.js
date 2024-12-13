import{r as p,i as f,x as i,e as D,n as d,V as T,a as l,d as I,h as j,s as z,_ as N}from"./property-Boso9Xnl.js";const b=class b extends p{connectedCallback(){super.connectedCallback(),this.applyDarkMode()}render(){return i`
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
    `}renderCollectionLink(){const e=this.getUserId();return e?i`
      <a id="collection-link" href="/collector/${e}">
        <span id="userid">${e}</span>'s Collection
      </a>
    `:i``}handleDarkModeToggle(e){const a=e.target.checked;D.relay(e,"darkmode:toggle",{isDarkMode:a}),this.updateDarkMode(a)}updateDarkMode(e){e?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),localStorage.setItem("darkMode",String(e))}applyDarkMode(){const e=this.isDarkModeEnabled();this.updateDarkMode(e)}isDarkModeEnabled(){return localStorage.getItem("darkMode")==="true"}handleAuth(e){e.preventDefault(),this.getUserId()&&(localStorage.removeItem("userid"),localStorage.removeItem("auth-token"),D.relay(e,"auth:signout")),window.location.href="/login.html"}getUserId(){return localStorage.getItem("userid")||""}getAuthText(){return this.getUserId()?"Sign Out":"Sign In"}};b.styles=f`
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
  `;let v=b;const w=class w extends p{connectedCallback(){super.connectedCallback(),this.checkAuthStatus()}checkAuthStatus(){localStorage.getItem("auth-token")||(window.location.href="/login.html")}render(){return i`
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
    `}};w.styles=f`
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
  `;let x=w;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(t){return d({...t,state:!0,attribute:!1})}var L=Object.defineProperty,E=Object.getOwnPropertyDescriptor,C=(t,e,o,a)=>{for(var r=a>1?void 0:a?E(e,o):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=(a?s(e,o,r):s(r))||r);return a&&r&&L(e,o,r),r};const y=class y extends T{constructor(){super(...arguments),this.username=""}get collector(){return this.model.collector}attributeChangedCallback(e,o,a){super.attributeChangedCallback(e,o,a),e==="username"&&o!==a&&a&&(console.log(`Fetching collector data for: ${a}`),this.dispatchMessage(["collector/select",{username:a}]))}render(){if(!this.collector)return i`<p class="loading">Loading collector data...</p>`;const{username:e,shoeModels:o=[],totalValue:a=0,quantity:r=0,manufacturers:n=[]}=this.collector;return i`
      <section class="collector-page">
        <div class="collection-header">
          <h1>${e}'s Collection</h1>
          <p>Total Value: $${a} | ${r} Pairs</p>
        </div>
        <section class="manufacturer-section">
          <h2>Manufacturers</h2>
          <ul>
            ${n.map(s=>i`<li>
                  <a href="/Manufacturer/${s.toLowerCase()}.html"
                    >${s}</a
                  >
                </li>`)}
          </ul>
        </section>
        <section class="shoe-section">
          <h2>Shoe Models</h2>
          <ul>
            ${o.map(s=>i`<li>
                  <a href="/shoes/${s.sku}">${s.name}</a>
                </li>`)}
          </ul>
        </section>
      </section>
    `}};y.styles=f`
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
  `;let u=y;C([d({attribute:"username",reflect:!0})],u.prototype,"username",2);C([_()],u.prototype,"collector",1);function F(t,e,o){switch(t[0]){case"collector/select":J(t[1],o).then(r=>e(n=>({...n,collector:r})));break;case"collector/save":U(t[1],o).then(()=>console.log("Collector saved successfully")).catch(r=>console.error("Failed to save collector:",r));break;case"shoe/select":O(t[1],o).then(r=>e(n=>({...n,shoe:r})));break;case"shoe/save":B(t[1],o).then(()=>console.log("Shoe saved successfully")).catch(r=>console.error("Failed to save shoe:",r));break;default:const a=t[0];throw new Error(`Unhandled message "${a}"`)}}function J(t,e){var a;console.log("Fetching collector data for:",t.username);const o={...l.headers(e),Authorization:`Bearer ${(a=l.headers(e).Authorization)==null?void 0:a.replace("Bearer ","")}`};return fetch(`/api/collector/${t.username}`,{headers:o}).then(r=>{if(!r.ok)throw new Error(`Error fetching collector data: ${r.status}`);return r.json()}).then(r=>(console.log("Collector data received:",r),r)).catch(r=>{console.error("Failed to fetch collector data:",r)})}function U(t,e){return fetch(`/api/collector/${t.username}`,{method:"PUT",headers:{"Content-Type":"application/json",...l.headers(e)},body:JSON.stringify(t.collector)}).then(o=>{if(!o.ok)throw new Error(`Failed to save collector: ${o.status}`)})}function O(t,e){return fetch(`/api/shoes/${t.sku}`,{headers:l.headers(e)}).then(o=>{if(!o.ok)throw new Error(`Failed to fetch shoe: ${o.status}`);return o.json()}).then(o=>o).catch(o=>{console.error("Error fetching shoe data:",o)})}function B(t,e){return fetch(`/api/shoes/${t.sku}`,{method:"PUT",headers:{"Content-Type":"application/json",...l.headers(e)},body:JSON.stringify(t.shoe)}).then(o=>{if(!o.ok)throw new Error(`Failed to save shoe: ${o.status}`)})}const K={};var q=Object.defineProperty,M=(t,e,o,a)=>{for(var r=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=s(e,o,r)||r);return r&&q(e,o,r),r};const $=class $ extends p{connectedCallback(){super.connectedCallback(),this.sku&&this.fetchShoe(this.sku)}attributeChangedCallback(e,o,a){super.attributeChangedCallback(e,o,a),e==="sku"&&o!==a&&a&&this.fetchShoe(a)}async fetchShoe(e){try{const o=await fetch(`/api/shoes/${e}`,{headers:{"Content-Type":"application/json"}});if(!o.ok)throw new Error(`Failed to fetch shoe data: ${o.status}`);const a=await o.json();console.log("Fetched shoe data:",a),this.shoe=a}catch(o){console.error("Error fetching shoe data:",o),this.shoe=void 0}}render(){if(!this.shoe)return i`<p class="loading">Loading shoe data...</p>`;const{name:e,brand:o,colorway:a,releaseDate:r,featuredImage:n,price:s,inventory:m,categories:P=[],designer:h}=this.shoe;return i`
      <main class="shoe-page">
        <section class="shoe-header">
          <h1>${e}</h1>
          <p>${o} | ${a}</p>
          <p>Release Date: ${new Date(r).toLocaleDateString()}</p>
        </section>
        <section class="shoe-image">
          <img src="${n}" alt="${e}" />
        </section>
        <section class="shoe-details">
          <h2>Price</h2>
          <div class="info-item">Retail: $${s.originalPrice}</div>
          ${s.marketPrice?i`<div class="info-item">Market: $${s.marketPrice}</div>`:""}

          <h2>Inventory</h2>
          <div class="info-item">Production: ${m.productionNumber}</div>
          <div class="info-item">Pairs Sold: ${m.pairsSold}</div>
          ${m.isLimitedEdition?i`<div class="info-item">
                <strong>Limited Edition</strong>
              </div>`:""}

          <h2>Categories</h2>
          <div class="category-buttons">
            ${P.map(A=>i`<button class="category-btn">${A}</button>`)}
          </div>

          ${h?i`
                <h2>Designer</h2>
                <div class="info-item">${h.name}</div>
              `:""}

          ${h&&h.collaborators?i`
                <h2>Collaborators</h2>
                <div class="info-item">${h.collaborators.join(", ")}</div>
              `:""}
        </section>
      </main>
    `}};$.styles=f`
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
  `;let g=$;M([d()],g.prototype,"sku");M([d({state:!0})],g.prototype,"shoe");var R=Object.defineProperty,S=(t,e,o,a)=>{for(var r=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=s(e,o,r)||r);return r&&R(e,o,r),r},c;const k=(c=class extends p{connectedCallback(){super.connectedCallback(),this.updateManufacturerData()}attributeChangedCallback(e,o,a){super.attributeChangedCallback(e,o,a),e==="manufacturerName"&&o!==a&&a&&this.updateManufacturerData()}updateManufacturerData(){this.manufacturerName?this.manufacturerData=c.manufacturers[this.manufacturerName]:this.manufacturerData=void 0}render(){if(!this.manufacturerData)return i`<p class="loading">
        No manufacturer selected or data not available.
      </p>`;const{name:e,logoUrl:o,description:a,designers:r}=this.manufacturerData;return i`
      <div class="manufacturer-card">
        <div class="manufacturer-header">
          <img class="manufacturer-logo" src="${o}" alt="${e} Logo" />
          <h1>${e}</h1>
          <p class="description">${a}</p>
        </div>
        <section class="designer-section">
          <h2>Designers</h2>
          <ul>
            ${r.map(n=>i`<li>
                  <a href="${n.link}">
                    <span>${n.name}</span>
                  </a>
                </li>`)}
          </ul>
        </section>
      </div>
    `}},c.manufacturers={nike:{name:"Nike",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",description:"Nike, Inc. is an American multinational corporation engaged in the design, development, manufacturing, and marketing of footwear, apparel, equipment, and accessories. Known for its iconic swoosh logo and tagline 'Just Do It.'",designers:[{name:"Tinker Hatfield",link:"/Designer/tinker.html"},{name:"Travis Scott",link:"/Designer/travis.html"},{name:"Virgil Abloh",link:"/Designer/abloh.html"}]},jordan:{name:"Jordan Brand",logoUrl:"https://upload.wikimedia.org/wikipedia/en/3/37/Jumpman_logo.svg",description:"Jordan Brand, a subsidiary of Nike, is an American sportswear brand inspired by NBA Hall of Famer Michael Jordan. It is known for its signature Air Jordan sneakers and its influence on basketball culture and fashion.",designers:[{name:"Tinker Hatfield",link:"/Designer/tinker.html"},{name:"Travis Scott",link:"/Designer/travis.html"},{name:"Virgil Abloh",link:"/Designer/abloh.html"}]},adidas:{name:"Adidas",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",description:"Adidas is a German multinational corporation that designs and manufactures shoes, clothing, and accessories. Known for its iconic three stripes, Adidas is a leader in the global sportswear industry, creating innovative designs and partnering with world-renowned designers and athletes.",designers:[{name:"Daniel Arsham",link:"/Designer/arsham.html"},{name:"Jerry Lorenzo",link:"/Designer/lorenzo.html"},{name:"Ye",link:"/Designer/ye.html"}]}},c.styles=f`
    @import url("tokens.css");

    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-background-page);
      height: 100vh; 
      width: 100%;
      overflow: hidden;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Montserrat", sans-serif;
    }

    html,
    body {
      height: 100%;
      overflow: hidden; 
      margin: 0;
      padding: 0;
    }

    body {
      font-family: "Montserrat", sans-serif;
      color: var(--color-text);
      background-color: var(--color-background-page);
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
  `,c);S([d()],k.prototype,"manufacturerName");S([d({state:!0})],k.prototype,"manufacturerData");let W=k;class G extends p{render(){return i` <home-view></home-view> `}connectedCallback(){super.connectedCallback()}}const Y=[{path:"/shoes/:sku",view:t=>i`
      <shoe-view sku=${t.sku}></shoe-view>
    `},{path:"/collector/:username",view:t=>i`
      <collector-view username=${t.username}></collector-view>
    `},{path:"/manufacturer/:name",view:t=>i`
      <manufacturer-view manufacturerName=${t.name}></manufacturer-view>
    `},{path:"/",redirect:"/app"},{path:"/app",view:()=>i` <home-view></home-view> `}];I({"mu-auth":l.Provider,"mu-history":j.Provider,"mu-store":class extends z.Provider{constructor(){super(F,K,"sole_collection:auth")}},"mu-switch":class extends N.Element{constructor(){super(Y,"sole_collection:history","sole_collection:auth")}},"solecollection-app":G,"solecollection-header":v,"home-view":x,"collector-view":u,"manufacturer-view":W,"shoe-view":g});
