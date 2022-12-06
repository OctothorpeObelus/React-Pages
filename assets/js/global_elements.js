class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1>Boobs</h1>
        `;
    }
}
customElements.define('octo-header', CustomHeader);

class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        `;
    }
}
customElements.define('octo-footer', CustomFooter);