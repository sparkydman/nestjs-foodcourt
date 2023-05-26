exports.up = function (knex) {
  return knex.schema.createTable('meals', function (table) {
    table.primary(['id']);
    table.string('id').notNullable();
    table.string('name', 255).notNullable();
    table.boolean('active').notNullable();
    table.integer('amount').notNullable();
    table.string('brand_id').notNullable();
    table.string('meal_id').notNullable();
    table.string('item_type', 50).notNullable();
    table.boolean('new').notNullable();
    table.boolean('alcohol').notNullable().defaultTo(false);
    table.integer('item_no').nullable().defaultTo(0);
    table.string('summary').nullable();
    table.string('calories').nullable();
    table.boolean('is_addon').notNullable().defaultTo(false);
    table.boolean('is_combo').notNullable().defaultTo(false);
    table.integer('position').notNullable();
    table.integer('quantity').notNullable();
    table.boolean('home_page').notNullable().defaultTo(false);
    table.string('meal_tags').nullable();
    table.boolean('is_deleted').notNullable().defaultTo(false);
    table.string('order_note').nullable();
    table.string('description').nullable();
    table.integer('minimum_age').nullable();
    table.integer('available_no').nullable();
    table.string('meal_keywords').nullable();
    table.integer('internal_profit').nullable().defaultTo(0);
    table.string('meal_category_id').notNullable();
    table.string('meal_data_id').notNullable();
    table.string('calculated_order_id').notNullable();
    table.timestamps();

    table.foreign('brand_id').references('id').inTable('brands');
    table.foreign('meal_data_id').references('id').inTable('meal_data');
    table
      .foreign('calculated_order_id')
      .references('id')
      .inTable('calculated_orders');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('meals');
};

exports.config = { transaction: true };
