exports.up = function (knex) {
  return knex.schema.createTable(
    'order_total_amount_history',
    function (table) {
      table.primary(['id']);
      table.string('id').notNullable();
      table.string('order_id').notNullable();
      table.integer('description').notNullable();

      table.foreign('order_id').references('id').inTable('orders');
    },
  );
};

exports.down = function (knex) {
  return knex.schema.dropTable('order_total_amount_history');
};

exports.config = { transaction: true };
