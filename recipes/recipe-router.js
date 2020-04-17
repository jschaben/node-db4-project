const router = require("express").Router();

const db = require("./recipeHelper");

router.get("/", (req, res) => {
  db.getRecipes().then(recipes => {
    res.status(200).json(recipes);
  });
});

module.exports = router;