
const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const {ShoppingList} = require('./models');

const jsonParser = bodyParser.json();
const app = express();

// log the http layer
app.use(morgan('common'));



// we're going to add some items to ShoppingList
// so there's some data to look at
// so there's some data to look at. Note that 
// normally you wouldn't do this. Usually your
// server will simply expose the state of the
// underlying database.


/*create a GET endpoint for /recipes.
//As with /shopping-list, you'll want to add a couple of recipes to the model when the server starts. 
//To add a recipe, do Recipes.create('chocolate milk', ['cocoa', 'milk', 'sugar']), where the first argument is the recipe name, 
//and the second is an array of ingredients.
//When clients make a request to /recipes, the server should return a JSON array of objects representing all currently stored recipes.*/
ShoppingList.create('beans', 2);
ShoppingList.create('tomatoes', 3);
ShoppingList.create('peppers', 4);
Recipes.create('chocolate milk', ['cocoa', 'milk', 'sugar']);
Recipes.create('egg foo young', ['eggs', 'milk', 'butter']);
Recipes.create('meatloaf', ['ground beef', 'bbq sauce', 'eggs', 'crackers']);
// when the root of this router is called with GET, return
// all current ShoppingList items
app.get('/shopping-list', (req, res) => {
  res.json(ShoppingList.get());
});

app.get('/recipes', (req, res) => {
	res.json(recipes.get();
});


app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
