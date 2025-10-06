import { User } from "@/types/user";

export default function ChatHeader({ chatUser }: { chatUser: User | null }) {
  if (!chatUser) return <div className="p-4 text-gray-400">Loading...</div>;

  return (
    <div className="flex items-center gap-3 p-4 border-b border-gray-800">
      <div
        style={{
          backgroundColor: "hsl(250, 70%, 50%)",
          width: 36,
          height: 36,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {chatUser.name.charAt(0).toUpperCase()}
      </div>

      <div>
        <div className="text-white font-semibold">{chatUser.name}</div>
        <div className="text-gray-400 text-sm">{chatUser.email}</div>
        <span className="badge">{chatUser.role.toUpperCase()}</span>
      </div>
    </div>
  );
}
