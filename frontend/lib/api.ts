import { User } from "@/types/user";
import { http } from "./http";

export async function getUsers(): Promise<User[]> {
  const { data } = await http.get<User[]>("/users");
  return data;
}

export async function createUser(user: Omit<User, "_id">): Promise<User> {
  const { data } = await http.post<User>("/users", user);
  return data;
}

export async function updateUser(
  id: string,
  user: Partial<User>
): Promise<User> {
  const { data } = await http.put<User>(`/users/${id}`, user);
  return data;
}

export async function deleteUser(id: string): Promise<void> {
  await http.delete(`/users/${id}`);
}
