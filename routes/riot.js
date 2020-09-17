const axios = require('axios');
const express = require('express');

const router = express.Router();
const http = axios.create({ baseURL: 'https://na1.api.riotgames.com', headers: { 'X-Riot-Token': 'RGAPI-af189578-573f-4960-ab52-bea0049dd699' } })

router.get('/user', async (req, res) => {
    try {
        const username = req.query.name

        const { data } = await http.get(`lol/summoner/v4/summoners/by-name/${encodeURIComponent(username)}`)

        return res.send(data)
    } catch (e) {
        return res.status(500).send(e)
    }
})

router.get('/matches', async (req, res) => {
    try {
        const accountId = req.query.accountId

        const { data } = await http.get(`lol/match/v4/matchlists/by-account/${encodeURIComponent(accountId)}`)

        return res.send(data)
    } catch (e) {
        return res.status(500).send(e)
    }
})

router.get('/')

module.exports = router
