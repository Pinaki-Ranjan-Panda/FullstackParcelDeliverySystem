const express = require('express');
const router = express.Router();
const { createParcel, getAllParcels, updateParcel, getParcel } = require('../controlllers/parcel');
const { get } = require('mongoose');

//ADD PARCEL
router.post("/",createParcel)

//GET ALL PARCELS
router.get("/",getAllParcels)

//UPDATE PARCEL
router.put("/:id",updateParcel)

//GET ONE PARCEL
router.get("/find/:id",getParcel)

//GET USER PARCELS
router.post("/me",getUserParcels)

//DELETE PARCEL
router.delete("/:id",deleteParcel)

module.exports = router;