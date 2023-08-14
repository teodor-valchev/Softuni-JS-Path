function solution() {
    initializeElements();
    AddActionToBtns();  
}

function AddActionToBtns() {
    const btnEllements = document.querySelectorAll('.button');

    btnEllements.forEach(b => b.addEventListener('click', (e) => {
        const articleID = e.currentTarget.id
        const detailsUrl = `http://localhost:3030/jsonstore/advanced/articles/details/${articleID}`
        const currentElementContent = e.currentTarget.parentNode.nextElementSibling;

        if (e.currentTarget.textContent === 'More') {
            e.currentTarget.textContent = 'Less'
            currentElementContent.style.display = 'block'
        }
        else{
            e.currentTarget.textContent = 'More'
            currentElementContent.style.display = 'none'
        }

        fetch(detailsUrl)
        .then(resp => resp.json())
        .then(article => {
            if (currentElementContent.children.length === 0) {
                const pElement = document.createElement('p');
                pElement.textContent = article.content;

                currentElementContent.appendChild(pElement) 
            }
        })
    }))
    
}


function initializeElements() {
    const listURL = "http://localhost:3030/jsonstore/advanced/articles/list"
    const main = document.getElementById('main');

    fetch(listURL)
    .then(r => r.json())
    .then(list =>  {

    for (const obj  of list) {
        const divAccordion = document.createElement('div');
        divAccordion.setAttribute('class','accordion')

        const divHead = document.createElement('div');
        divHead.setAttribute('class','head');

        const span = document.createElement('span');
        span.textContent = obj.title

        const button = document.createElement('button');
        button.setAttribute('class', 'button');
        button.setAttribute('id',obj._id);
        button.textContent = 'More';

        const divExtra = document.createElement('div');
        divExtra.setAttribute('class','extra');

        divAccordion.appendChild(divHead);

        divHead.appendChild(span);
        divHead.appendChild(button);

        divAccordion.appendChild(divExtra);

        main.appendChild(divAccordion)
    }
})
}

solution();