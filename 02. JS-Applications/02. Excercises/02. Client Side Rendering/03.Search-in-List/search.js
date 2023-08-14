import { html,render } from "../node_modules/lit-html/lit-html.js";
import {towns} from './towns.js'
const serchedBtn = document.querySelector('button');

const townTemplate = (towns)=>{
return html`
<ul>
${towns.map((t)=>html`<li>${t}</li>`)}
</ul>
`
}

function update() {
   const townInput = document.getElementById('towns');
   const result = townTemplate(towns)
   render(result,townInput)
}
update()

function search() {
   serchedBtn.addEventListener('click',()=>{
      let serchedTown = document.getElementById('searchText').value;
   })
}
search();
