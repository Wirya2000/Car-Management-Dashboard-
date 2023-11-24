import { Knex } from "knex";

const  encryptPassword = require("./../utilities/encryptPassword")


export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("table_name").del();

    // Inserts seed entries
    await knex("table_name").insert([
        { name: "coba1", email: "coba@gmail.com", password:  encryptPassword("password"), role: "sa"},
    ]);
};
