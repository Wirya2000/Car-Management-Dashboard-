import {Model, ModelObject} from "objection";

export class CarsModel extends Model {
	id!:number;
	name!: string;
	type!: string;
	price!: number;
	photo!: string;
	start_rent!: Date;
	finish_rent!: Date;
	created_at!: Date;
	updated_at!: Date;
	created_user_id!: number;
	updated_user_id!: number;
	deleted_user_id!: number;

	static get tableName(){
		return "cars";
	}
}


export type Cars = ModelObject<CarsModel>