const express = require("express");
const db = require("../db"); 
const router = express.Router();

router.get("/ips", async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        let results = await db.ips();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get("/statusfiles", async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        let results = await db.statusFiles();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get("/statusfiles/:id", async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        let results = await db.statusFilesID(req.params.id);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get("/statuspc", async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        let results = await db.statusPC();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get("/statuspc/:id", async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        let results = await db.statusPCID(req.params.id);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get("/statussightcorp", async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        let results = await db.statusSightCorp();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get("/statussightcorp/:id", async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        let results = await db.statusSightCorpID(req.params.id);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get("/tamanhofiles", async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        let results = await db.tamanhoFiles();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get("/tamanhofiles/:id", async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        let results = await db.tamanhoFilesID(req.params.id);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get("/wrongcapturewindow", async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        let results = await db.wrongCaptureWindow();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get("/wrongcapturewindow/:id", async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        let results = await db.wrongCaptureWindowID(req.params.id);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get("/imgstatus", async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        let results = await db.imgStatus();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get("/imgstatus/:id", async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        let results = await db.imgStatusID(req.params.id);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});


module.exports = router;