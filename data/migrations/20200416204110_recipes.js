
exports.up = function(knex) {
    return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();

      tbl
        .string("recipe_name", 255)
        .notNullable()
        .unique();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();

      tbl.string("name", 255).notNullable();
    })
    .createTable("steps", tbl => {
      tbl.primary(["recipe_id", "ingredient_id"]);

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl.string("instructions", 255).notNullable();

      tbl.float("quantity").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("steps")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("recipes");
};
