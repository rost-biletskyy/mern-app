import { Request, Response } from "express";
import { User } from "../models/User.model";

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Server error while fetching users" });
  }
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, role } = req.body;
    if (!name || !email) return res.status(400).json({ message: "Invalid data" });

    const user = await User.create({ name, email, role });
    res.status(201).json(user);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, role } = req.body;

    const updated = await User.findByIdAndUpdate(
      id,
      { name, email, role },
      { new: true, runValidators: true }
    );

    if (!updated) return res.status(404).json({ message: "User not found" });
    res.json(updated);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const user = await User.findByIdAndDelete(id);
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.json({ message: "User deleted", id });
    } catch (err: any) {
      console.error("Delete error:", err.message);
      res.status(500).json({ message: "Server error", error: err.message });
    }
  };
