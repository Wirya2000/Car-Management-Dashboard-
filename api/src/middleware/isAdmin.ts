import {Request, Response, NextFunction} from "express";

const isAdmin = (req:Request, res:Response, next:NextFunction) => {
	console.log("masuk admin");
	if(req.query.role === "admin"){
		next();
		return;
	}

	res.status(401).json({
		status: "unauthorized", 
		message: "you are not admin, please login as administrator"
	});
};


module.exports = isAdmin;