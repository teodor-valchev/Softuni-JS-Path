async function getInfo() {
  const busId = document.getElementById("stopId").value;
  const url = `http://localhost:3030/jsonstore/bus/businfo/${busId}`;
  let stopName = document.getElementById("stopName");
  let buses = document.getElementById("buses");
try{
  const fetchedData = await fetch(url);
  let data = await fetchedData.json();
  console.log(data);
  stopName.textContent = data.name;

  for (const bus in data.buses) {
    let li = document.createElement('li');
    li.textContent=`Bus ${bus} arrives in ${data.buses[bus]} minutes`
    buses.appendChild(li);
  }
}
catch(err){
  stopName.textContent = 'Error'
  buses.remove()
}
}
