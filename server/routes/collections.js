const express = require('express')
const collectionsRouter = express.Router()
//const modelName = model

collectionsRouter.get('/exhibits/:departmentId', (req, res, next) => {
    axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects')
})

module.exports = collectionsRouter