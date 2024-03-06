fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const cardContainer = document.getElementById('card-container')
        data.forEach(card => {
            const cardElement = document.createElement('div')
            cardElement.classList.add('project-card')

            const titleElement = document.createElement('h3')
            titleElement.textContent = card.title

            const imageElement = document.createElement('img')
            imageElement.src = card.image
            imageElement.alt = card.title


            const linkElement = document.createElement('a')
            linkElement.href = card.link
            linkElement.textContent = 'Ver mais'

            cardElement.appendChild(titleElement)
            cardElement.appendChild(imageElement)
            cardElement.appendChild(linkElement)

            cardContainer.appendChild(cardElement)

        })
    }).catch(error => {
        console.error('Error on fetching json: ', error)
    })