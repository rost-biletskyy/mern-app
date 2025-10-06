export interface User {
    _id: string;
    name: string;
    email: string;
    role?: "ADMIN" | "MEMBER";
    avatar?: string;
  }