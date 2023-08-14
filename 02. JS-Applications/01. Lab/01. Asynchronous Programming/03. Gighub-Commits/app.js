async function loadCommits() {
   let username = document.getElementById('username').value;
   let repo = document.getElementById('repo').value;
   const commits = document.getElementById('commits');

   try{
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;
    const fetchedData = await fetch(url);
    const data = await fetchedData.json();
    
    if (fetchedData.status != 200) {
        let li = document.createElement('li');
        li.textContent = `Error: ${fetchedData.status} (Not Found)`
        commits.appendChild(li);
        throw new Error('(Not Found)') 
    }
 
    data.forEach(el => {
        let data = Object.values(el)
        let username = data[2].author.name;
        let message = data[2].message;
       let li = document.createElement('li');
       li.textContent = `${username}: ${message}` 
       commits.appendChild(li); 
    })
   }
   catch(err){
     
   }

  



}