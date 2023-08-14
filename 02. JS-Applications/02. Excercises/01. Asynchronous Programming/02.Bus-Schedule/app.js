function solve() {
  let ariveBtn = document.getElementById("arrive");
  let departBtn = document.getElementById("depart");
  let info = document.getElementById("info");

  let stop = {
next:'depot'
  }

  async function depart() {
    const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
    const data = await fetch(url);
     stop = await data.json();
     console.log(stop);
    info.textContent = `Next stop ${stop.name}`;
    departBtn.disabled = true;
    ariveBtn.disabled = false;
  }

  async function arrive() {
    info.textContent = `Arriving at ${stop.name}`
    departBtn.disabled = false;
    ariveBtn.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
