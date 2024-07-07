import { Request, Response } from 'express';
import { db } from '../../../db/db';
import { users } from '../../../db/schema/schema';
import { eq } from "drizzle-orm";


//Add your CRUD API below;
//Add the ability for a user to rate a recipe 
const createUser = async (req: Request, res: Response) => {
    const { email }: { email: string } = req.body;
    //console.log("email is: ", email);
    const emailExists = db.select().from(users).where(eq(users.email, email));

    if (!email || email == null){
        return res.status(400).json({success: false, data: null, message: "Email is required to add user"});
    }
    else if (emailExists != null){
        return res.status(400).json({success: false, data: null, message: "Unable to add user; email is already assigned to an existing user in the database"});
    }

    try{
        await db.insert(users).values({email: email});
        return res.status(201).json({success: true, data: {email}, message: "User Added Successfully"});
    } catch (error){
        return res.status(500).json({ success: false, data: null, message: "Unable to add user"});
    } 
};

export default createUser;