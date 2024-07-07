import { Request, Response } from 'express';
import { db } from '../../../db/db';
import { users } from '../../../db/schema/schema';
import { eq } from 'drizzle-orm';


//Add your CRUD API below;
//Add the ability for a user to rate a recipe 
const getUserByEmail = async (req: Request, res: Response) => {
    const userEmail = req.params.userEmail;
    console.log("userEmail is: ", userEmail);

    try{
        const user = await db.select().from(users).where(eq(users.email, userEmail));
        return res.status(200).json({success: true, data: user});
    } catch (error){
        return res.status(500).json({ success: false, data: null, message: "Unable to get user with that email"});
    } 
};

export default getUserByEmail;