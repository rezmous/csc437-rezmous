import{r as u,i as g,x as s,e as D,n as d,V as z,a as h,d as N,h as I,s as J,_ as U}from"./property-Boso9Xnl.js";const y=class y extends u{connectedCallback(){super.connectedCallback(),this.applyDarkMode()}render(){return s`
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
    `:s``}handleDarkModeToggle(e){const a=e.target.checked;D.relay(e,"darkmode:toggle",{isDarkMode:a}),this.updateDarkMode(a)}updateDarkMode(e){e?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),localStorage.setItem("darkMode",String(e))}applyDarkMode(){const e=this.isDarkModeEnabled();this.updateDarkMode(e)}isDarkModeEnabled(){return localStorage.getItem("darkMode")==="true"}handleAuth(e){e.preventDefault(),this.getUserId()&&(localStorage.removeItem("userid"),localStorage.removeItem("auth-token"),D.relay(e,"auth:signout")),window.location.href="/login.html"}getUserId(){return localStorage.getItem("userid")||""}getAuthText(){return this.getUserId()?"Sign Out":"Sign In"}};y.styles=g`
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
  `;let k=y;const $=class $ extends u{connectedCallback(){super.connectedCallback(),this.checkAuthStatus()}checkAuthStatus(){localStorage.getItem("auth-token")||(window.location.href="/login.html")}render(){return s`
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
    `}};$.styles=g`
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
 */function E(t){return d({...t,state:!0,attribute:!1})}var F=Object.defineProperty,L=Object.getOwnPropertyDescriptor,C=(t,e,r,a)=>{for(var o=a>1?void 0:a?L(e,r):e,i=t.length-1,n;i>=0;i--)(n=t[i])&&(o=(a?n(e,r,o):n(o))||o);return a&&o&&F(e,r,o),o};const A=class A extends z{constructor(){super(...arguments),this.username=""}get collector(){return this.model.collector}attributeChangedCallback(e,r,a){super.attributeChangedCallback(e,r,a),e==="username"&&r!==a&&a&&(console.log(`Fetching collector data for: ${a}`),this.dispatchMessage(["collector/select",{username:a}]))}render(){if(!this.collector)return s`<p class="loading">Loading collector data...</p>`;const{username:e,shoeModels:r=[],totalValue:a=0,quantity:o=0,manufacturers:i=[]}=this.collector;return s`
      <section class="collector-page">
        <div class="collection-header">
          <h1>${e}'s Collection</h1>
          <p>Total Value: $${a} | ${o} Pairs</p>
        </div>
        <section class="manufacturer-section">
          <h2>Manufacturers</h2>
          <ul>
            ${i.map(n=>s`<li>
                  <a href="/Manufacturer/${n.toLowerCase()}.html"
                    >${n}</a
                  >
                </li>`)}
          </ul>
        </section>
        <section class="shoe-section">
          <h2>Shoe Models</h2>
          <ul>
            ${r.map(n=>s`<li>
                  <a href="/shoes/${n.sku}">${n.name}</a>
                </li>`)}
          </ul>
        </section>
      </section>
    `}};A.styles=g`
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
  `;let f=A;C([d({attribute:"username",reflect:!0})],f.prototype,"username",2);C([E()],f.prototype,"collector",1);function B(t,e,r){switch(t[0]){case"collector/select":O(t[1],r).then(o=>e(i=>({...i,collector:o})));break;case"collector/save":K(t[1],r).then(()=>console.log("Collector saved successfully")).catch(o=>console.error("Failed to save collector:",o));break;case"shoe/select":q(t[1],r).then(o=>e(i=>({...i,shoe:o})));break;case"shoe/save":R(t[1],r).then(()=>console.log("Shoe saved successfully")).catch(o=>console.error("Failed to save shoe:",o));break;default:const a=t[0];throw new Error(`Unhandled message "${a}"`)}}function O(t,e){var a;console.log("Fetching collector data for:",t.username);const r={...h.headers(e),Authorization:`Bearer ${(a=h.headers(e).Authorization)==null?void 0:a.replace("Bearer ","")}`};return fetch(`/api/collector/${t.username}`,{headers:r}).then(o=>{if(!o.ok)throw new Error(`Error fetching collector data: ${o.status}`);return o.json()}).then(o=>(console.log("Collector data received:",o),o)).catch(o=>{console.error("Failed to fetch collector data:",o)})}function K(t,e){return fetch(`/api/collector/${t.username}`,{method:"PUT",headers:{"Content-Type":"application/json",...h.headers(e)},body:JSON.stringify(t.collector)}).then(r=>{if(!r.ok)throw new Error(`Failed to save collector: ${r.status}`)})}function q(t,e){return fetch(`/api/shoes/${t.sku}`,{headers:h.headers(e)}).then(r=>{if(!r.ok)throw new Error(`Failed to fetch shoe: ${r.status}`);return r.json()}).then(r=>r).catch(r=>{console.error("Error fetching shoe data:",r)})}function R(t,e){return fetch(`/api/shoes/${t.sku}`,{method:"PUT",headers:{"Content-Type":"application/json",...h.headers(e)},body:JSON.stringify(t.shoe)}).then(r=>{if(!r.ok)throw new Error(`Failed to save shoe: ${r.status}`)})}const W={};var Y=Object.defineProperty,S=(t,e,r,a)=>{for(var o=void 0,i=t.length-1,n;i>=0;i--)(n=t[i])&&(o=n(e,r,o)||o);return o&&Y(e,r,o),o};const M=class M extends u{connectedCallback(){super.connectedCallback(),this.sku&&this.fetchShoe(this.sku)}attributeChangedCallback(e,r,a){super.attributeChangedCallback(e,r,a),e==="sku"&&r!==a&&a&&this.fetchShoe(a)}async fetchShoe(e){try{const r=await fetch(`/api/shoes/${e}`,{headers:{"Content-Type":"application/json"}});if(!r.ok)throw new Error(`Failed to fetch shoe data: ${r.status}`);const a=await r.json();console.log("Fetched shoe data:",a),this.shoe=a}catch(r){console.error("Error fetching shoe data:",r),this.shoe=void 0}}render(){if(!this.shoe)return s`<p class="loading">Loading shoe data...</p>`;const{name:e,brand:r,colorway:a,releaseDate:o,featuredImage:i,price:n,inventory:b,categories:T=[],designer:p}=this.shoe;return s`
      <main class="shoe-page">
        <section class="shoe-header">
          <h1>${e}</h1>
          <p>${r} | ${a}</p>
          <p>Release Date: ${new Date(o).toLocaleDateString()}</p>
        </section>
        <section class="shoe-image">
          <img src="${i}" alt="${e}" />
        </section>
        <section class="shoe-details">
          <h2>Price</h2>
          <div class="info-item">Retail: $${n.originalPrice}</div>
          ${n.marketPrice?s`<div class="info-item">Market: $${n.marketPrice}</div>`:""}

          <h2>Inventory</h2>
          <div class="info-item">Production: ${b.productionNumber}</div>
          <div class="info-item">Pairs Sold: ${b.pairsSold}</div>
          ${b.isLimitedEdition?s`<div class="info-item">
                <strong>Limited Edition</strong>
              </div>`:""}

          <h2>Categories</h2>
          <div class="category-buttons">
            ${T.map(j=>s`<button class="category-btn">${j}</button>`)}
          </div>

          ${p?s`
                <h2>Designer</h2>
                <div class="info-item">${p.name}</div>
              `:""}

          ${p&&p.collaborators?s`
                <h2>Collaborators</h2>
                <div class="info-item">${p.collaborators.join(", ")}</div>
              `:""}
        </section>
      </main>
    `}};M.styles=g`
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
  `;let m=M;S([d()],m.prototype,"sku");S([d({state:!0})],m.prototype,"shoe");var G=Object.defineProperty,_=(t,e,r,a)=>{for(var o=void 0,i=t.length-1,n;i>=0;i--)(n=t[i])&&(o=n(e,r,o)||o);return o&&G(e,r,o),o},l;const x=(l=class extends u{connectedCallback(){super.connectedCallback(),this.updateManufacturerData()}attributeChangedCallback(e,r,a){super.attributeChangedCallback(e,r,a),e==="manufacturerName"&&r!==a&&a&&this.updateManufacturerData()}updateManufacturerData(){this.manufacturerName?this.manufacturerData=l.manufacturers[this.manufacturerName]:this.manufacturerData=void 0}render(){if(!this.manufacturerData)return s`<p class="loading">
        No manufacturer selected or data not available.
      </p>`;const{name:e,logoUrl:r,description:a,designers:o}=this.manufacturerData;return s`
      <div class="manufacturer-card">
        <div class="manufacturer-header">
          <h1>${e}</h1>
          <img class="manufacturer-logo" src="${r}" alt="${e} Logo" />

          <p class="description">${a}</p>
        </div>
        <section class="designer-section">
          <h2>Designers</h2>
          <ul>
            ${o.map(i=>s`<li>
                  <a href="${i.link}">
                    <span>${i.name}</span>
                  </a>
                </li>`)}
          </ul>
        </section>
      </div>
    `}},l.manufacturers={nike:{name:"Nike",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",description:"Nike, Inc. is an American multinational corporation engaged in the design, development, manufacturing, and marketing of footwear, apparel, equipment, and accessories. Known for its iconic swoosh logo and tagline 'Just Do It.'",designers:[{name:"Tinker Hatfield",link:"/designer/tinker"},{name:"Travis Scott",link:"/designer/travis"},{name:"Virgil Abloh",link:"/designer/abloh"}]},jordan:{name:"Jordan Brand",logoUrl:"https://upload.wikimedia.org/wikipedia/en/3/37/Jumpman_logo.svg",description:"Jordan Brand, a subsidiary of Nike, is an American sportswear brand inspired by NBA Hall of Famer Michael Jordan. It is known for its signature Air Jordan sneakers and its influence on basketball culture and fashion.",designers:[{name:"Tinker Hatfield",link:"/designer/tinker"},{name:"Travis Scott",link:"/designer/travis"},{name:"Virgil Abloh",link:"/designer/abloh"}]},adidas:{name:"Adidas",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",description:"Adidas is a German multinational corporation that designs and manufactures shoes, clothing, and accessories. Known for its iconic three stripes, Adidas is a leader in the global sportswear industry, creating innovative designs and partnering with world-renowned designers and athletes.",designers:[{name:"Daniel Arsham",link:"/designer/arsham"},{name:"Jerry Lorenzo",link:"/designer/lorenzo"},{name:"Ye",link:"/designer/ye"}]}},l.styles=g`
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
  `,l);_([d()],x.prototype,"manufacturerName");_([d({state:!0})],x.prototype,"manufacturerData");let H=x;var X=Object.defineProperty,P=(t,e,r,a)=>{for(var o=void 0,i=t.length-1,n;i>=0;i--)(n=t[i])&&(o=n(e,r,o)||o);return o&&X(e,r,o),o},c;const w=(c=class extends u{connectedCallback(){super.connectedCallback(),this.updateDesignerData()}attributeChangedCallback(e,r,a){super.attributeChangedCallback(e,r,a),e==="designerName"&&r!==a&&a&&this.updateDesignerData()}updateDesignerData(){this.designerName?this.designerData=c.designers[this.designerName]:this.designerData=void 0}render(){if(!this.designerData)return s`<p class="loading">
        No designer selected or data not available.
      </p>`;const{name:e,profileImageUrl:r,bio:a,manufacturers:o,shoeModels:i}=this.designerData;return s`
      <div class="designer-card">
        <div class="designer-header">
          <h1>${e}</h1>
          <img
            class="designer-profile"
            src="${r}"
            alt="${e} Profile Image"
          />
          <p class="bio">${a}</p>
        </div>
        <section class=" section manufacturer-section">
          <h2>Manufacturers</h2>
          <ul>
            ${o.map(n=>s`<li>
                  <a href="${n.link}">
                    <span>${n.name}</span>
                  </a>
                </li>`)}
          </ul>
        </section>
        <section class=" section shoe-models-section">
          <h2>Shoe Models</h2>
          <ul>
            ${i.map(n=>s`
                <li>
                  <a href="${n.link}">
                    <span>${n.name}</span>
                  </a>
                </li>
              `)}
          </ul>
        </section>
      </div>
    `}},c.designers={abloh:{name:"Virgil Abloh",profileImageUrl:"https://res.cloudinary.com/dmubfrefi/image/private/s--4m5Pijb1--/c_crop,h_1079,w_1079,x_0,y_201/c_scale,w_3840/f_auto/q_auto/v1/dee-about-cms-prod-medias/e8e3218f-12bf-4861-bd20-e435cd2c814e/virgil-abloh-nike-the10-12-73201.jpg?_a=BAAAV6Bs",bio:"Virgil Abloh was a visionary designer and artist, known for founding the luxury streetwear brand Off-White and serving as the Artistic Director of Louis Vuitton's menswear. His work with Nike and Jordan Brand, including 'The Ten' collection, redefined modern sneaker culture.",manufacturers:[{name:"Nike",link:"/manufacturer/nike"},{name:"Jordan Brand",link:"/manufacturer/jordan"}],shoeModels:[{name:"Air Jordan 1",link:"/shoes/555088-610"},{name:"Nike Presto",link:"/shoes/AQ0818-100"}]},arsham:{name:"Daniel Arsham",profileImageUrl:"https://assets.mocomuseum.com/images_prod/transforms/artist/_2900x1631_crop_center-center_none/17080/Ams-Museum-Daniel-Arsham-Eroded-Patches.jpg",bio:"Daniel Arsham is an artist and designer known for his sculptural works and futuristic collaborations with Adidas and other major brands.",manufacturers:[{name:"Adidas",link:"/manufacturer/adidas"}],shoeModels:[{name:"Adidas Futurecraft 4D",link:"/shoes/F35155"}]},lorenzo:{name:"Jerry Lorenzo",profileImageUrl:"https://cdn.shopify.com/s/files/1/0408/9909/files/Jerry_Lorenzo_Editorial_-_Feature_-_April_13_2022_-_2.png?v=1649892505",bio:"Jerry Lorenzo is the founder of Fear of God and known for his high-fashion streetwear collaborations with Nike and other brands.",manufacturers:[{name:"Adidas",link:"/manufacturer/adidas"}],shoeModels:[{name:"Nike Air Fear of God Moc",link:"/shoes/AR4237-001"}]},tinker:{name:"Tinker Hatfield",profileImageUrl:"https://image.tmdb.org/t/p/original/wtASoljXtKda2qS1mu48X5j2cnf.jpg",bio:"Tinker Hatfield is a legendary designer known for his groundbreaking work on the Air Jordan series and other iconic Nike products.",manufacturers:[{name:"Nike",link:"/manufacturer/nike"}],shoeModels:[{name:"Air Jordan 1",link:"/shoes/555088-610"},{name:"Air Jordan 5",link:"/shoes/DB0732-001"}]},travis:{name:"Travis Scott",profileImageUrl:"https://www.billboard.com/wp-content/uploads/2021/11/travis-scott-astroworld-2021-2-billboard-1548-1636217991.png",bio:"Travis Scott is a musician and designer collaborating with Nike and Jordan Brand to create unique and culturally impactful designs.",manufacturers:[{name:"Nike",link:"/manufacturer/nike"},{name:"Jordan Brand",link:"/manufacturer/jordan.html"}],shoeModels:[{name:"Air Jordan 1",link:"/shoes/555088-610"}]},ye:{name:"Ye (Kanye West)",profileImageUrl:"https://gray-wtok-prod.gtv-cdn.com/resizer/v2/SAXZJAIOSRF4NEEQHDUT4KFIRU.png?auth=6ae09f4cc6f2ba0b576c9f223bc2c49aea8d6e7b735b106ffb75a990c0939d87&width=800&height=450&smart=true",bio:"Ye, formerly known as Kanye West, revolutionized the sneaker industry with his Yeezy brand and collaborations with Adidas.",manufacturers:[{name:"Adidas",link:"/manufacturer/adidas"}],shoeModels:[{name:"Yeezy Boost 350 V2",link:"/shoes/CP9654"}]}},c.styles=g`
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
`,c);P([d()],w.prototype,"designerName");P([d({state:!0})],w.prototype,"designerData");let Q=w;class Z extends u{render(){return s` <home-view></home-view> `}connectedCallback(){super.connectedCallback()}}const V=[{path:"/shoes/:sku",view:t=>s`
      <shoe-view sku=${t.sku}></shoe-view>
    `},{path:"/collector/:username",view:t=>s`
      <collector-view username=${t.username}></collector-view>
    `},{path:"/manufacturer/:name",view:t=>s`
      <manufacturer-view manufacturerName=${t.name}></manufacturer-view>
    `},{path:"/designer/:name",view:t=>s`
      <designer-view designerName=${t.name}></designer-view>
    `},{path:"/",redirect:"/app"},{path:"/app",view:()=>s` <home-view></home-view> `}];N({"mu-auth":h.Provider,"mu-history":I.Provider,"mu-store":class extends J.Provider{constructor(){super(B,W,"sole_collection:auth")}},"mu-switch":class extends U.Element{constructor(){super(V,"sole_collection:history","sole_collection:auth")}},"solecollection-app":Z,"solecollection-header":k,"home-view":v,"collector-view":f,"designer-view":Q,"manufacturer-view":H,"shoe-view":m});
