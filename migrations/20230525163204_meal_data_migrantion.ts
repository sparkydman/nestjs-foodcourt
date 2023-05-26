exports.up = function (knex) {
  return knex.schema.createTable('meal_data', function (table) {
    table.primary(['id']);
    table.string('id').notNullable();
    table.string('name', 255).notNullable();
    table.boolean('active').notNullable();
    table.integer('amount').notNullable();
    table.string('brand_id').notNullable();
    table.string('meal_id').notNullable();
    table.string('item_type', 50).notNullable();
    table.boolean('new').notNullable();
    table.timestamps();

    table.foreign('brand_id').references('id').inTable('brands');
    table.foreign('meal_id').references('id').inTable('meals');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('meal_data');
};

exports.config = { transaction: true };
