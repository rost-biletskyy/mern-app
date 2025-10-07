import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  role: "ADMIN" | "MEMBER";
  avatar?: string;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: {
      type: String,
      enum: ["ADMIN", "MEMBER"],
      default: "MEMBER",
    },
    avatar: { type: String },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", UserSchema);
