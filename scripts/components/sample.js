import element from '../utils/element.js'

export default element({
  name: 'sample-1',
  render: `
    <style>
      .sample-1 { font-size: 15px; }
    </style>
    <script>console.log('sample-1!');</script>
    <div class="sample-1">
      <p><span>sample-1</span></p>
      <content></content>
    </div>
  `
})