import element from '../utils/element.js'

export default element({
  name: 'app-root',
  render: `
    <style>
      .app-root { font-size: 30px; }
    </style>
    <script>
      console.log('app-root!');
    </script>
    <div class="app-root">
      app
      <sample-1>
        content
      </sample-1>
    </div>
  `,
  connectedCallback() {
    console.log('connectedCallback')
  }
})