import { html,render } from "../node_modules/lit-html/lit-html.js";
import {styleMap } from '../node_modules/lit-html/directives/style-map.js'
import {cats} from './catSeeder.js'
const container = document.getElementById('allCats');

const catTemplate = (cats) =>{
    return html`
    <ul>       
               ${cats.map((c)=>html`<li>
               <img src="./images/${c.imageLocation}.jpg" width="250" height="250" alt="Card image cap"> 
               <div class="info">
               <button class="showBtn">Show status code</button>
              <div class="status" style=${styleMap(c.info ? {display:"block"} : {display:'none'})} id=${c.id}>
                  <h4>Status Code: ${c.statusCode}</h4>
                  <p>${c.statusMessage}</p>
              </div>
             </div>     
               </li>`)}
     </ul>       
    `
}
function update(){
   const result = catTemplate(cats);
   render(result,container)
}
cats.forEach((c)=>c.info=false)
update()
 const allBtns = document.querySelectorAll('.showBtn')

 allBtns.forEach((b)=>b.addEventListener('click',(e)=>{
     let serchedCat = e.currentTarget.parentNode.querySelector('.status').id
     let findCat = cats.find((x)=>x.id == serchedCat)
     findCat.info = !findCat.info
     update()
 }))