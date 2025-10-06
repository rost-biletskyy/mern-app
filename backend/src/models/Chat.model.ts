import mongoose, { Schema, Document } from "mongoose";

export interface IChat extends Document {
  participants: string[]; // user IDs or emails
  createdAt: Date;
}

const ChatSchema = new Schema<IChat>(
  {
    participants: [{ type: String, required: true }],
  },
  { timestamps: true }
);

export const Chat = mongoose.model<IChat>("Chat", ChatSchema);
