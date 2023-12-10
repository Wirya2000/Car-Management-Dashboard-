import { Knex } from "knex";

const USERS:string = "users"


export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable(USERS, (table: Knex.TableBuilder)=>{
      table.increments("id").primary();
      table.string("name", 50).notNullable();
      table.string("email", 50).notNullable();
      table.string("password", 255).notNullable();
      table.string("role", 2).notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
}

