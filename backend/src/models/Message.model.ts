import mongoose, { Schema, Document } from "mongoose";

export interface IMessage extends Document {
  chatId: string;
  sender: string; 
  text: string;
  createdAt: Date;
}

const MessageSchema = new Schema<IMessage>(
  {
    chatId: { type: String, required: true },
    sender: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

export const Message = mongoose.model<IMessage>("Message", MessageSchema);
