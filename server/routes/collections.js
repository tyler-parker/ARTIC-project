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
    likesModel.findOne({_id: req.params.collectionID}, (err, foundArtwork) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundArtwork)
    })
    // if (!foundCollection) {
    //     const error = new Error(`The collection with id ${collectionID} was not found.`)
    //     res.status(500)
    //     return next(error)
    // }
    // res.status(200).send(foundCollection)
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

collectionsRouter.delete(":/collectionID", (req, res) => {
    likesModel.findOneAndDelete(
        {_id: req.params.collectionID},
        (err) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted item with id ${req.params.collectionID} from the database.`)
        }
    )
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