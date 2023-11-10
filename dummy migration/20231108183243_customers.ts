import { Knex } from "knex";

const CUSTOMERS:string = "customers"

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(CUSTOMERS, (table: Knex.TableBuilder)=>{
    table.increments("id").primary();
    table.integer("car_id").notNullable();
    table.string("name", 255).notNullable();
    table.string("email", 255).notNullable();
    table.string("photo", 255).notNullable();
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(CUSTOMERS)
}

