import { Knex } from "knex";

const  encryptPassword = require("./../utilities/encryptPassword")


export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("table_name").del();

    // Inserts seed entries
    await knex("table_name").insert([
        { name: "superadmin", email: "super@gmail.com", password:  encryptPassword("password"), role: "sa"},
    ]);
};
