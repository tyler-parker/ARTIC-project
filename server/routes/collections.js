const express = require('express')
const collectionsRouter = express.Router()
const likesModel = require('../../model/favorite.js')

collectionsRouter.get("/", (req, res, next) => {
    likesModel.find((err, collections) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(collections)
    })
})

collectionsRouter.get("/collectionID", (req, res, next) => {
    const collectionID = req.params.collectionID
    const foundCollection = likesModel.find(collection => collection._id === collectionID)
    if (!foundCollection) {
        const error = new Error(`The collection with id ${collectionID} was not found.`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundCollection)
})

collectionsRouter.post("/", (req, res, next) => {
    const newCollection = new likesModel(req.body)
    newCollection.save((err, savedCollection) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedCollection)
    })
})

collectionsRouter.put("/:collectionID", (req, res, next) => {
    likesModel.findOneAndUpdate(
        {_id: req.params.collectionID},
        req.body,
        { new: true },
        (err, updatedCollection) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedCollection)
        }
    )
})

module.exports = collectionsRouter