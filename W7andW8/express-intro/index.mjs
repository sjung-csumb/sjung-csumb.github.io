import express from 'express';

const quotes = (await import("success-motivational-quotes")).default;
const app = express();


//select engine 
app.set("view engine", "ejs");  //We are going to use ejs as rendering engine
app.use(express.static("public"));


//routes
//root route
app.get('/', (req, res) => {
  // res.send('<h1>Hello World</h1>')
  let temp = quotes.getTodaysQuote();
  console.log(temp);
  res.render("home.ejs", {temp})
  res.render("home.ejs")
  //Q. It seems like sending the text itself into the serser. Do we have to set the parsing protocol by ourself?
});


//Starts the web server
app.listen(3000, () => {
  console.log('server started')
});