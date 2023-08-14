function attachEvents() {
  const baseUrl = `http://localhost:3030/jsonstore/messenger`;
  const sentBtn = document.getElementById("submit");
  const refreshBtn = document.getElementById("refresh");
  let textArea = document.getElementById("messages");
  let authorElement = document.querySelector('input[name=author]')
  let msgElement = document.querySelector('input[name=content]')

  refreshBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const response = await fetch(baseUrl);
    const data = await response.json();
    textArea.textContent = Object.values(data)
      .map(({ author, content }) => `${author}: ${content}`)
      .join("\n");
  });

  sentBtn.addEventListener('click', async()=>{
      if (authorElement.value == '' || msgElement.value == '') {
          return alert('Fill the area')
      }
    const bodyResponse ={author:authorElement.value,content:msgElement.value}
    const postResponse = await fetch(baseUrl,{
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(bodyResponse)
    })

    return postResponse.json()
  })
}

attachEvents();
