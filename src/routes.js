const express = require("express");
const router = express.Router();
const Campus = require("./models/campus");

router.get("/", (req, res) => {
    console.log("/ route called");
    res.send(
        "<h1>Welcome to my API, these are the available routes:</h1>" +
        "<h2>/</h2>" +
        `Where you are right now` +
        `<hr/>` +
        `<h2>/Campus</h2>` +
        `Returns all campuses in the database using . find()` +
        `<hr/>`
    );
});

router.get("/campus", async(req, res) => {
    console.log(`/campus route called`);
    try {
        res.json(await Campus.find());
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;