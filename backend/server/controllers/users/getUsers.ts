import { Request, Response } from 'express';
import { db } from '../../../db/db';
import { users } from '../../../db/schema/schema';


//Add your CRUD API below;
//Add the ability for a user to rate a recipe 
const getUsers = async (req: Request, res: Response) => {
    try{
        const allUsers = await db.select().from(users);
        return res.status(200).json({success: true, data: allUsers});
    } catch (error){
        return res.status(500).json({ success: false, data: null, message: "Unable to get all users"});
    } 
};

export default getUsers;