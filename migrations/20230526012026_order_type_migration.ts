enum OrderTypes {
  'CARD',
  'USSD',
  'TRANSFER',
}

exports.up = function (knex) {
  return knex.schema.createTable('order_types', function (table) {
    table.primary(['id']);
    table.string('id').notNullable();
    table.enu('name', [OrderTypes]).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('order_types');
};

exports.config = { transaction: true };
