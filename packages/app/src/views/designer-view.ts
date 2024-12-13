import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export class DesignerViewElement extends LitElement {
  @property()
  designerName?: string;

  @property({ state: true })
  designerData?: {
    name: string;
    profileImageUrl: string;
    bio: string;
    manufacturers: { name: string; link: string }[];
    shoeModels: { name: string; link: string }[];
  };

  static designers = {
    abloh: {
      name: "Virgil Abloh",
      profileImageUrl:
        "https://res.cloudinary.com/dmubfrefi/image/private/s--4m5Pijb1--/c_crop,h_1079,w_1079,x_0,y_201/c_scale,w_3840/f_auto/q_auto/v1/dee-about-cms-prod-medias/e8e3218f-12bf-4861-bd20-e435cd2c814e/virgil-abloh-nike-the10-12-73201.jpg?_a=BAAAV6Bs",
      bio: "Virgil Abloh was a visionary designer and artist, known for founding the luxury streetwear brand Off-White and serving as the Artistic Director of Louis Vuitton's menswear. His work with Nike and Jordan Brand, including 'The Ten' collection, redefined modern sneaker culture.",
      manufacturers: [
        { name: "Nike", link: "/manufacturer/nike" },
        { name: "Jordan Brand", link: "/manufacturer/jordan" },
      ],
      shoeModels: [
        { name: "Air Jordan 1", link: "/shoes/555088-610" },
        { name: "Nike Presto", link: "/shoes/AQ0818-100" },
      ],
    },
    arsham: {
      name: "Daniel Arsham",
      profileImageUrl:
        "https://assets.mocomuseum.com/images_prod/transforms/artist/_2900x1631_crop_center-center_none/17080/Ams-Museum-Daniel-Arsham-Eroded-Patches.jpg",
      bio: "Daniel Arsham is an artist and designer known for his sculptural works and futuristic collaborations with Adidas and other major brands.",
      manufacturers: [{ name: "Adidas", link: "/manufacturer/adidas" }],
      shoeModels: [{ name: "Adidas Futurecraft 4D", link: "/shoes/F35155" }],
    },
    lorenzo: {
      name: "Jerry Lorenzo",
      profileImageUrl:
        "https://cdn.shopify.com/s/files/1/0408/9909/files/Jerry_Lorenzo_Editorial_-_Feature_-_April_13_2022_-_2.png?v=1649892505",
      bio: "Jerry Lorenzo is the founder of Fear of God and known for his high-fashion streetwear collaborations with Nike and other brands.",
      manufacturers: [{ name: "Adidas", link: "/manufacturer/adidas" }],
      shoeModels: [
        { name: "Nike Air Fear of God Moc", link: "/shoes/AR4237-001" },
      ],
    },
    tinker: {
      name: "Tinker Hatfield",
      profileImageUrl:
        "https://image.tmdb.org/t/p/original/wtASoljXtKda2qS1mu48X5j2cnf.jpg",
      bio: "Tinker Hatfield is a legendary designer known for his groundbreaking work on the Air Jordan series and other iconic Nike products.",
      manufacturers: [{ name: "Nike", link: "/manufacturer/nike" }],
      shoeModels: [
        { name: "Air Jordan 1", link: "/shoes/555088-610" },
        { name: "Air Jordan 5", link: "/shoes/DB0732-001" },
      ],
    },
    travis: {
      name: "Travis Scott",
      profileImageUrl:
        "https://www.billboard.com/wp-content/uploads/2021/11/travis-scott-astroworld-2021-2-billboard-1548-1636217991.png",
      bio: "Travis Scott is a musician and designer collaborating with Nike and Jordan Brand to create unique and culturally impactful designs.",
      manufacturers: [
        { name: "Nike", link: "/manufacturer/nike" },
        { name: "Jordan Brand", link: "/manufacturer/jordan" },
      ],
      shoeModels: [{ name: "Air Jordan 1", link: "/shoes/555088-610" }],
    },
    ye: {
      name: "Ye (Kanye West)",
      profileImageUrl:
        "https://gray-wtok-prod.gtv-cdn.com/resizer/v2/SAXZJAIOSRF4NEEQHDUT4KFIRU.png?auth=6ae09f4cc6f2ba0b576c9f223bc2c49aea8d6e7b735b106ffb75a990c0939d87&width=800&height=450&smart=true",
      bio: "Ye, formerly known as Kanye West, revolutionized the sneaker industry with his Yeezy brand and collaborations with Adidas.",
      manufacturers: [{ name: "Adidas", link: "/manufacturer/adidas" }],
      shoeModels: [{ name: "Yeezy Boost 350 V2", link: "/shoes/CP9654" }],
    },
  };

  connectedCallback() {
    super.connectedCallback();
    this.updateDesignerData();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === "designerName" && oldValue !== newValue && newValue) {
      this.updateDesignerData();
    }
  }

  updateDesignerData() {
    if (this.designerName) {
      this.designerData =
        DesignerViewElement.designers[
          this.designerName as keyof typeof DesignerViewElement.designers
        ];
    } else {
      this.designerData = undefined;
    }
  }

  render() {
    if (!this.designerData) {
      return html`<p class="loading">
        No designer selected or data not available.
      </p>`;
    }

    const { name, profileImageUrl, bio, manufacturers, shoeModels } =
      this.designerData;

    return html`
      <div class="designer-card">
        <div class="designer-header">
          <h1>${name}</h1>
          <img
            class="designer-profile"
            src="${profileImageUrl}"
            alt="${name} Profile Image"
          />
          <p class="bio">${bio}</p>
        </div>
        <section class=" section manufacturer-section">
          <h2>Manufacturers</h2>
          <ul>
            ${manufacturers.map(
              (manufacturer) =>
                html`<li>
                  <a href="${manufacturer.link}">
                    <span>${manufacturer.name}</span>
                  </a>
                </li>`
            )}
          </ul>
        </section>
        <section class=" section shoe-models-section">
          <h2>Shoe Models</h2>
          <ul>
            ${shoeModels.map(
              (shoe: { name: string; link: string }) => html`
                <li>
                  <a href="${shoe.link}">
                    <span>${shoe.name}</span>
                  </a>
                </li>
              `
            )}
          </ul>
        </section>
      </div>
    `;
  }

  static styles = css`
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
  `;
}
