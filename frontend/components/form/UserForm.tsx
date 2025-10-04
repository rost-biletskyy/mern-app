"use client";
import { useState, FormEvent } from "react";
import { Search, UserPen, UserRoundPlus, UserRoundX } from "lucide-react";
import s from "./UserForm.module.scss";

type Props = {
  onSubmit: (v: { name: string; email: string }) => void;
  user?: { name: string; email: string } | null;
  onCancel?: () => void;
};

export default function UserForm({ onSubmit, user, onCancel }: Props) {
  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit({ name, email });
    if (!user) {
      setName("");
      setEmail("");
    }
  }

  return (
    <div className={s.form}>
      <form onSubmit={handleSubmit} className="spacer">
        <div className={s.row}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className={s.btnPrimary} type="submit">
            {user ? <UserPen size={18} /> : <UserRoundPlus size={18} suppressHydrationWarning />}
          </button>
          {user && onCancel && (
            <button type="button" className={s.btnCancel} onClick={onCancel} aria-label="Cancel">
              <UserRoundX size={18} />
            </button>
          )}
        </div>
      </form>
      <button
        type="button"
        className={s.btnSearch}
        //Search Logic by name email ...
      >
        <Search size={18} suppressHydrationWarning />
      </button>
    </div>
  );
}
