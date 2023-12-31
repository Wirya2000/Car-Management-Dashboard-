import { Knex } from "knex";

const CAR_BRANDS:string = "car_brands"

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(CAR_BRANDS, (table: Knex.TableBuilder)=>{
    table.increments("id").primary();
    table.string("name", 100).notNullable();
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(CAR_BRANDS)
}

