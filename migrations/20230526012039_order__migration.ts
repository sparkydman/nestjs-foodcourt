exports.up = function (knex) {
  return knex.schema.createTable('orders', function (table) {
    table.primary(['id']);
    table.string('id').notNullable();
    table.string('user_id', 255).notNullable();
    table.boolean('completed').notNullable().defaultTo(false);
    table.boolean('cancelled').notNullable().defaultTo(false);
    table.boolean('kitchen_cancelled').notNullable().defaultTo(false);
    table.boolean('kitchen_accepted').notNullable().defaultTo(false);
    table.boolean('kitchen_dispatched').notNullable().defaultTo(false);
    table.dateTime('kitchen_dispatched_time').nullable();
    table.dateTime('completed_time').nullable();
    table.string('rider_id').nullable();
    table.boolean('kitchen_prepared').notNullable().defaultTo(false);
    table.boolean('rider_assigned').notNullable().defaultTo(false);
    table.boolean('paid').notNullable().defaultTo(false);
    table.string('order_code').notNullable();
    table.string('calculated_order_id').notNullable();
    table.string('order_type_id').notNullable();
    table.string('meal_id').notNullable();

    table.dateTime('kitchen_verified_time').nullable();
    table.dateTime('kitchen_completed_time').nullable();
    table.boolean('shop_accepted').notNullable();
    table.boolean('shop_prepared').notNullable().defaultTo(false);
    table.integer('no_of_mealbags_delivered').nullable().defaultTo(0);

    table.integer('no_of_drinks_delivered').nullable();

    table.dateTime('rider_started_time').nullable();
    table.boolean('rider_started').nullable();
    table.dateTime('rider_arrived_time').nullable();

    table.boolean('rider_arrived').notNullable().defaultTo(false);
    table.boolean('is_failed_trip').notNullable().defaultTo(false);
    table.string('box_number').nullable();
    table.string('shelf_id').nullable();
    table.boolean('scheduled').notNullable().defaultTo(false);
    table.string('confirmed_by_id').nullable();
    table.string('completed_by_id').nullable();

    table.dateTime('scheduled_delivery_date').nullable();
    table.dateTime('scheduled_delivery_time').nullable();
    table.boolean('is_hidden').notNullable().defaultTo(false);
    table.timestamps();

    table
      .foreign('calculated_order_id')
      .references('id')
      .inTable('calculated_orders');
    table.foreign('order_type_id').references('id').inTable('order_types');
    table.foreign('meal_id').references('id').inTable('meals');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('orders');
};

exports.config = { transaction: true };
