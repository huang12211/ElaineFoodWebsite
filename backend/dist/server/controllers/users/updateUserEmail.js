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
const updateUserEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const userId = req.params.userId;
    try {
        if (!userId) {
            return res.status(400).json({ success: false, message: "Please provide user_id to update" });
        }
        if (!email) {
            return res.status(400).json({ success: false, message: "Please provide new email" });
        }
        const updateData = {};
        if (email) {
            updateData.email = email;
        }
        yield db_1.db.update(schema_1.users).set(updateData).where((0, drizzle_orm_1.eq)(schema_1.users.id, Number(userId)));
        return res.status(200).json({ success: true, message: "Updated Successfully" });
    }
    catch (error) {
        return res.status(500).json({ success: true, message: "Cannot Update" });
    }
});
exports.default = updateUserEmail;
