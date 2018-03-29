export default ({
  name,
  render,
  connectedCallback,
  disconnectedCallback,
  attributeChangedCallback,
  adoptedCallback
}) => {
  return customElements.define(
    name,
    class extends HTMLElement {
      constructor() {
        super()
  
        const template = document.createElement('template');
        template.innerHTML = render
        const node = document.importNode(template.content, true)
  
        this.createShadowRoot()
        this.shadowRoot.appendChild(node)
      }

      connectedCallback() {
        connectedCallback && connectedCallback()
      }
    
      disconnectedCallback() {
        disconnectedCallback && disconnectedCallback()
      }
    
      attributeChangedCallback(attrName, oldVal, newVal) {
        attributeChangedCallback && attributeChangedCallback()
      }
    
      adoptedCallback() {
        adoptedCallback && adoptedCallback()
      }
    }
  )
}