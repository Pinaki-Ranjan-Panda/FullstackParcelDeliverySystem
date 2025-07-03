import Parcel from "../models/Parcel.js";

// ADD PARCEL
export const createParcel = async (req, res) => {
  try {
    const newParcels = Parcel(req.body);
    const parcel = await newParcels.save();
    res.status(201).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET ALL PARCELS
export const getAllParcels = async (req, res) => {
  try {
    const parcels = await Parcel.find().sort({ createdAt: -1 });
    res.status(200).json(parcels);
  } catch (error) {
    res.status(500).json(error);
  }
};

// UPDATE PARCEL
export const updateParcel = async (req, res) => {
  try {
    const parcel = await Parcel.findById(req.params.id);
    res.status(200).json(updatedParcel);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET ONE PARCEL
export const getParcel = async (req, res) => {
  try {
    const parcel = await Parcel.findById(req.params.id);
    res.status(200).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
};
// GET USER PARCELS
export const getUserParcels = async (req, res) => {
  try {
    const parcels = await Parcel.find({ senderemail: req.body.email }).sort({
      createdAt: -1,
    });
    res.status(200).json(parcels);
  } catch (error) {
    res.status(500).json(error);
  }
};
// DELETE PARCEL
export const deleteParcel = async (req, res) => {
  try {
    await Parcel.findByIdAndDelete(req.params.id);
    res.status(201).json({ message: "Parcel deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting parcel", error: error.message });
  }
};
