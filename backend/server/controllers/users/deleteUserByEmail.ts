import { Request, Response } from 'express';
import { db } from '../../../db/db';
import { users } from '../../../db/schema/schema';
import { eq } from 'drizzle-orm';

//Add your CRUD API below;
//Add the ability for a user to delete a rating for a recipe
const deleteUserByEmail = async (req: Request, res: Response) => {
    const email = req.params;

    try{
        // await db.delete(users).where(eq(users.email, email));
        return res.status(200).json({success: true, message: "User Deleted Successfully"});
    } catch (error){
        return res.status(500).json({ success: false, data: null, message: "Unable to delete user"});
    } 
};

export default deleteUserByEmail;