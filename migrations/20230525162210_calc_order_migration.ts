exports.up = function (knex) {
  return knex.schema.createTable('calculated_orders', function (table) {
    table.primary(['id']);
    table.string('id').notNullable();
    table.integer('total_amount').notNullable();
    table.boolean('free_delivery').notNullable().defaultTo(false);
    table.integer('delivery_fee').notNullable().defaultTo(0);
    table.integer('service_charge').notNullable().defaultTo(0);
    table.string('lat', 50).notNullable();
    table.string('lng', 50).notNullable();
    table.string('cokitchen_polygon_id').notNullable();
    table.string('user_id').notNullable();
    table.string('cokitchen_id').notNullable();
    table.boolean('pickup').notNullable().defaultTo(false);
    table.integer('prev_price').notNullable().defaultTo(0);
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('calculated_orders');
};

exports.config = { transaction: true };
