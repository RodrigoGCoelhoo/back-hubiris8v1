const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit:10,
    host: "mysql.hubiris8.kinghost.net",
    user: "hubiris8_add4",
    password: "rodrigo2021",
    database: "hubiris8",
})


let hubDB = {};

hubDB.shoppings = () => {
    return new Promise((resolve, reject) => {
         pool.query("SELECT * FROM Shoppings", (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
         });
    });
 };

 hubDB.shoppingsID = (id) => {
    return new Promise((resolve, reject) => {
         pool.query("SELECT * FROM Shoppings WHERE id = ?", [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
         });
    });
 };

 hubDB.statusFiles = () => {
    return new Promise((resolve, reject) => {
         pool.query("SELECT * FROM StatusFiles", (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
         });
    });
 };

 hubDB.statusFilesID = (id) => {
    return new Promise((resolve, reject) => {
         pool.query("SELECT * FROM StatusFiles WHERE id = ?", [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
         });
    });
 };

hubDB.statusPC = () => {
    return new Promise((resolve, reject) => {
         pool.query("SELECT * FROM StatusPC", (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
         });
    });
 };

 hubDB.statusPCID = (id) => {
    return new Promise((resolve, reject) => {
         pool.query("SELECT * FROM StatusPC WHERE id = ?", [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
         });
    });
 };

 hubDB.statusSightCorp = () => {
    return new Promise((resolve, reject) => {
         pool.query("SELECT * FROM StatusSightCorp", (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
         });
    });
 };

 hubDB.statusSightCorpID = (id) => {
    return new Promise((resolve, reject) => {
         pool.query("SELECT * FROM StatusSightCorp WHERE id = ?", [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
         });
    });
 };

 hubDB.tamanhoFiles = () => {
    return new Promise((resolve, reject) => {
         pool.query("SELECT * FROM TamanhoFiles", (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
         });
    });
 };

 hubDB.tamanhoFilesID = (id) => {
    return new Promise((resolve, reject) => {
         pool.query("SELECT * FROM TamanhoFiles WHERE id = ?", [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
         });
    });
 };



 module.exports = hubDB;