"use client";
import toast from "react-hot-toast";
import s from "./CustomToast.module.scss";

type Payload = {
  title: string;
  message?: string;
  avatar?: string;
  actionText?: string;
  onAction?: () => void;
};

export function showToast({ title, message, avatar, actionText = "Close", onAction }: Payload) {
  toast.custom((t) => (
    <div className={`${s.card} ${t.visible ? s.enter : s.leave}`}>
      <div className={s.body}>
        {/* {avatar && (
          <div className={s.avatar}>
            <img src={avatar} alt="" />
          </div>
        )} */}
        <div className={s.text}>
          <p className={s.title}>{title}</p>
          {message && <p className={s.desc}>{message}</p>}
        </div>
      </div>

      <div className={s.side}>
        <button
          className={s.action}
          onClick={() => {
            onAction?.();
            toast.dismiss(t.id);
          }}
        >
          {actionText}
        </button>
      </div>
    </div>
  ), { position: "bottom-center" });
}
