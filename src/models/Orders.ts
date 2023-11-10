import {Model, ModelObject} from "objection";

export class OrdersModel extends Model {
    id!:number;
    email!: string;
    car_id!: number;
    start_rent!: Date;
    finish_rent!: Date;
    price!: number;
    status!: string;

    static get tableName(){
        return "orders";
    }
}


export type Orders = ModelObject<OrdersModel>