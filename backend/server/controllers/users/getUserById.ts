import { Request, Response } from 'express';
import { db } from '../../../db/db';
import { users } from '../../../db/schema/schema';
import { eq } from 'drizzle-orm';


//Add your CRUD API below;
//Add the ability for a user to rate a recipe 
const getUserById = async (req: Request, res: Response) => {
    const user_id = req.params;

    try{
        const user = await db.select().from(users).where(eq(users.id, Number(user_id)));
        return res.status(200).json({success: true, data: user});
    } catch (error){
        return res.status(500).json({ success: false, data: null, message: "Unable to get all users"});
    } 
};

export default getUserById;