exports.up = function (knex) {
  return knex.schema.createTable('images', function (table) {
    table.primary(['id']);
    table.string('id').notNullable();
    table.string('item_id').notNullable();
    table.string('url').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('images');
};

exports.config = { transaction: true };
