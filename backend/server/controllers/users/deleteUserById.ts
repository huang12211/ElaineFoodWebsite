import { Request, Response } from 'express';
import { db } from '../../../db/db';
import { users } from '../../../db/schema/schema';
import { eq, or } from 'drizzle-orm';

//Add your CRUD API below;
//Add the ability for a user to delete a rating for a recipe
const deleteUserById = async (req: Request, res: Response) => {
    const userId = req.params.userId;
    //console.log("userId is: ", userId);
    try{
        const user = await db.select().from(users).where(eq(users.id, Number(userId)));
        await db.delete(users).where(eq(users.id, Number(userId))).returning({id: users.id});
        return res.status(200).json({success: true, data: user, message: "User ID found; User Deleted Successfully"});
    } catch (error){
        return res.status(500).json({ success: false, data: null, message: "Unable to delete user"});
    } 
};

export default deleteUserById;