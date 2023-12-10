import { UserModel } from "../models/Users";

interface Payload {
    name?: string;
    email: string;
    password?: string;
}

export default class UserRepository {
    async post(param: Payload){
        const name = param.name;
        const email  = param.email;
        const password  = param.password;
        const role = "m"

        return await UserModel.query().insert({name, email, password, role}).returning("*"); 
    };

    async postAdmin(param: Payload){
        const email  = param.email;
        const password  = param.password;
        const role = "a"

        return await UserModel.query().insert({email, password, role}).returning("*"); 
    };

    async get(email: string){
        // const password = param.password;

        return await UserModel.query().findOne({
            email
        }).returning("*");
    }


    async getById(param: number | string){
        console.log({param})
        return await UserModel.query().findOne({id: param}).returning("*")
    }

    async editRoleToAdmin(param: number | string){
        console.log({param})
        const id:number = Number(param)
        const role = "a"
        return await UserModel.query().where("id", '=', id).patch({ role: role })
    }
}