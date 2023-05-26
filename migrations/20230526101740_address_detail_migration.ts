exports.up = function (knex) {
  return knex.schema.createTable('address_details', function (table) {
    table.primary(['id']);
    table.string('id').notNullable();
    table.string('calculated_order_id').notNullable();
    table.string('city').notNullable();
    table.string('address_line').notNullable();
    table.string('building_number').notNullable();

    table
      .foreign('calculated_order_id')
      .references('id')
      .inTable('calculated_orders');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('address_details');
};

exports.config = { transaction: true };
