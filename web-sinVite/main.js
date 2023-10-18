import { setupCounter } from './counter.js'

window.addEventListener('load',function(){
  const loadTime = performance.now();
  
  const span = document.querySelector("#span-exe");
  span.innerHTML = `<h2> El tiempo de ejecucion fue de ${loadTime} ms</h2>`

})

setupCounter(document.querySelector('#counter'))
