import { Knex } from "knex";

const CAR_TYPES:string = "car_types";

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable(CAR_TYPES, (table: Knex.TableBuilder)=>{
		table.increments("id").primary();
		table.string("name", 100).notNullable();
	});
}


export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable(CAR_TYPES);
}

