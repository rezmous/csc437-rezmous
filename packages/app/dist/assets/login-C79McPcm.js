import{r as h,i as u,x as g,n,d as m,a as f}from"./property-Boso9Xnl.js";var b=Object.defineProperty,s=(d,o,a,c)=>{for(var t=void 0,e=d.length-1,i;e>=0;e--)(i=d[e])&&(t=i(o,a,t)||t);return t&&b(o,a,t),t};const l=class l extends h{constructor(){super(...arguments),this.api="/auth/login",this.redirect="/",this.message=""}render(){return g`
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form @submit=${this._handleSubmit}>
        <slot name="title">
          <h3>Welcome to Sole Collection!</h3>
        </slot>
        <label>
          Username
          <input name="username" type="text" autocomplete="username" required />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            autocomplete="current-password"
            required
          />
        </label>
        <button type="submit">Sign In</button>
        <p class="error">${this.message}</p>
        <p class="register">New user? <a href="/newuser.html">Register here</a></p>
      </form>
    `}_handleSubmit(o){o.preventDefault();const a=o.target,c=new FormData(a),t=JSON.stringify(Object.fromEntries(c));fetch(this.api,{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then(e=>{if(!e.ok)throw new Error(`Status ${e.status}`);return e.json()}).then(({token:e})=>{console.log("Token received:",e);const p=JSON.parse(atob(e.split(".")[1])).username;localStorage.setItem("auth-token",e),localStorage.setItem("userid",p),this.dispatchEvent(new CustomEvent("auth:signin",{bubbles:!0,composed:!0,detail:{token:e,userId:p}})),window.location.href=this.redirect}).catch(e=>{console.error("Login failed:",e),this.message="Invalid Username or Password"})}};l.styles=u`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
      background: linear-gradient(
        135deg,
        var(--color-accent) 0%,
        var(--color-secondary) 100%
      );
      position: fixed;
    }

    .background {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
    }

    .background .shape {
      position: absolute;
      border-radius: 50%;
      background: var(--color-link);
      opacity: 0.2;
    }

    .background .shape:first-child {
      width: 300px;
      height: 300px;
      top: -50px;
      left: -80px;
    }

    .background .shape:last-child {
      width: 250px;
      height: 250px;
      bottom: -60px;
      right: -50px;
    }

    form {
      position: relative;
      z-index: 1;
      max-width: 400px;
      width: 90%;
      padding: 2rem;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 15px;
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0.2);
      font-family: var(--font-family-primary);
    }

    form h3 {
      font-size: var(--font-size-large);
      font-family: var(--font-family-secondary);
      font-weight: var(--font-weight-bold);
      color: var(--color-text);
      margin-bottom: 1.5rem;
    }

    label {
      display: flex;
      flex-direction: column;
      text-align: left;
      margin-top: 1rem;
      font-size: var(--font-size-small);
      font-weight: var(--font-weight-medium);
      color: var(--color-text);
    }

    input {
      padding: 0.75rem;
      margin-top: 0.5rem;
      border-radius: 8px;
      border: 1px solid var(--color-border);
      font-size: var(--font-size-small);
      background: rgba(255, 255, 255, 0.1);
      color: var(--color-text);
    }

    input:focus {
      outline: none;
      border-color: var(--color-accent);
      box-shadow: 0 0 5px var(--color-accent);
    }

    button {
      margin-top: 1.5rem;
      padding: 0.75rem;
      width: 100%;
      font-size: var(--font-size-medium);
      font-weight: var(--font-weight-bold);
      color: var(--color-background-page);
      background: var(--color-accent);
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    button:hover {
      background: var(--color-button-hover);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    .register {
      margin-top: 1rem;
      font-size: var(--font-size-small);
      color: var(--color-link);
      text-align: center;
    }

    .register a {
      text-decoration: none;
      color: var(--color-accent);
      font-weight: var(--font-weight-bold);
    }

    .register a:hover {
      text-decoration: underline;
    }

    .error {
      color: firebrick;
      font-size: var(--font-size-small);
      margin-top: 0.5rem;
      text-align: center;
    }
  `;let r=l;s([n({type:String})],r.prototype,"api");s([n({type:String})],r.prototype,"redirect");s([n({type:String})],r.prototype,"message");m({"mu-auth":f.Provider,"login-form":r});
