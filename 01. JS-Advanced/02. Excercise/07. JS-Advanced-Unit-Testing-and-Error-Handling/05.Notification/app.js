function notify(message) {
  let notificationDiv = document.getElementById("notification");
  let p = document.createElement("p");
  p.textContent = message;
  notificationDiv.appendChild(p);
  notificationDiv.style.display = "block";
  notificationDiv.addEventListener('click',(e)=>{
    e.currentTarget.style.display = 'none';
  })
 
}
