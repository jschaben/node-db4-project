
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          recipe_id: 1,
          ingredient_id: 1,
          instructions: "Add Flour",
          quantity: 1
        },
        {
          recipe_id: 1,
          ingredient_id: 3,
          instructions: "Add sugar",
          quantity: 1
        },
        {
          recipe_id: 2,
          ingredient_id: 4,
          instructions: "Add Egg",
          quantity: 3
        },
        {
          recipe_id: 3,
          ingredient_id: 1,
          instructions: "Add Flour",
          quantity: 1
        }
      ]);
    });
};
