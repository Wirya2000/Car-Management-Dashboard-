import { Knex } from "knex";

const ORDERS:string = "orders";


export async function up(knex: Knex): Promise<void> {
	return knex.schema
		.createTable(ORDERS, (table: Knex.TableBuilder)=>{
			table.increments("id").primary();
			table.string("email", 50).notNullable();
			table.integer("car_id").unsigned();
			table.date("start_rent").notNullable();
			table.date("finish_rent").notNullable();
			table.integer("price").notNullable();
			table.string("status", 50).notNullable();
			table.foreign("car_id").references("cars.id");
		});
	// .table('cars', function (table) {
	//   table.foreign('car_id').references('cars.id')
	// })
}


export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable(ORDERS);
}

