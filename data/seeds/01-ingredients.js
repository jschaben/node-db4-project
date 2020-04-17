
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, name: "1 Cup of Flour" },
        { id: 2, name: "A Stick of Butter" },
        { id: 3, name: "1/4 Cup of Sugar" },
        { id: 4, name: "An Egg" }
      ]);
    });
};
