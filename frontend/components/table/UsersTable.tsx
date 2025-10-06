"use client";
import { useEffect, useState } from "react";
import { getUsers, createUser, updateUser, deleteUser } from "@lib/api";
import { useRouter } from "next/navigation";
import UserForm from "@components/form/UserForm";
import usersTable from "./UsersTable.module.scss";
import toast from "react-hot-toast";
import {
  UserRoundX,
  UserRoundPen,
  MessageSquare,
  ContactRound,
} from "lucide-react";
import { User } from "@/types/user";

function Avatar({ name, size = 28 }: { name: string; size?: number }) {
  const bg = stringToColor(name || "?");
  const letter = name?.charAt(0)?.toUpperCase() || "?";
 
  function stringToColor(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return `hsl(${hash % 360}, 70%, 50%)`;
  }

  return (
    <div
      style={{
        backgroundColor: bg,
        width: size,
        height: size,
        borderRadius: "25%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: size / 2,
      }}
    >
      {letter}
    </div>
  );
}

export default function UsersTable() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  function handleOpenChat(user: User) {
    router.push(`/chat/${user._id}`);
  }

  useEffect(() => {
    refreshUsers();
  }, []);
  async function refreshUsers() {
    setUsers(await getUsers());
  }

  function errMsg(e: any, fb: string) {
    return e?.response?.data?.message || e?.message || fb;
  }

  async function handleAdd(user: Omit<User, "_id">) {
    try {
      await createUser({
        ...user,
        role: user.role ?? "MEMBER",
      });
      toast.success(`User created: ${user.name} / ${user.email}`);
      refreshUsers();
    } catch (e) {
      toast.error(
        errMsg(e, `Failed to create user: ${user.name} / ${user.email}`)
      );
    }
  }

  function handleEdit(user: User) {
    setEditingUser(user);
  }

  async function handleUpdate(user: User) {
    try {
      await updateUser(user._id, {
        name: user.name,
        email: user.email,
        role: user.role,
      });
      toast.success(`User updated: ${user.name} / ${user.email}`);
      setEditingUser(null);
      refreshUsers();
    } catch (e) {
      toast.error(
        errMsg(e, `Failed to update user: ${user.name} / ${user.email}`)
      );
    }
  }

  async function handleDelete(user: User) {
    try {
      await deleteUser(user._id);
      toast.error(`User deleted: ${user.name} / ${user.email}`);
      refreshUsers();
    } catch (e) {
      toast.error(
        errMsg(e, `Failed to delete user: ${user.name} / ${user.email}`)
      );
    }
  }

  return (
    <>
      {!editingUser && (
        <UserForm user={editingUser} onSubmit={(user) => handleAdd(user)} />
      )}

      {editingUser && (
        <UserForm
          user={editingUser}
          onSubmit={(user) => handleUpdate({ ...editingUser, ...user })}
          onCancel={() => setEditingUser(null)}
        />
      )}

      <table className={usersTable.table}>
        <thead>
          <tr>
            <th style={{ width: 40 }} />
            <th style={{ width: 220 }}>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th className={usersTable.actionsCol} />
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                {user.avatar || (
                  <Avatar name={user.name || user.email} size={30} />
                )}
              </td>
              <td className="flex items-center gap-2">{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.role === "ADMIN" ? (
                  <span className="badge badge--admin">ADMIN</span>
                ) : (
                  <span className="badge badge--member">MEMBER</span>
                )}
              </td>

              <td className={usersTable.actions}>
                <button
                  className={`${usersTable.iconBtn} ${usersTable.edit}`}
                  onClick={() => handleEdit(user)}
                  aria-label="Edit"
                >
                  <UserRoundPen size={20} />
                </button>
                <button
                  className={`${usersTable.iconBtn} ${usersTable.delete}`}
                  onClick={() => handleDelete(user)}
                  aria-label="Delete"
                >
                  <UserRoundX size={20} />
                </button>
                <button
                  className={`${usersTable.iconBtn} ${usersTable.chat}`}
                  aria-label="Chat"
                  onClick={() => handleOpenChat(user)}
                >
                  <MessageSquare size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
