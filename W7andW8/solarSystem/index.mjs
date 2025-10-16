//npm init -y
//edit file format as mjs

import express from 'express';
import fetch from 'node-fetch';
const solarSystem = (await import('npm-solarsystem')).default;

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

//root route
app.get('/', async (req, res) => {

   //Random Image from Pixabay API
   let riResponse = await fetch("https://pixabay.com/api/?key=20426927-497d14db9c234faf7d0df8317&per_page=50&orientation=horizontal&q=sports+car");
   let riData = await riResponse.json();
   let riURL = riData.hits[0].largeImageURL;

   console.log(riURL);
   
   res.render('home.ejs',{riURL});
});


app.get('/planet', (req, res) => {
   let planet_name = req.query.planetName;
   let planetInfo = solarSystem[`get${planet_name}`]();
   //console.log(planetInfo);
   res.render('planetInfo.ejs', {planetInfo,planet_name});
});


//mercury route
// app.get('/mercury', (req, res) => {
//    let planetInfo = solarSystem.getMercury();
//    console.log(planetInfo);
//    res.render('planetIngo.ejs', {planetInfo,planet_name});
// });


//venus route. no needed eventually
// app.get('/venus', (req, res) => {
//    let planetInfo = solarSystem.getVenus();
//    console.log(planetInfo);
//    res.render('venus.ejs', {planetInfo});
// });


app.listen(3000, () => {
   console.log('server started');
});