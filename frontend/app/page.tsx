import UsersTable from "../components/table/UsersTable";
import ThemeToggle from "../components/theme/ThemeToggle";
import ToastProvider from "@toast/ToastProvider";

export default function Page() {
  return (
    <div className="container">
      <div className="hstack" style={{ marginBottom: 14 }}>
        <span className="badge badge--admin">ADMIN</span>
        {/* <span className="badge badge--member">MEMBER</span> */}

        <div className="spacer" />
        <ThemeToggle />
      </div>

      <h1
        style={{
          fontSize: 28,
          margin: 0,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        Users
      </h1>

      <ToastProvider />
      <UsersTable />
    </div>
  );
}
