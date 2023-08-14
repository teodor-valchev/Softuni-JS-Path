import { html,render } from "../node_modules/lit-html/lit-html.js";
const loadBtn = document.getElementById('btnLoadTowns');
const container = document.getElementById('root');

const cityTemplate = (towns)=>{
   return html`<ul> 
    ${towns.map((t)=>html`<li>${t}</li>`)}
    </ul>`
}

 function update() {
    const input = document.getElementById('towns').value.split(', ');
    if (input == '') {
      return  alert('It cannot be empty!')
    }
    let result = cityTemplate(input);
    render(result,container);
}
loadBtn.addEventListener('click',(e)=>{
    e.preventDefault();  
    update()
})
