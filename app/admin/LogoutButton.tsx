"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const router = useRouter();

  async function onLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={onLogout}
      className="flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
    >
      <LogOut className="h-4 w-4" aria-hidden />
      Log out
    </button>
  );
}
