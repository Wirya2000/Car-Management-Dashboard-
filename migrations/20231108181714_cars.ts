import { Knex } from "knex";

const CARS:string = "cars"

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(CARS, (table: Knex.TableBuilder)=>{
    table.increments("id").primary();
    table.string("name", 50).notNullable();
    table.string("type", 20).notNullable();
    table.integer("price").notNullable();
    table.string("photo", 255).notNullable();
    table.date("start_rent").notNullable();
    table.date("finish_rent").notNullable();
    table.timestamp("created_at").notNullable();
    table.foreign('created_user_id').references('user.id')
    table.timestamp("updated_at").notNullable();
    table.foreign('updated_user_id').references('user.id')
    table.foreign('deleted_user_id').references('user.id')
    // table.increments("id").primary();
    // table.string("plate", 10).notNullable();
    // table.string("manufacture", 100).notNullable();
    // table.string("model", 100).notNullable();
    // table.string("image", 255).notNullable();
    // table.integer("rent_per_day", 50).notNullable();
    // table.integer("capacity", 2).notNullable();
    // table.string("description", 255).notNullable();
    // table.string("available_at", 25).notNullable();
    // table.string("transmission", 10).notNullable();
    // table.boolean("available").notNullable();
    // table.string("type", 20).notNullable();
    // table.integer("year", 4).notNullable();

    // table.string("name", 100).notNullable();
    // table.integer("car_type_id").notNullable();
    // table.integer("car_brand_id").notNullable();
    // table.boolean("availability").notNullable();
    // table.integer("capacity", 2).notNullable();
    // table.string("image_url", 255).notNullable();
    // table.integer("price", 100).notNullable();
    // table.string("desc", 255).notNullable();
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(CARS)
}

