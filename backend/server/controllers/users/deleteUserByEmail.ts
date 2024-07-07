import { Request, Response } from 'express';
import { db } from '../../../db/db';
import { users } from '../../../db/schema/schema';
import { eq } from 'drizzle-orm';

//Add your CRUD API below;
//Add the ability for a user to delete a rating for a recipe
const deleteUserByEmail = async (req: Request, res: Response) => {
    const userEmail:string = req.params.userEmail;
    //console.log("userEmail is: ", userEmail);
    // const { email }: { email: string } = req.body;
    // console.log("email is: ", email);
    

    try{
        const user = await db.select().from(users).where(eq(users.email, userEmail));
        await db.delete(users).where(eq(users.email, userEmail));
        return res.status(200).json({success: true, data: user, message: "User email found; User Deleted Successfully"});
    } catch (error){
        return res.status(500).json({ success: false, data: error, message: "Unable to delete user"});
    } 
};

export default deleteUserByEmail;