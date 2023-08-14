async function extractData(){
const baseUrl = `http://localhost:3030/jsonstore/collections/students`;
const response = await fetch(baseUrl);
const data = await  response.json();

const table = document.getElementById('results');
 Object.values(data).forEach((el)=>{
   let firstName = el.firstName;
   console.log(firstName);
});

}
extractData();