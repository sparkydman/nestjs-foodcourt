exports.up = function (knex) {
  return knex.schema.createTable('logs', function (table) {
    table.primary(['id']);
    table.string('id').notNullable();
    table.string('order_id').notNullable();
    table.string('description').notNullable();

    table.foreign('order_id').references('id').inTable('orders');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('logs');
};

exports.config = { transaction: true };
