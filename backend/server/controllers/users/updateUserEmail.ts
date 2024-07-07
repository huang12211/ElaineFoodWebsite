import { Request, Response } from "express";
import { db } from '../../../db/db';
import { users } from '../../../db/schema/schema';
import { eq } from "drizzle-orm";

const updateUserEmail = async (req: Request, res: Response) => {
  const { email }: { email: string } = req.body;
  const userId = req.params.userId;

  try {
    if (!userId) {
      return res.status(400).json({ success: false, message: "Please provide user_id to update" });
    }
    if (!email) {
      return res.status(400).json({ success: false, message: "Please provide new email" });
    }
    const updateData: { email?: string } = {};

    if (email) {
      updateData.email = email;
    }
    await db.update(users).set(updateData).where(eq(users.id, Number(userId)));
    return res.status(200).json({ success: true, message: "Updated Successfully" });
  } catch (error) {
    return res.status(500).json({ success: true, message: "Cannot Update" });
  }
};

export default updateUserEmail;