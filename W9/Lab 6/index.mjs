import express from 'express';
import mysql from 'mysql2/promise';

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

//for Express to get values using POST method
app.use(express.urlencoded({extended:true}));

//setting up database connection pool
const pool = mysql.createPool({
    host: "jsftj8ez0cevjz8v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "rq63ro5rtenc2twm",
    password: "y7mdpsql6fhn9lrp",
    database: "x6ij0hyll3qwgfjk",
    connectionLimit: 10,
    waitForConnections: true
});
const conn = await pool.getConnection();

//routes
app.get('/', async (req, res) => {
    res.render("home.ejs");
});

app.get("/allQuotesAlphabetical", async(req, res) => {
    let sql = "SELECT * FROM `quotes` ORDER BY quote;";
    const [rows] = await conn.query(sql);
    res.render("quotes.ejs",{result: rows});
});//alphabetical

app.get("/quotesWithLife", async(req, res) => {
    let sql = "SELECT * FROM `quotes` WHERE quote LIKE '%life%';";
    const [rows] = await conn.query(sql);
    res.render("quotes.ejs",{result: rows});
});//quotesWithLife

app.get("/likesBetween", async(req, res) => {
    let sql = "SELECT * FROM `quotes` WHERE likes BETWEEN 50 AND 100;";
    const [rows] = await conn.query(sql);
    res.render("quotes.ejs",{result: rows});
});//between 50 and 100

app.get("/top3Quotes", async(req, res) => {
    let sql = "SELECT * FROM `quotes` ORDER BY likes DESC LIMIT 3;";
    const [rows] = await conn.query(sql);
    res.render("quotes.ejs",{result: rows});
});//top3Quotes

app.get("/authorPortrait", async(req, res) => {
    let sql = "SELECT portrait FROM `authors`;";
    const [rows] = await conn.query(sql);
    res.render("portrait.ejs",{result: rows});
});//authorPortrait

app.get("/nameAndBio", async(req, res) => {
    let sql = "SELECT firstName, lastName, biography FROM `authors`";
    const [rows] = await conn.query(sql);
    res.render("nameAndBio.ejs",{result: rows});
});//authorNameAndBio

app.get("/inspirationalQuotes", async(req, res) => {
    let sql = "SELECT * FROM `quotes` WHERE category = 'Inspirational';";
    const [rows] = await conn.query(sql);
    res.render("quotes.ejs",{result: rows});
});//InspirationalQuotes

app.get("/portraitAndQuotes", async(req, res) => {
    let sql = "SELECT * FROM authors a JOIN quotes q ON a.authorId = q.authorId;";
    const [rows] = await conn.query(sql);
    res.render("portraitandquotes.ejs",{result: rows});
});//portraitAndQuotes

app.get("/portraitAndQuotes", async(req, res) => {
    let sql = "SELECT * FROM authors a JOIN quotes q ON a.authorId = q.authorId;";
    const [rows] = await conn.query(sql);
    res.render("portraitandquotes.ejs",{result: rows});
});//portraitAndQuotes

app.get("/numberOfCountry", async(req, res) => {
    let sql = "SELECT country, COUNT(country) AS CNT FROM `authors` GROUP BY country;";
    const [rows] = await conn.query(sql);
    res.render("numberOfCountry.ejs",{result: rows});
});//number of country born

app.get("/dbTest", async(req, res) => {
    let sql = "SELECT CURDATE()";
    const [rows] = await conn.query(sql);
    res.send(rows);
});//dbTest

app.listen(3000, ()=>{
    console.log("Express server running")
})