import{r as c,i as h,x as m,n as i,d as u,a as g}from"./property-hMr0XSj5.js";var f=Object.defineProperty,n=(d,o,a,l)=>{for(var e=void 0,r=d.length-1,p;r>=0;r--)(p=d[r])&&(e=p(o,a,e)||e);return e&&f(o,a,e),e};const s=class s extends c{constructor(){super(...arguments),this.api="/auth/register",this.redirect="/",this.message=""}render(){return m`
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form @submit=${this._handleSubmit}>
        <h3>Register with Username and Password</h3>
        <label>
          Username
          <input name="username" type="text" autocomplete="username" required />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            autocomplete="new-password"
            required
          />
        </label>
        <label>
          Confirm Password
          <input
            name="confirmPassword"
            type="password"
            autocomplete="new-password"
            required
          />
        </label>
        <button type="submit">Register</button>
        <p class="error">${this.message}</p>
      </form>
    `}_handleSubmit(o){o.preventDefault();const a=o.target,l=new FormData(a),e=JSON.stringify(Object.fromEntries(l));fetch(this.api,{method:"POST",headers:{"Content-Type":"application/json"},body:e}).then(r=>{if(!r.ok)throw r.status===409?new Error("Username already exists."):new Error("Failed to register. Please try again.");return r.json()}).then(()=>{window.location.href=this.redirect}).catch(r=>{console.error("Registration failed:",r),this.message=r.message})}};s.styles=h`
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

    .error {
      color: firebrick;
      font-size: var(--font-size-small);
      margin-top: 0.5rem;
      text-align: center;
    }
  `;let t=s;n([i({type:String})],t.prototype,"api");n([i({type:String})],t.prototype,"redirect");n([i({type:String})],t.prototype,"message");u({"mu-auth":g.Provider,"register-form":t});
