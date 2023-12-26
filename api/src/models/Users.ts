import {Model} from "objection";
// import {Model, ModelObject} from "objection";

export class UserModel extends Model {
	id!:number;
	name!:string;
	email!: string;
	password!: string;
	role!: string;

	static get tableName(){
		return "users";
	}
}