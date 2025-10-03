import { http } from "./http";

export type User = {
  _id: string;
  name: string;
  email: string;
  role?: "admin" | "user";
  avatar?: string;
};

export async function getUsers() {
  const { data } = await http.get<User[]>("/users");
  return data;
}
export async function createUser(user: Omit<User, "_id">) {
  const { data } = await http.post<User>("/users", user);
  return data;
}
export async function updateUser(id: string, user: Partial<User>) {
  const { data } = await http.put<User>(`/users/${id}`, user);
  return data;
}
export async function deleteUser(id: string) {
  await http.delete(`/users/${id}`);
}
