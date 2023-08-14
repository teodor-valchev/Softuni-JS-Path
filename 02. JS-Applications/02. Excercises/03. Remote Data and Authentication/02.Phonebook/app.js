
function attachEvents() {
  const baseUrl = `http://localhost:3030/jsonstore/phonebook`;

  const loadBtn = document.getElementById("btnLoad");
  const createBtn = document.getElementById("btnCreate");
  const phoneBook = document.getElementById("phonebook");

  const person = document.getElementById("person");
  const phone = document.getElementById("phone");

  loadBtn.addEventListener("click", async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    Object.values(data).forEach((currentPerson) => {
      let person = currentPerson.person;
      let phone = currentPerson.phone;
      let id = currentPerson._id;

      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";

      let li = document.createElement("li");
      li.textContent = `${person}:${phone}`;
      li.appendChild(deleteBtn);

      phoneBook.appendChild(li);

      deleteBtn.addEventListener("click", (e) => {
        let deleteRow = e.currentTarget.parentNode;
        const deleteUrl = `http://localhost:3030/jsonstore/phonebook/${id}`;
        e.currentTarget.parentNode.remove()
        const deleteResponse = fetch(deleteUrl, {
          method: "DELETE",
        });

      
    });
  });

  createBtn.addEventListener("click", async () => {
    const responseBody = { person: person.value, phone: phone.value };
    const postBody = await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(responseBody),
    });
    person.value = "";
    phone.value = "";
    return postBody.json();
  });
})}
attachEvents();
