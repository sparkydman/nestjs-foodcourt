exports.up = function (knex) {
  return knex.schema.createTable('brands', function (table) {
    table.primary(['id']);
    table.string('id', 255).notNullable();
    table.string('name', 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('brands');
};

exports.config = { transaction: true };
