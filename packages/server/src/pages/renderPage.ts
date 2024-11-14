import { PageParts, renderWithDefaults } from "@calpoly/mustang/server";

const defaults = {
  stylesheets: ["/styles/reset.css", "/styles/tokens.css", "/styles/page.css"],
  styles: [],
  scripts: [
    `import { define } from "@calpoly/mustang";
      import { HeaderElement } from "/scripts/headerElement.js";
  
      define({
        "header-component": HeaderElement
      });
  
      HeaderElement.initializeOnce();
      `,
  ],
  googleFontURL:
    "https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
  imports: {
    "@calpoly/mustang": "https://unpkg.com/@calpoly/mustang",
  },
};

export default function renderPage(page: PageParts) {
  return renderWithDefaults(page, defaults);
}
