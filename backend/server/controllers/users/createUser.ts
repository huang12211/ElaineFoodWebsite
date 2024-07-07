import { Request, Response } from 'express';
import { db } from '../../../db/db';
import { users } from '../../../db/schema/schema';


//Add your CRUD API below;
//Add the ability for a user to rate a recipe 
const createUser = async (req: Request, res: Response) => {
    const { email }: { email: string } = req.body;
    console.log("email is: ", email);

    if (!email || email == null){
        return res.status(400).json({success: false, data: null, message: "email is required"});
    }

    try{
        await db.insert(users).values({email: email});
        return res.status(201).json({success: true, data: {email}, message: "User Added Successfully"});
    } catch (error){
        return res.status(500).json({ success: false, data: null, message: "Unable to add user"});
    } 
};

export default createUser;