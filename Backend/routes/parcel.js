import express from 'express';
import { createParcel, getAllParcels, updateParcel, getParcel, getUserParcels, deleteParcel } from '../controlllers/parcel.js';

const router = express.Router();

// ADD PARCEL
router.post("/", createParcel);

// GET ALL PARCELS
router.get("/", getAllParcels);

// UPDATE PARCEL
router.put("/:id", updateParcel);

// GET ONE PARCEL
router.get("/find/:id", getParcel);

// GET USER PARCELS
router.post("/me", getUserParcels);

// DELETE PARCEL
router.delete("/:id", deleteParcel);

export default router;