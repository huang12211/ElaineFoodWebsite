"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../../db/db");
const schema_1 = require("../../../db/schema/schema");
const drizzle_orm_1 = require("drizzle-orm");
//Add your CRUD API below;
//Add the ability for a user to rate a recipe 
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    //console.log("email is: ", email);
    const emailExists = db_1.db.select().from(schema_1.users).where((0, drizzle_orm_1.eq)(schema_1.users.email, email));
    if (!email || email == null) {
        return res.status(400).json({ success: false, data: null, message: "Email is required to add user" });
    }
    else if (emailExists != null) {
        return res.status(400).json({ success: false, data: null, message: "Unable to add user; email is already assigned to an existing user in the database" });
    }
    try {
        yield db_1.db.insert(schema_1.users).values({ email: email });
        return res.status(201).json({ success: true, data: { email }, message: "User Added Successfully" });
    }
    catch (error) {
        return res.status(500).json({ success: false, data: null, message: "Unable to add user" });
    }
});
exports.default = createUser;
