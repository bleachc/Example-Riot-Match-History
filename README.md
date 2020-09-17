# JSON Lecture Riot Match History

## Run the application

```bash
npm install
npm start
```

Update the Riot Token in the server code, line 5:

```js
const http = axios.create({ baseURL: 'https://na1.api.riotgames.com', headers: { 'X-Riot-Token': '<YOUR TOKEN HERE>' } })
```

View the application: http://localhost:3000

