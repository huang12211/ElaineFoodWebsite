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
//Add the ability for a user to delete a rating for a recipe
const deleteUserByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userEmail = req.params.userEmail;
    //console.log("userEmail is: ", userEmail);
    // const { email }: { email: string } = req.body;
    // console.log("email is: ", email);
    try {
        const user = yield db_1.db.select().from(schema_1.users).where((0, drizzle_orm_1.eq)(schema_1.users.email, userEmail));
        yield db_1.db.delete(schema_1.users).where((0, drizzle_orm_1.eq)(schema_1.users.email, userEmail));
        return res.status(200).json({ success: true, data: user, message: "User email found; User Deleted Successfully" });
    }
    catch (error) {
        return res.status(500).json({ success: false, data: error, message: "Unable to delete user" });
    }
});
exports.default = deleteUserByEmail;
