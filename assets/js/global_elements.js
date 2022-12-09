class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            
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