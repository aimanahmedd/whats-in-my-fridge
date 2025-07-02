const axios = require('axios')
const express = require('express')
const router = express.Router()
module.exports = router

//getting the ingredients from frontend 
// and essentially creating recipe
router.post('/', async (req, res) => {
    let ingred = req.body.ingredients; //(meant to represent ingredients)
    try {
        // 1. Get recipes by ingredients
        const findResp = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', {
            params: {
                ingredients: ingred,
                number: 5,
                apiKey: process.env.SPOON_API_KEY
            }
        });
        const recipes = findResp.data;

        // 2. For each recipe, get full info
        const infoPromises = recipes.map(recipe =>
            axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/information`, {
                params: { apiKey: process.env.SPOON_API_KEY }
            }).then(resp => resp.data)
        );
        const fullRecipes = await Promise.all(infoPromises);

        // 3. Send full info to frontend
        res.json(fullRecipes);
    } catch (err) {
     if (err.response) {
        console.log('Spoonacular error:', err.response.data);
        res.status(500).json({ error: err.response.data });
    } else {
        console.log(err);
        res.status(500).json({ error: 'Failed to fetch recipes' });
    }
    }
})

