window.addEventListener('load', () => {
    document.getElementById('submit-btn').addEventListener('click', async (event) => {
        event.preventDefault()

        const name = document.getElementById('name').value

        const user_response = await fetch(window.location + `riot/user?name=${encodeURIComponent(name)}`)
        const { accountId } = await user_response.json()

        const match_response = await fetch(window.location + `riot/matches?accountId=${encodeURIComponent(accountId)}`)
        const { matches } = await match_response.json()

        const tableBody = document.getElementById('tbody')

        for (let { champion, lane, role } of matches) {
            const championTd = document.createElement('td')
            championTd.innerHTML = champion

            const laneTd = document.createElement('td')
            laneTd.innerHTML = lane

            const roleTd = document.createElement('td')
            roleTd.innerHTML = role

            const row = document.createElement('tr')
            
            row.appendChild(championTd)
            row.appendChild(laneTd)
            row.appendChild(roleTd)

            tableBody.appendChild(row)
        }
    })
})
