"use client";
import { Toaster, ToastBar, toast } from "react-hot-toast";
import type { Toast } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="bottom-center"
      reverseOrder={false}
      gutter={8}
      containerStyle={{
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: 24,
        width: "min(1080px, calc(100vw - 20px))",
        padding: 0,
        zIndex: 9999,
      }}
      toastOptions={{
        style: {
          background: "var(--card)",
          color: "var(--text)",
          border: "1px solid var(--border)",
          boxShadow: "var(--elev-1)",
          borderRadius: "12px",
          padding: "12px 14px",
          cursor: "pointer",
        },
        duration: Infinity,
        icon: null,
        success: { style: { borderLeft: "3px solid var(--accent)" } },
        error:   { style: { borderLeft: "3px solid var(--remove, #ef4444)" } },
      }}
    >
      {(t: Toast) => (
        <div
          role="button"
          tabIndex={0}
          onClick={() => toast.dismiss(t.id)}
        >
          <ToastBar toast={t} />
        </div>
      )}
    </Toaster>
  );
}
