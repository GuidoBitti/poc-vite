import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hola esta es la wb con vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div class="execution-time">
      <span id="span-exe"></span>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
window.addEventListener('load',function(){
  const loadTime = performance.now();
  
  const span = document.querySelector("#span-exe");
  span.innerHTML = `<h2> El tiempo de ejecucion fue de ${loadTime} ms</h2>`

})

setupCounter(document.querySelector('#counter'))
