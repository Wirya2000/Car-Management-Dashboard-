/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
// const request = require("supertest");
// const appRoute = require("../../../index.ts");

// describe("POST /v1/cars/create", () => {
//   test("should create car with response status 200", async () => {
//     const id_car_brand = 12345;
//     const name = "test123";

//     await request(appRoute)
//       .post("/v1/cars/create")
//       .send({id_car_brand, name})
//       .set("Content-Type", "application/json")
//       .then((res: any)=> {
//         console.log({res});
//         expect(res.statusCode).toBe(200)
//       })
//   },);
// });


const request = require("supertest");
const appRoute = require("../../../index");

let token = "";

beforeAll(async () => {
	const mockDataReBody = {
		email: "coba@gmail.com", 
		password: "password"
	};
	const response = await request(appRoute)
		.post("/v1/users/login")
		.send(mockDataReBody);
  
	console.log("masuk");
	token = response.body.token;
});
console.log(token);

describe("GET /v1/cars/", ()=> {
	test("should return car list w/ response status 200", async () => {

		await request(appRoute)
			.get("/v1/cars/")
		// .send(mockDataReBody)
			.set("Content-Type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.then((res: any)=> {
				expect(res.statusCode).toBe(200);
			});
	});
});
describe("POST /v1/cars/create", ()=> {
	test("should create car w/ response status 200", async () => {
		const mockDataReBody = {
			name: "xpander",
			type: "mitsubishi",
			price: "500000",
			photo: "sadasd",
			start_rent: "2024-07-21",
			finish_rent: "2024-07-22",
			created_at: "2024-07-21",
			updated_at: "2024-07-21",
		};

		await request(appRoute)
			.post("/v1/cars/create")
			.send(mockDataReBody)
			.set("Content-Type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.then((res: any)=> {
				expect(res.statusCode).toBe(200);
			});
	});
});
describe("GET /v1/cars/:id", ()=> {
	test("should get car data w/ response status 200", async () => {

		await request(appRoute)
			.get("/v1/cars/2")
			.set("Content-Type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.then((res: any)=> {
				expect(res.statusCode).toBe(200);
			});
	});
});
describe("PUT /v1/cars/:id", ()=> {
	test("should update car data w/ response status 200", async () => {
		const mockDataReBody = {
			name: "xpander",
			type: "mitsubishi",
			price: "500000",
			photo: "sadasd",
			start_rent: "2024-07-21",
			finish_rent: "2024-07-22",
			created_at: "2024-07-21",
			updated_at: "2024-07-21",
		};

		await request(appRoute)
			.put("/v1/cars/4")
			.send(mockDataReBody)
			.set("Content-Type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.then((res: any)=> {
				expect(res.statusCode).toBe(200);
			});
	});
});

describe("DELETE /v1/cars/:id", ()=> {
	test("should delete car w/ response status 200", async () => {

		await request(appRoute)
			.delete("/v1/cars/4")
			.set("Content-Type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.then((res: any)=> {
				expect(res.statusCode).toBe(200);
			});
	});
});