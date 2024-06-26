import express from "express";
import { getUsers } from "../db/users";

export const getAllUsers = async (_req: express.Request, res: express.Response) => {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "An error occurred while fetching users" });
  }
};
