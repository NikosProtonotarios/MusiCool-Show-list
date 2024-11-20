const { 
    getAllMusicals, 
    createMusical, 
    updateMusical, 
    deleteMusical,
} = require("../controllers/musical.Controller")

const express = require("express");
const router = express.Router();

router.get("/", getAllMusicals);
router.post("/create", createMusical);
router.put("/:id", updateMusical);
router.delete("/:id", deleteMusical);

module.exports = router;